<script>
  import {
    sankey as d3sankey,
    sankeyLeft,
    sankeyRight,
    sankeyCenter,
    sankeyJustify,
  } from "d3-sankey";
  import { linkHorizontal } from "d3-shape";
  import { scaleSequential } from "d3-scale";
  import { interpolateCool } from "d3-scale-chromatic";
  import { extent as d3Extent } from "d3-array";

  import sankey_data from "../../../class-data/sankey_data.json";

  import SankeyGroup from "./SankeyGroup.svelte";

  let sankeyWidth = 600;
  let sankeyHeight = 400;

  const margin = {
    top: 5,
    left: 100,
    right: 50,
    bottom: 5,
  };

  export let index, visible_index;

  export let size = undefined;
  export let nodeId = undefined;
  export let nodeAlign = "left";
  export let nodePadding = 0;
  export let extent = [
    [1, 1],
    [sankeyWidth - 1, sankeyHeight - 6],
  ];
  export let iterations = undefined;

  const color = scaleSequential(interpolateCool);

  let nodes, links;
  $: {
    if (index >= visible_index) {
      const sankey = d3sankey();

      if (size) sankey.size(size);
      if (nodeId) sankey.nodeId(nodeId);
      if (nodeAlign) {
        if (nodeAlign === "left") {
          sankey.nodeAlign(sankeyLeft);
        } else if (nodeAlign === "right") {
          sankey.nodeAlign(sankeyRight);
        } else if (nodeAlign === "center") {
          sankey.nodeAlign(sankeyCenter);
        } else if (nodeAlign === "justify") {
          sankey.nodeAlign(sankeyJustify);
        } else {
          sankey.nodeAlign(nodeAlign);
        }
      }
      if (nodePadding) sankey.nodePadding(nodePadding);
      if (extent) sankey.extent(extent);
      if (iterations) sankey.iterations(iterations);

      const data = sankey(sankey_data);
      nodes = data.nodes;
      links = data.links;

      // Set color domain after sankey() has set depth
      color.domain(d3Extent(nodes, (d) => d.depth));
    }
  }

  const path = linkHorizontal()
    // @ts-ignore
    .source((d) => [d.source.x1, d.y0])
    // @ts-ignore
    .target((d) => [d.target.x0, d.y1]);

  let highlightLinkIndexes = [];
</script>

<div class="sankey2">
  <svg
    width={sankeyWidth + margin.left + margin.right}
    height={sankeyHeight + margin.top + margin.bottom}
  >
    <g>
      {#if index >= visible_index}
        <g>
          {#each links as link, i (`link-${i}`)}
            <path
              key={`link-${i}`}
              d={path(link) || undefined}
              stroke={highlightLinkIndexes.includes(i) ? "red" : "black"}
              stroke-width={Math.max(1, link.width)}
              opacity={highlightLinkIndexes.includes(i) ? 0.5 : 0.1}
              fill="none"
              on:mouseover={(e) => {
                highlightLinkIndexes = [i];
              }}
              on:mouseout={(e) => {
                highlightLinkIndexes = [i];
              }}
            />
          {/each}
        </g>

        {#each nodes as node, i (`node-${i}`)}
          <SankeyGroup top={node.y0} left={node.x0}>
            <rect
              id={`rect-${i}`}
              width={node.x1 - node.x0}
              height={node.y1 - node.y0}
              fill={color(node.depth)}
              opacity={0.5}
              stroke="white"
              stroke-width={2}
              on:mouseover={(e) => {
                highlightLinkIndexes = [
                  ...node.sourceLinks.map((l) => l.index),
                  ...node.targetLinks.map((l) => l.index),
                ];
              }}
              on:mouseout={(e) => {
                highlightLinkIndexes = [];
              }}
            />

            <text
              x={30}
              y={(node.y1 - node.y0) / 2}
              dy={5}
              style="font: 10px sans-serif"
              _verticalAnchor="middle"
            >
              {node.name}
            </text>
          </SankeyGroup>
        {/each}
      {/if}
    </g>
  </svg>
  <div class="SankeyText">
    <p>
      The above sankey chart represents the occupations for migrants before and
      after their migration to the US. There are 8 different categories of
      occupations. Before migration, across all the categories, Agriculture
      production or labor has the most people with 392. Informal work and
      Student catgeory also have over 300 people.
    </p>
    <p>
      After migration, the Informal work catgeory has over 450 people and there
      are changes in occupations for some of the migrants. By hovering over the
      origin country occupation nodes, we get perspective regarding changes for
      people for a particular occupation when they move to the US. Hovering over
      the US occupation nodes, we can see how people from different occupations
      in the origin countries take up jobs in a new occupation category.
    </p>
  </div>
</div>

<style>
  .sankey2 {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .SankeyText {
    width: 90%;
    position: relative;
    margin: auto;
    text-align: left;
    font-size: 16px;
    font-family: sans-serif;
  }
</style>
