
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
  import { append } from "svelte/internal";

  export let width = 500;
  export let height = 500;
  export let margin = {
    top: 0,
    left: 0,
    right: 200,
    bottom: 0,
  };

  export let index, visible_index;

  export let size = undefined;
  export let nodeId = undefined;
  export let nodeAlign = "left";
  export let nodeWidth = undefined;
  export let nodePadding = 0;
  export let nodeSort = undefined;
  export let extent = [
    [1, 1],
    [width - 1, height - 6],
  ];
  export let iterations = undefined;

  const color = scaleSequential(interpolateCool);

  let nodes, links;
  let hoveredLinkText = '';
  $: {
    if (index == visible_index) {
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
      if (nodeWidth) sankey.nodeWidth(nodeWidth);
      if (nodePadding) sankey.nodePadding(nodePadding);
      if (nodeSort) sankey.nodeSort(nodeSort);
      if (extent) sankey.extent(extent);
      if (iterations) sankey.iterations(iterations);

      const data = sankey(sankey_data);
      nodes = data.nodes;
      links = data.links;

      // Set color domain after sankey() has set depth
      color.domain(d3Extent(nodes, (d) => d.depth));
      //color.domain(d3Extent(nodes,(d)=>d.name))
      
      
    }
  }

  const path = linkHorizontal()
    // @ts-ignore
    .source((d) => [d.source.x1, d.y0])
    // @ts-ignore
    .target((d) => [d.target.x0, d.y1]);

  let highlightLinkIndexes = [];
</script>

<svg
  width={width + margin.left + margin.right}
  height={height + margin.top + margin.bottom}
>
  <g>
    {#if index == visible_index}
      <g>
        {#each links as link, i (`link-${i}`)}
          <path
            key={`link-${i}`}
            d={path(link) || undefined}
            stroke={highlightLinkIndexes.includes(i) ? "burlywood" : "black"}
            stroke-width={Math.max(1, link.width)}
            opacity={highlightLinkIndexes.includes(i) ? 0.5 : 0.02}
            
            fill="none"
            
            on:mouseover={(e) => {
              highlightLinkIndexes = [i]
              hoveredLinkText={...d.source.name+' -> '+d.target.name}
          
       
              
        
           
          
            }}


            on:mouseout={(e) => {
              highlightLinkIndexes = [i]
              hoveredLinkText=''
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
              ]

              hoveredLinkText={...node.sourceLinks.map((l)=>l.index)}

             

              
             
              
              
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
            {node.name+ " ("+node.value+" people)"}
            
          </text>
        </SankeyGroup>
      {/each}
    {/if}
  </g>
</svg>
