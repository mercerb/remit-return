<script>
    import { scaleLinear, scaleOrdinal } from "d3-scale";
    import Tick from "./Tick.svelte";
    import Tooltip from "./Tooltip.svelte";

    const paddings = {
        top: 50,
        left: 50,
        right: 50,
        bottom: 50,
    };

    export let chartWidth = 360;
    export let chartHeight = 360;
    const tickNumber = chartWidth > 480 ? 10 : 5;

    export let data;
    export let xVar;
    export let yVars;

    const xScale = scaleLinear()
        .domain([
            Math.min(...data.map((d) => d[xVar])),
            Math.max(...data.map((d) => d[xVar])),
        ])
        .range([paddings.left, chartWidth - paddings.right]);

    const yScale = scaleLinear()
        .domain([
            Math.min(
                ...data.map((d) => Math.min(...yVars.map((yVar) => d[yVar])))
            ),
            Math.max(
                ...data.map((d) => Math.max(...yVars.map((yVar) => d[yVar])))
            ),
        ])
        .range([chartHeight - paddings.bottom, paddings.top])
        .nice(tickNumber);

    const yGrid = yScale.ticks(tickNumber);
    const xGrid = xScale.ticks(tickNumber);

    export let colorFunction;

    const colorScale =
        colorFunction === undefined
            ? scaleOrdinal()
                  .domain(yVars)
                  .range([
                      "#e41a1c",
                      "#377eb8",
                      "#4daf4a",
                      "#984ea3",
                      "#ff7f00",
                      "#ffff33",
                      "#a65628",
                      "#f781bf",
                      "#999999",
                  ])
            : colorFunction;

    const idContainer = "svg-container-" + Math.random() * 1000000;
    let mousePosition = { x: null, y: null };

    function followMouse(event) {
        const svg = document.getElementById(idContainer);
        if (svg === null) return;

        const dim = svg.getBoundingClientRect();
        const positionInSVG = {
            x: event.clientX - dim.left,
            y: event.clientY - dim.top,
        };

        mousePosition =
            positionInSVG.x > paddings.left &&
            positionInSVG.x < chartWidth - paddings.right &&
            positionInSVG.y > paddings.top &&
            positionInSVG.y < chartHeight - paddings.bottom
                ? { x: positionInSVG.x, y: positionInSVG.y }
                : { x: null, y: null };
    }

    function removePointer() {
        mousePosition = { x: null, y: null };
    }

    function computeSelectedXValue(value) {
        return data.filter((d) => xScale(d[xVar]) >= value)[0][xVar];
    }
</script>

<svg
    width={chartWidth}
    height={chartHeight}
    id={idContainer}
    on:mousemove={followMouse}
    on:mouseleave={removePointer}
>
    <g>
        {#each data as datum, i}
            {#each yVars as yVar}
                {#if i != data.length - 1}
                    <line
                        x1={xScale(data[i][xVar])}
                        x2={xScale(data[i + 1][xVar])}
                        y1={yScale(data[i][yVar])}
                        y2={yScale(data[i + 1][yVar])}
                        stroke={colorScale(yVar)}
                        stroke-width="2"
                    />
                {/if}
            {/each}
        {/each}
    </g>
    <g>
        <line
            x1={paddings.left}
            x2={chartWidth - paddings.right}
            y1={chartHeight - paddings.bottom}
            y2={chartHeight - paddings.bottom}
            stroke="black"
            stroke-width="2"
        />
        <line
            x1={paddings.left}
            x2={paddings.left}
            y1={paddings.top}
            y2={chartHeight - paddings.bottom}
            stroke="black"
            stroke-width="2"
        />
    </g>
    <g>
        {#each yGrid.slice(1) as gridLine}
            <Tick
                x={paddings.left}
                y={yScale(gridLine)}
                value={gridLine}
                direction={"horizontal"}
            />
        {/each}
    </g>
    <g>
        {#each xGrid as gridLine}
            <Tick
                x={xScale(gridLine)}
                y={chartHeight - paddings.bottom}
                value={gridLine}
                direction={"vertical"}
                format={false}
            />
        {/each}
    </g>
    {#if mousePosition.x !== null}
        <g
            transform="translate({xScale(
                computeSelectedXValue(mousePosition.x)
            )} 0)"
        >
            <line
                x1="0"
                x2="0"
                y1={paddings.top}
                y2={chartHeight - paddings.bottom - 2}
                stroke="black"
                stroke-width="1"
            />
            {#each yVars as yVar}
                <circle
                    cx={0}
                    cy={yScale(
                        data.find(
                            (d) =>
                                d[xVar] ===
                                computeSelectedXValue(mousePosition.x)
                        )[yVar]
                    )}
                    r="3"
                    fill={colorScale(yVar)}
                />
            {/each}
        </g>
    {/if}

    {#if mousePosition.x !== null}
        <Tooltip
            labels={yVars}
            values={data.find(
                (d) => d[xVar] === computeSelectedXValue(mousePosition.x)
            )}
            {colorScale}
            x={mousePosition.x + 180 > chartWidth
                ? mousePosition.x - 195
                : mousePosition.x + 15}
            y={Math.max(0, mousePosition.y - (yVars.length + 2) * 25)}
            backgroundColor={"black"}
            opacity="0.5"
            textColor={"white"}
            title={"Year: " + computeSelectedXValue(mousePosition.x)}
            width="180"
            adaptTexts={false}
        />
    {/if}
</svg>
