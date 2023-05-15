<script>
    import * as d3 from "d3";
    import { draw } from "svelte/transition";
    import { cubicOut, cubicInOut } from "svelte/easing";
    import { scaleLinear } from "d3-scale";
    import data from "../../class-data/money_over_time_sample.json";

    export let index, visible_index, themeColors, width, height;

    // set general use variables
    let chartWidth = 650;
    let chartHeight = 400;
    // let chartWidth = width;
    // let chartHeight = height;

    const paddings = {
        top: 20,
        left: 100,
        right: 50,
        bottom: 50,
    };

    // set scaling variables
    const everyMonth = data.flatMap((d) => d.values.map((v) => v.month));
    // const allMonths = [...new Set(everyMonth)];
    const allMonths = [0, 1, 2, 3, 4, 5]; // all are paid off in 6 months
    const minMonth = Math.min(...allMonths);
    const maxMonth = Math.max(...allMonths);

    const allCosts = data.flatMap((d) => d.values.map((v) => v.mig_cost_left));
    const minCost = Math.min(...allCosts);
    const maxCost = Math.max(...allCosts) + 1000; // buffer

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
            let index_extent = [Math.round(minMonth), Math.round(maxMonth + 1)];
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

            let size_extent = [Math.round(minCost), Math.round(maxCost + 1)];
            let size_increment = Math.floor(
                (size_extent[1] - size_extent[0]) / numTicks
            );
            size_increment = 1000 * Math.round(size_increment / 1000);
            for (
                let i = size_extent[0];
                i < size_extent[1];
                i = i + Math.max(1, size_increment)
            ) {
                yTicks.push(i);
            }
        }
    }

    const idContainer = "svg-container-" + Math.random() * 1000000;

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
        return values
            .map(function (value) {
                return xScale(value.month) + "," + yScale(value.mig_cost_left);
            })
            .join(" ");
    }
</script>

<div class="LineChart">
    <div class="line-chart-2-text">
        <p>
            Now, using this calculation method, let's look at migration cost
            balance over time for these 10 migrants based on their initial
            migration cost, monthly remittances sent home, and earning
            potential.
        </p>
        <p id="center">Breakeven-Time (in months) on Migration Investment</p>
    </div>

    <svg width={chartWidth} height={chartHeight} id={idContainer}>
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
            />
            <text
                x={paddings.left}
                y={chartHeight - paddings.bottom}
                transform="translate(0,0) rotate(90)"
            />
            <text x={paddings.left} y={paddings.top} />
        </g>
        <!-- draw X and Y axis labels -->
        <text x={-10} y={90} transform="translate(100,100) rotate(90)"
            >Cost of Migration ($ USD)</text
        >
        <text x={chartWidth / 2 - 30} y={chartHeight - 10}
            >Months Since Migration</text
        >
        <g>
            {#if index > visible_index}
                {#each data as migrant, _}
                    <polyline
                        points={getDataPoints(migrant.values)}
                        fill="none"
                        stroke={getLineColor(migrant)}
                        stroke-width="3"
                        transition:draw={{
                            duration: 5000,
                            easing: cubicInOut,
                        }}
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
                    <line stroke="black" y2="6" />
                    <text
                        dy="0.71em"
                        fill="black"
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
                    <line stroke="black" x2="-5" />
                    <text dy="0.32em" fill="black" x="-{10}" text-anchor="end"
                        >{"$" + y}</text
                    >
                </g>
            {/each}
        </g>
    </svg>
</div>

<div id="line-chart-2" />

<style>
    .LineChart {
        width: 100%;
        height: 100vh;
        position: relative;
        text-align: center;
        font-size: 15px;
        font-family: sans-serif;
    }

    .line-chart-2-text {
        width: 90%;
        padding-top: 0%;
        margin: auto;
        position: relative;
        text-align: left;
        font-size: 18px;
        font-family: sans-serif;
    }

    #center {
        text-align: center;
        font-size: 16px;
        font-weight: bold;
    }
</style>
