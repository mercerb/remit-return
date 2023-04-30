<script>
    import mapboxgl from "mapbox-gl";
    import * as d3 from "d3";
    import { onMount } from "svelte";
    // import data from "../../../class-data/money_over_time.json";
    import country_data from "../../../class-data/country_information.json";
    import data from "../../../class-data/geo_money_over_time.json"

    export let index;
  
    mapboxgl.accessToken = "pk.eyJ1Ijoic2hlbGJ5dSIsImEiOiJjbGgyZTBuczQwb3l2M2prY3hpOWM0N21uIn0.YbLFLROwC_eObLtt9kC52g";
  
    let container;
    let map;
  
    let zoomLevel;
  
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
        center: [-91.861, 21.283],
        zoom: 4,
        minZoom: 3.5,
        maxZoom:4.5,
        attributionControl: true, // removes attribution from the bottom of the map
        });

        window.addEventListener("resize", handleResize);

        function hideLabelLayers() {
        const labelLayerIds = map
            .getStyle()
            .layers.filter(
            (layer) =>
                layer.type === "symbol" && /label|text|place/.test(layer.id)
            )
            .map((layer) => layer.id);

        for (const layerId of labelLayerIds) {
            map.setLayoutProperty(layerId, "visibility", "none");
        }
    }

    map.on("load", () => {
        hideLabelLayers();
        updateBounds();
        map.on("zoom", updateBounds);
        map.on("drag", updateBounds);
        map.on("move", updateBounds);

        map.addSource('money_flow', {
        'type': 'geojson',
        data: data});

        map.addLayer({
            'id': 'money_circles',
            'type': 'circle',
            'source': 'money_flow',
            'paint': {
                'circle-color': "#BEE5B0",
                'circle-opacity': 1,
                'circle-radius': 50
            }
        });
    });

    
});
    
    function updateBounds() {
      const bounds = map.getBounds();
      geoJsonToFit.features[0].geometry.coordinates = [
        bounds._ne.lng,
        bounds._ne.lat,
      ];
      geoJsonToFit.features[1].geometry.coordinates = [
        bounds._sw.lng,
        bounds._sw.lat,
      ];
    }

    function create_country_buckets(country_coords) {
		country_buckets = marker_container
			.selectAll("circle")
			.data(country_coords)
			.enter()
			.append("circle")
			.attr("r", 5)
			.style("fill", "#808080")
			.attr("stroke", "#808080")
			.attr("stroke-width", 1)
			.attr("fill-opacity", 0.4)
			.attr("name", function (d) {
				return d["name"];
			});
	}


    let country_coords = country_data;
    let country_buckets;


    // function create_buckets(data) {
	// 	station_markers = marker_container
	// 		.selectAll("circle")
	// 		.data(station_data)
	// 		.enter()
	// 		.append("circle")
	// 		.attr("r", 5)
	// 		.style("fill", "#808080")
	// 		.attr("stroke", "#808080")
	// 		.attr("stroke-width", 1)
	// 		.attr("fill-opacity", 0.4)
	// 		.attr("name", function (d) {
	// 			return d["name"];
	// 		});
	// }

  
    let isVisible = false;
  
    $: if (index === 3) {
      isVisible = true;
    } else {
      isVisible = false;
    }

    // const marker_container = d3
	// 	.select(map.getCanvasContainer())
	// 	.append("svg")
	// 	.attr("width", "100%")
	// 	.attr("height", "100%")
	// 	.style("position", "absolute")
	// 	.style("z-index", 2);

  </script>
  



  <svelte:head>
    <link
      rel="stylesheet"
      href="https://api.mapbox.com/mapbox-gl-js/v2.14.0/mapbox-gl.css"
    />
  </svelte:head>
  
  <div class="map" class:visible={isVisible} bind:this={container} />
  
  <style>
    .map {
      width: 100%;
      height: 100vh; /* check problem when setting width */
      position: absolute;
      opacity: 0;
      visibility: hidden;
      transition: opacity 1s, visibility 1s;
      outline: grey solid 3px;
    }
  
    .map.visible {
      opacity: 1;
      visibility: visible;
    }
  </style>