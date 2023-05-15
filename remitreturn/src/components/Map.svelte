<script>
	import * as d3 from "d3";
	import { onMount } from "svelte";
	import mapboxgl from "mapbox-gl";
	mapboxgl.accessToken =
		"pk.eyJ1Ijoic2hlbGJ5dSIsImEiOiJjbGgyZTBuczQwb3l2M2prY3hpOWM0N21uIn0.YbLFLROwC_eObLtt9kC52g";
	import country_data from "../../class-data/country_data.json";
	import remit_data from "../../class-data/money_separated_transactions.json";
	import { fade, fly } from "svelte/transition";

	export let index, visible_index, progress;
	const mapCenter = [-88.896926, 21.796506];
	const mapLabelXShift = 280;
	let map_loaded = false;
	let isVisible = false;
	let isVisibleFinalText = false;
	let filtered_remits = [];
	let curr_month = 0;
	let container;
	let remits = new Array(4).fill(0);
	let marker_container, map, zoomLevel, country_markers;
	// let maxNotCalculated = true;
	let maxRemitValue = 0;

	let cumulative_us_money = 0;
	let cumulative_avg_nt_remits = 0;

	// Svelte reactive statements
	$: {
		if (remit_data.length != 0) {
			maxRemitValue = getMaxRemitValue(remit_data);
			const initial_prog = 0.8;
			const max_months = 15;
			let m = Math.floor(
				max_months * ((progress - initial_prog) / (1 - initial_prog))
			);
			curr_month = Math.max(0, m);
			filtered_remits = remit_data.filter((x) => x.month <= curr_month);
			tallyRemits(filtered_remits);
			if (map_loaded) update_country_markers();
		}
	}

	$: if (index >= visible_index) {
		isVisible = true;
	} else {
		isVisible = false;
	}

	$: if (curr_month >= 14) {
		isVisibleFinalText = true;
	} else {
		isVisibleFinalText = false;
	}

	function updateZoomLevel() {
		const screenWidth = window.innerWidth;
		zoomLevel = screenWidth <= 600 ? 4 : 5.85; // Adjust these values as needed
	}

	function handleResize() {
		// updateZoomLevel();
		// map.setZoom(zoomLevel);
		// map.setCenter(mapCenter);
	}

	onMount(() => {
		updateZoomLevel();
		map = new mapboxgl.Map({
			container,
			style: "mapbox://styles/mapbox/light-v11",
			center: mapCenter,
			zoom: 4.25, // starting zoom level
			minZoom: 3,
			maxZoom: 6,
		});

		marker_container = d3
			.select(map.getCanvasContainer())
			.append("svg")
			.attr("width", "100%")
			.attr("height", "100vh")
			.style("position", "relative")
			.style("z-index", 2);

		window.addEventListener("resize", handleResize);

		map.on("load", () => {
			map_loaded = true;
			create_country_markers(country_data);
			tallyRemits(remit_data);
			update_country_markers();

			map.on("viewreset", position_country_markers);
			map.on("move", position_country_markers);
			map.on("moveend", position_country_markers);
		});
	});

	function create_country_markers(country_data) {
		country_markers = marker_container
			.selectAll("circle")
			.data(country_data)
			.enter()
			.append("circle")
			.attr("r", 10)
			.style("fill", "#118C4F") // money green
			.attr("stroke", "#118C4F")
			.attr("stroke-width", 1)
			.attr("fill-opacity", 0.75)
			.attr("name", function (d) {
				return d["name"];
			});

		position_country_markers();
	}

	function position_country_markers() {
		function project(d) {
			return map.project(new mapboxgl.LngLat(+d.lon, +d.lat));
		}
		country_markers
			.attr("cx", function (d) {
				return project(d).x;
			})
			.attr("cy", function (d) {
				return project(d).y;
			});
	}

	function update_country_markers() {
		country_markers
			.transition()
			.duration(500)
			.attr("r", (d) => scaleRadiusRemits(remits[d["id"]]));
	}

	// Add up all remittances/money received by each country
	function tallyRemits(remit_data) {
		remits.fill(0);
		for (let i = 0; i < remit_data.length; ++i) {
			remits[remit_data[i]["home_country"]] += remit_data[i]["remit"];
			remits[3] += remit_data[i]["money_us"];
		}
		cumulative_avg_nt_remits = Math.floor(
			(1 / 3) * (remits[0] + remits[1] + remits[2])
		);
		cumulative_us_money = remits[3];
	}

	function getMaxRemitValue(remit_data) {
		let all_remits = new Array(4).fill(0);
		for (let i = 0; i < remit_data.length; ++i) {
			all_remits[remit_data[i]["home_country"]] += remit_data[i]["remit"];
			all_remits[3] += remit_data[i]["money_us"];
		}
		cumulative_avg_nt_remits = Math.floor(
			(1 / 3) * (all_remits[0] + all_remits[1] + all_remits[2])
		);
		cumulative_us_money = all_remits[3];
		return Math.max(...all_remits);
	}

	function scaleRadiusRemits(remits) {
		const scaleRadius = d3
			.scaleSqrt() // TODO: look at other options to scale more dramatically
			.domain([0, maxRemitValue])
			.range([0, 100]);
		return scaleRadius(remits);
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://api.mapbox.com/mapbox-gl-js/v2.14.0/mapbox-gl.css"
	/>
</svelte:head>
<div class="map" class:visible={isVisible} bind:this={container} />
<!-- <div class="map" class:visible={isVisible} bind:this={container}>
	<svg class="map-label">
		<text class="map-label-text" x={mapLabelXShift} y="30">
			Months since migration: {curr_month}
		</text>
		<text class="map-label-text" x={mapLabelXShift} y="60">
			Money fed to US economy: ${cumulative_us_money}
		</text>
		<text class="map-label-text" x={mapLabelXShift} y="90">
			Remittances sent to a Northern Triangle
		</text>
		<text class="map-label-text" x={mapLabelXShift} y="120">
			country (on average): ${cumulative_avg_nt_remits}
		</text>
	</svg>
</div> -->

<div class="map-label" class:visible={isVisible}>
	{#if isVisible}
		<p>
			Months since migration: {curr_month} <br />
			Money fed to US economy: ${cumulative_us_money} <br />
			Remittances sent to a Northern Triangle <br />
			country (on average): ${cumulative_avg_nt_remits}
		</p>{/if}
</div>

<div
	class="end-statement"
	in:fade={{ delay: 1000 + i * 150, duration: 800 }}
	class:visible={isVisibleFinalText}
>
	{#if isVisibleFinalText}
		<p transition:fly={{ y: 200, duration: 2000 }}>
			It might seem like migrants are focused only on the wellbeing of
			their home country, but by coming to the United States and working
			in this country, they also bolster the US economy - leading to
			growth for all.
		</p>
	{/if}
</div>

<style>
	.map {
		width: 100%;
		height: 100vh;
		position: absolute;
		opacity: 0;
		visibility: hidden;
		transition: opacity 2s, visibility 2s;
		/* outline: blue solid 3px; */
	}

	.map.visible {
		opacity: 1;
		visibility: visible;
	}

	.map-label {
		position: absolute;
		/* outline: greenyellow solid 3px; */
		width: 100%;
		z-index: 10;
		left: 20px;
		bottom: 20px;
		padding: 20px;
		text-align: left;
		fill: darkslategray;
		color: darkslategray;
		font: bold 26px sans-serif;
	}

	.map-label-text {
		fill: darkslategray;
		font: bold 26px sans-serif;
		text-align: left;
	}

	.end-statement {
		position: absolute;
		/* outline: greenyellow solid 3px; */
		width: 40%;
		z-index: 12;
		left: 650px;
		bottom: 250px;
		padding: 10px;
		fill: darkslategray;
		color: darkslategray;
		font: bold 26px sans-serif;
		text-align: left;
		visibility: hidden;
	}

	.end-statement.visible {
		opacity: 1;
		visibility: visible;
	}
</style>
