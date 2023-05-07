<script>
    import mapboxgl from "mapbox-gl";
	import country_data from "../../../class-data/country_data.json";
	import remit_data from "../../../class-data/money_separated_transactions.json";
    import { onMount } from "svelte";
    import * as d3 from "d3";
	export let index, offset;

	// console.log(remit_data)
	let map_loaded = false;
    
    let slider_time = 15;
    let slider_label = "Time";

	mapboxgl.accessToken = "pk.eyJ1Ijoic2hlbGJ5dSIsImEiOiJjbGgyZTBuczQwb3l2M2prY3hpOWM0N21uIn0.YbLFLROwC_eObLtt9kC52g";
	let container;
	let map;

	onMount(() => {
		map = new mapboxgl.Map({
			container,
			style: "mapbox://styles/mapbox/light-v11", 
			center: [-92.896926, 21.796506], 
			zoom: 4.5, // starting zoom level
			minZoom: 4,
			maxZoom: 5,
		});
		container = map.getCanvasContainer();

		map.on("load", () => {
			map_loaded = true;
			create_country_markers(country_data);
			tallyRemits(remit_data);
			update_country_markers();
		});
			
		map.on("viewreset", position_country_markers);
		map.on("move", position_country_markers);
		map.on("moveend", position_country_markers);

    });

	

	function create_country_markers(country_data) {
		console.log("creating country markers");
		country_markers = marker_container
			.selectAll("circle")
			.data(country_data)
			.enter()
			.append("circle")
			.attr("r", 10)
			.style("fill", "#bd2c88ff")
			.attr("stroke", "#bd2c88ff")
			.attr("stroke-width", 1)
			.attr("fill-opacity", 0.75)
			.attr("name", function (d) {
				return d["name"];
			});
        
		position_country_markers();
	}

	function position_country_markers() {
		console.log("positioning country markers");

		country_markers
			.attr("cx", function (d) {
				return project(d).x;
			})
			.attr("cy", function (d) {
				return project(d).y;
			});
	}

	function project(d) {
		return map.project(new mapboxgl.LngLat(+d.lon, +d.lat));
	}

	// Add up all remitances/money recieved by each country
	function tallyRemits(remit_data) {
		remits.fill(0);
		for (let i = 0; i < remit_data.length; ++i) {
			remits[remit_data[i]["home_country"]] += remit_data[i]["remit"];
			remits[3] += remit_data[i]["money_us"];
		}
		// console.log(remits)
	}

	function update_country_markers() {
		country_markers
			.transition()
			.duration(500)
			.attr("r", (d) => scaleRadiusRemits(remits[d["id"]]))
	}

	function scaleRadiusRemits(remits, maxRemits=40000) {
		const scaleRadius = d3.scaleSqrt().domain([0, 1, maxRemits])
			.range([0, 3, 30]);
		return scaleRadius(remits)
	}

	let country_markers;
	let remits = new Array(4).fill(0)

	
	$: {
		let filterd_remits = remit_data.filter(x => x.month <= slider_time)
		tallyRemits(filterd_remits);
		if(map_loaded) update_country_markers();
	}

    let isVisible = false;

    $: if (index >= 4) {
        isVisible = true;
    } else {
        isVisible = false;
    }

    const marker_container = d3
		.select(container)
		.append("svg")
		.attr("width", "100%")
		.attr("height", "100%")
		.style("position", "relative")
		.style("z-index", 2);

</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://api.mapbox.com/mapbox-gl-js/v2.14.0/mapbox-gl.css"
  />
</svelte:head>


<style>
    .map {
      width: 100%;
      height: 100vh; /* check problem when setting width */
      position: relative;
      opacity: 0;
      visibility: hidden;
      transition: opacity 2s, visibility 2s;
      outline: blue solid 3px;
    }
  
    .map.visible {
      opacity: 1;
      visibility: visible;
    }
</style>

<div class="map" class:visible={isVisible} bind:this={container}/>

<!-- <div id="map" ></div> -->


<div>
	<div class="overlay">
		<label>{slider_label}</label>
		<input
			id="slider"
			type="range"
			min="0"
			max={`${Math.max(...remit_data.map(x => x.month))}`}
			bind:value={slider_time}
		/>
	</div>
</div>
