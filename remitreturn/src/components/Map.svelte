<script>
	import * as d3 from "d3";
	import { onMount } from "svelte";
	import mapboxgl from "mapbox-gl";
	mapboxgl.accessToken =
		"pk.eyJ1Ijoic2hlbGJ5dSIsImEiOiJjbGgyZTBuczQwb3l2M2prY3hpOWM0N21uIn0.YbLFLROwC_eObLtt9kC52g";
	import country_data from "../../../class-data/country_data.json";
	import remit_data from "../../../class-data/money_separated_transactions.json";

	export let index, visible_index, offset;
	let map_loaded = false;
	let isVisible = false;
	let slider_time = 15;
	let slider_label = "Time";
	let remits = new Array(4).fill(0);
	let container, map, zoomLevel, country_markers;

	// Svelte reactive statements
	$: {
		let filterd_remits = remit_data.filter((x) => x.month <= slider_time);
		tallyRemits(filterd_remits);
		if (map_loaded) update_country_markers();
	}

	$: if (index >= visible_index) {
		isVisible = true;
	} else {
		isVisible = false;
	}

	function updateZoomLevel() {
		const screenWidth = window.innerWidth;
		zoomLevel = screenWidth <= 600 ? 4 : 5.85; // Adjust these values as needed
	}

	function handleResize() {
		updateZoomLevel();
		map.setZoom(zoomLevel);
	}

	onMount(() => {
		updateZoomLevel();
		map = new mapboxgl.Map({
			container,
			style: "mapbox://styles/mapbox/light-v11",
			center: [-92.896926, 21.796506],
			zoom: 4.5, // starting zoom level
			minZoom: 3,
			maxZoom: 6,
		});

		window.addEventListener("resize", handleResize);

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

	// Add up all remittances/money recieved by each country
	function tallyRemits(remit_data) {
		remits.fill(0);
		for (let i = 0; i < remit_data.length; ++i) {
			remits[remit_data[i]["home_country"]] += remit_data[i]["remit"];
			remits[3] += remit_data[i]["money_us"];
		}
		// console.log(remits);
	}

	function update_country_markers() {
		country_markers
			.transition()
			.duration(500)
			.attr("r", (d) => scaleRadiusRemits(remits[d["id"]]));
	}

	function scaleRadiusRemits(remits, maxRemits = 40000) {
		const scaleRadius = d3
			.scaleSqrt()
			.domain([0, 1, maxRemits])
			.range([0, 3, 30]);
		return scaleRadius(remits);
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

<div
	id="main-map"
	class="map"
	class:visible={isVisible}
	bind:this={container}
/>

<div>
	<div class="overlay">
		<label>{slider_label}</label>
		<input
			id="slider"
			type="range"
			min="0"
			max={`${Math.max(...remit_data.map((x) => x.month))}`}
			bind:value={slider_time}
		/>
	</div>
</div>

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