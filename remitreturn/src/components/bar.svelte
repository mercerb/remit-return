<script>
  import { migration_motivations } from "../../../class-data/migration_motivations.js";
  import { draw } from "svelte/transition";
  import { cubicOut, cubicInOut } from "svelte/easing";
  export let countrySelection = 1;
  export let themeColors;

  function update() {
    countrySelection = 1;
  }
  function chooseGuatemala() {
    countrySelection = 2;
  }
  function chooseHonduras() {
    countrySelection = 3;
  }
  function chooseElSalvador() {
    countrySelection = 4;
  }
</script>

<div class="motivation-bar-chart" id="motivation-bar-chart">
  <text x="10" y="10" class="motivation-bar-chart-text">
    Motivations for Migration
  </text>

  <body>
    <button on:click={update}>Total</button>
    <button on:click={chooseGuatemala}>Guatemala</button>
    <button on:click={chooseHonduras}>Honduras</button>
    <button on:click={chooseElSalvador}>El Salvador</button>
  </body>
  <main />

  <svg class="motivation-bar-chart-svg" id="motivation-bar-chart-svg">
    {#if countrySelection == 1}
      {#each migration_motivations as motivation, i}
        <g transform={`translate(300 ${i * 20 + 10})`}>
          <rect
            width={motivation.total / 6}
            height="15"
            fill={themeColors.blue}
          />
          <text
            class="motivation-bar-chart-label"
            text-anchor="end"
            x="-5"
            y="5">{motivation.group}</text
          >
          <text class="motivation-bar-chart-label" x="+330" y="5"
            >{motivation.total + " people"}</text
          >
        </g>
      {/each}
    {/if}

    {#if countrySelection == 2}
      {#each migration_motivations as motivation, i}
        <g transform={`translate(300 ${i * 20 + 10})`}>
          <rect
            width={motivation.var1 / 6}
            height="15"
            fill={themeColors.orange}
          />
          <text
            text-anchor="end"
            class="motivation-bar-chart-label"
            x="-5"
            y="5">{motivation.group}</text
          >
          <text class="motivation-bar-chart-label" x="+330" y="5"
            >{motivation.var1 + " people"}</text
          >
        </g>
      {/each}
    {/if}

    {#if countrySelection == 3}
      {#each migration_motivations as motivation, i}
        <g transform={`translate(300 ${i * 20 + 10})`}>
          <rect
            width={motivation.var2 / 6}
            height="15"
            fill={themeColors.pink}
          />
          <text
            class="motivation-bar-chart-label"
            text-anchor="end"
            x="-5"
            y="5">{motivation.group}</text
          >
          <text class="motivation-bar-chart-label" x="+330" y="5"
            >{motivation.var2 + " people"}</text
          >
        </g>
      {/each}
    {/if}

    {#if countrySelection == 4}
      {#each migration_motivations as motivation, i}
        <g transform={`translate(300 ${i * 20 + 10})`}>
          <rect
            width={motivation.var3 / 6}
            height="15"
            fill={themeColors.green}
          />
          <text
            class="motivation-bar-chart-label"
            text-anchor="end"
            x="-5"
            y="5">{motivation.group}</text
          >
          <text class="motivation-bar-chart-label" x="+330" y="5"
            >{motivation.var3 + " people"}</text
          >
        </g>
      {/each}
    {/if}
  </svg>
</div>

<style>
  .motivation-bar-chart {
    border: 1px #ddd;
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .motivation-bar-chart-svg {
    border: 1px #ddd;
    width: 100%;
    height: 80%;
    position: relative;
    margin: auto;
  }

  .motivation-bar-chart-text {
    text-align: left;
    font-size: 20px;
    font-family: sans-serif;
  }

  .motivation-bar-chart-label {
    /* text-align: left; */
    font-size: 12px;
    font-family: sans-serif;
    text-anchor: "";
  }
</style>
