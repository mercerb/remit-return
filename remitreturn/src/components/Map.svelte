<script>
    import mapboxgl from "mapbox-gl";
    import * as d3 from "d3";
    import { onMount } from "svelte";
    import country_locations from "../../../class-data/country_information.json";
    import remit_data from "../../../class-data/money_separated_transactions.json"

    export let index;
    export let geoJsonToFit;
  
    let container;
    let map;
  
    let zoomLevel;
  
    mapboxgl.accessToken = "pk.eyJ1Ijoic2hlbGJ5dSIsImEiOiJjbGgyZTBuczQwb3l2M2prY3hpOWM0N21uIn0.YbLFLROwC_eObLtt9kC52g";
    
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
        // Create a new map
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
            create_country_markers(country_locations);
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

    // map.on("load", () => {
    //     map.addSource('points', {
    //         'type': 'geojson',
    //         'data': {
    //             'type': 'FeatureCollection',
    //             'features': [
    //                 {
    //                     // feature for HND
    //                     'type': 'Feature',
    //                     'geometry': {
    //                         'type': 'Point',
    //                         'coordinates': [-86.663, 14.826]
    //                     },
    //                     'properties': {
    //                         'title': 'HND'
    //                     }
    //                 },
    //                 {
    //                     // feature for GT
    //                     'type': 'Feature',
    //                     'geometry': {
    //                         'type': 'Point',
    //                         'coordinates': [-90.574, 15.165]
    //                     },
    //                     'properties': {
    //                         'title': 'GT'
    //                     }
    //                 },
    //                 {
    //                     // feature for SLV
    //                     'type': 'Feature',
    //                     'geometry': {
    //                         'type': 'Point',
    //                         'coordinates': [-88.816, 13.547]
    //                     },
    //                     'properties': {
    //                         'title': 'SLV'
    //                     }
    //                 },
    //                 {
    //                     // feature for USA
    //                     'type': 'Feature',
    //                     'geometry': {
    //                         'type': 'Point',
    //                         'coordinates': [-86.0, 0]
    //                     },
    //                     'properties': {
    //                         'title': 'USA'
    //                     }
    //                 }
    //             ]
    //         }
    //     });

    //     // Add a symbol layer
    //     map.addLayer({
    //         'id': 'points-markers',
    //         'type': 'circle',
    //         'source': 'points',
    //         'paint': {
    //             'circle-color': '#f08',
    //             'circle-opacity': 1,
    //             'circle-radius': 5

    //         }
    //     });

    // });
    

    function create_country_markers(contry_locations) {
		country_markers = marker_container
			.selectAll("circle")
			.data(contry_locations)
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
        
        position_country_markers();
	}

    function position_country_markers() {
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

  
    let isVisible = false;
  
    $: if (index === 3) {
      isVisible = true;
    } else {
      isVisible = false;
    }

    const marker_container = d3
		.select(map.getCanvasContainer())
		.append("svg")
		.attr("width", "100%")
		.attr("height", "100%")
		.style("position", "absolute")
		.style("z-index", 2);

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