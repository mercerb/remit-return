<script>
    import * as d3 from "d3";
    import { onMount } from "svelte";
    import { draw } from "svelte/transition";
    import { cubicOut, cubicInOut } from "svelte/easing";
    import { scaleLinear } from "d3-scale";
    import data from "../../../class-data/money_over_time.json";
    //import Axis from "./Axis.svelte";

    export let index, width, height, projection, themeColors;

    // set general use variables
    let chartWidth = 600;
    let chartHeight = 400;

    const paddings = {
        top: 50,
        left: 50,
        right: 50,
        bottom: 50,
    };


    // set scaling variables
    const everyMonth = data.flatMap(d => d.values.map(v => v.month));
    const allMonths = [...new Set(everyMonth)];
    const minMonth = Math.min(...allMonths);
    const maxMonth = Math.max(...allMonths);

    const allCosts = data.flatMap(d => d.values.map(v => v.mig_cost_left));
    const minCost = Math.min(...allCosts);
    const maxCost = Math.max(...allCosts);

    $: xScale = scaleLinear()
        .domain([minMonth, maxMonth])
        .range([paddings.left, chartWidth - paddings.right]);
    $: yScale = scaleLinear()
        .domain([minCost, maxCost])
        .range([chartHeight - paddings.bottom, paddings.top]);

    // define tick marks
    let xTicks = [];
    let yTicks = [];
    let numTicks = 10;
    $: {
        xTicks = [];
        yTicks = [];

        if (data.length > 1) {
            let index_extent = [
                Math.round(minMonth),
                Math.round(maxMonth + 1),
            ];
            let index_increment = Math.floor(
                (index_extent[1] - index_extent[0]) / numTicks
            );
            for (
                let i = index_extent[0];
                i < index_extent[1];
                i = i + Math.max(1, index_increment)
            ) {
                xTicks.push(i);
            }

            let size_extent = [
                Math.round(minCost),
                Math.round(maxCost + 1),
            ];
            let size_increment = Math.floor(
                (size_extent[1] - size_extent[0]) / numTicks
            );
            for (
                let i = size_extent[0];
                i < size_extent[1];
                i = i + Math.max(1, size_increment)
            ) {
                yTicks.push(i);
            }
        }
    }

    // hover effect
    const idContainer = "svg-container-" + Math.random() * 1000000;
    let mousePosition = { x: null, y: null };
    let pageMousePosition = { x: null, y: null };
    let currentHoveredPoint = null;

  
    function getLineColor(data) {
        if (
            data.values.every((i) => i.remit == 0) &&
            data.values.every((i) => i.money_us == 0)
        ) {
            return themeColors.orange;
        } else {
            return themeColors.blue;
        }
    }
  
    // Create the string of coordinates
    function getDataPoints(values) {
        return values.map(function(value) {
            return xScale(value.month) + "," + yScale(value.mig_cost_left);
        }).join(" ");
    }
  
</script>
  
<div class="LineChart2">
    <svg
        width={chartWidth}
        height={chartHeight}
        id={idContainer}
    >

    <!-- draw X and Y axes -->
     <g>
        <line
            x1={paddings.left}
            x2={chartWidth - paddings.right}
            y1={chartHeight - paddings.bottom}
            y2={chartHeight - paddings.bottom}
            stroke={themeColors.blue}
            stroke-width="2"
            class="axis"
        />
        <line
            x1={paddings.left}
            x2={paddings.left}
            y1={paddings.top}
            y2={chartHeight - paddings.bottom}
            stroke={themeColors.blue}
            stroke-width="2"
            class="axis"
            text="Cost of Migration (USD)"
        />
    </g> 
    <g>
    {#if index > 0}
        {#each data as migrant, i}
            <polyline
                points={getDataPoints(migrant.values)}
                fill="none"
                stroke={getLineColor(migrant)}
                stroke-width="3"
                transition:draw={{ duration: 5000, easing: cubicInOut }}
                />
        {/each}
    {/if} 
    </g>

    <!-- draw ticks on the X and Y axes -->
    <g transform="translate(0, {chartHeight - paddings.bottom})">
        {#each xTicks as x}
            <g
                class="tick"
                opacity="1"
                transform="translate({xScale(x)},0)"
            >
                <line stroke=black y2="6" />
                <text
                    dy="0.71em"
                    fill=black
                    y="10"
                    x="-5"
                    text-anchor="middle"
                >
                    {x}
                </text>
            </g>
        {/each}
    </g>
    <g transform="translate({paddings.left}, 0)">
        {#each yTicks as y}
            <g
                class="tick"
                opacity="1"
                transform="translate(0,{yScale(y)})"
            >
                <line stroke=black x2="-5" />
                <text
                    dy="0.32em"
                    fill=black
                    x="-{10}"
                    text-anchor="end"
                >{"$"+y}</text>
                </g
            >
        {/each}
    </g>

</svg>
</div>

<style>
    .LineChart2 {
    width: 100%;
    height: 100vh; /* check problem when setting width */
    position: absolute;
    }
</style>
                
  <div id="chart" />
  