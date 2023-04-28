<script>
    import * as d3 from "d3";
    import { onMount } from "svelte";
    import { scaleLinear } from "d3-scale";
    import data from "../../../class-data/money_over_time.json";
  
    export let index, width, height, projection;
  
    function getLineColor(data) {
      if (
        data.values.every((i) => i.remit == 0) &&
        data.values.every((i) => i.money_us == 0)
      ) {
        return "red";
      } else {
        return "black";
      }
    }
  
    // Create the string of coordinates
    function getDataPoints(values) {
        return values.map(function(value) {
            return value.month + "," + value.money_us;
        }).join(" ");
    }
  
    /*
    onMount(() => {
      const margin = { top: 50, right: 50, bottom: 40, left: 70 };
      const width = 600 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;
  
      const svg = d3
        .select("#chart")
        .append("svg")
        .attr(
          "viewBox",
          `0 0 ${width + margin.left + margin.right} ${
            height + margin.top + margin.bottom
          }`
        )
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
  
      const x = d3
        .scaleLinear()
        .range([0, width])
        .domain(d3.extent(data[0].values, (d) => d.month));
  
      const y = d3
        .scaleLinear()
        .range([height, 0])
        .domain([
          0,
          d3.max(data, (d) => d3.max(d.values, (v) => v.mig_cost_left)),
        ]);
  
      const line = d3
        .line()
        .x((d) => x(d.month))
        .y((d) => y(d.mig_cost_left));
  
      // add a path element for each line in the data
      const paths = svg
        .selectAll(".line")
        .data(data)
        .enter()
        .append("path")
        .attr("class", "line")
        .attr("d", (d) => line(d.values))
        .style("stroke", (d) => getLineColor(d))
        .style("stroke-width", 2)
        .style("fill", "none")
        .style("opacity", 0)
        .on("mouseover", function (event, d) {
          console.log(event, d);
          // Show tooltip on mouseover
          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip
            .html(
              `Value: ${d.values[0]} ${d.values.mig_cost_left} Month: ${d.values.month}`
            )
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY - 28 + "px");
        })
        .on("mouseout", function (d) {
          // Hide tooltip on mouseout
          tooltip.transition().duration(500).style("opacity", 0);
        });
  
      // Add a tooltip element to the page
      const tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
  
      const totalLength = paths.node().getTotalLength();
  
      paths
        .style("stroke-dasharray", totalLength)
        .style("stroke-dashoffset", totalLength)
        .transition()
        .duration(3000)
        .ease(d3.easeLinear)
        .style("stroke-dashoffset", 0)
        .style("opacity", 1);
  
      const xAxis = d3.axisBottom(x);
      const yAxis = d3.axisLeft(y).tickFormat((x) => `$${x}`);
  
      // X-axis and label
      svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);
  
      svg
        .append("text")
        .attr(
          "transform",
          "translate(" + width / 2 + " ," + (height + margin.bottom) + ")"
        )
        .style("text-anchor", "middle")
        .text("Months After Migration");
  
      // Y-axis and label
      svg.append("g").call(yAxis);
  
      svg
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - height / 2)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Cost of Migration (USD)");
    });
    */
  </script>
  
<svg class="LineChart2">
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
</svg>

<style>
    .LineChart2 {
    width: 100%;
    height: 100vh; /* check problem when setting width */
    position: absolute;
    }
</style>
                
  <div id="chart" />
  