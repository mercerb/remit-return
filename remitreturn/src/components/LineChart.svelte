<script>
  import * as d3 from 'd3';
  import { onMount } from 'svelte';
  let data = [
    { name: 'Person 1', values: [
      { date: new Date('2023-04-23'), mig_cost_left: 5000, remit: 200 },
      { date: new Date('2023-04-24'), mig_cost_left: 4000, remit: 200 },
      { date: new Date('2023-04-25'), mig_cost_left: 3000, remit: 200 },
      { date: new Date('2023-04-26'), mig_cost_left: 2000, remit: 200 },
      { date: new Date('2023-04-27'), mig_cost_left: 1000, remit: 200 },
    ]},
    { name: 'Person 2', values: [
      { date: new Date('2023-04-23'), mig_cost_left: 4000, remit: 100 },
      { date: new Date('2023-04-24'), mig_cost_left: 3500, remit: 100 },
      { date: new Date('2023-04-25'), mig_cost_left: 3000, remit: 100 },
      { date: new Date('2023-04-26'), mig_cost_left: 2500, remit: 100 },
      { date: new Date('2023-04-27'), mig_cost_left: 2000, remit: 100 },
    ]}
  ];

  onMount(() => {
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // let value_to_show = mig_cost_left;
    // function get_value_to_show(v) {
    //     return v[value_to_show]
    // }

    const svg = d3.select('#chart')
      .append('svg')
      .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const x = d3.scaleTime()
      .range([0, width])
      .domain(d3.extent(data[0].values, d => d.date));

    const y = d3.scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, d => d3.max(d.values, v => v.mig_cost_left))]);

    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.mig_cost_left));

    const paths = svg.selectAll('.line')
      .data(data)
      .enter()
      .append('path')
      .attr('class', 'line')
      .attr('d', d => line(d.values))
      .style('stroke', (d, i) => d3.schemeCategory10[i])
      .style('fill', 'none')
      .style('opacity', 0);

    const totalLength = paths.node().getTotalLength();

    paths
      .style('stroke-dasharray', totalLength)
      .style('stroke-dashoffset', totalLength)
      .transition()
      .duration(3000)
      .ease(d3.easeLinear)
      .style('stroke-dashoffset', 0)
      .style('opacity', 1);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    svg.append('g')
      .call(yAxis);
  });
</script>

<div id="chart"></div>
