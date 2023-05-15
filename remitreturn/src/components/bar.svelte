<script>
  import { migration_motivations } from "../../../class-data/migration_motivations.js";

  export let countrySelection = "all";
  export let themeColors;

  const barHeight = 25;
  const labelPositionY = 12;
  const labelPositionXLeft = -10;
  const labelPositionXRight = 350;

  function chooseTotal() {
    countrySelection = "all";
  }
  function chooseGuatemala() {
    countrySelection = "GTM";
  }
  function chooseHonduras() {
    countrySelection = "HND";
  }
  function chooseElSalvador() {
    countrySelection = "SLV";
  }
</script>

<div class="motivation-bar-chart" id="motivation-bar-chart">
  <div class="motivation-bar-chart-text">
    Motivations of External Migration Per Country
  </div>
  <div class="bar-chart-buttons">
    <button on:click={chooseTotal}>Total</button>
    <button on:click={chooseGuatemala}>Guatemala</button>
    <button on:click={chooseHonduras}>Honduras</button>
    <button on:click={chooseElSalvador}>El Salvador</button>
  </div>

  <svg class="motivation-bar-chart-svg" id="motivation-bar-chart-svg">
    {#if countrySelection == "all"}
      {#each migration_motivations as motivation, i}
        <g transform={`translate(300 ${i * 35 + 10})`}>
          <rect
            width={motivation.total / 6}
            height={barHeight}
            fill={themeColors.blue}
          />
          <text
            class="motivation-bar-chart-label"
            text-anchor="end"
            x={labelPositionXLeft}
            y={labelPositionY}
            >{motivation.group}
          </text>
          <text
            class="motivation-bar-chart-label"
            x={labelPositionXRight}
            y={labelPositionY}>{motivation.total + " people"}</text
          >
        </g>
      {/each}
    {/if}

    {#if countrySelection == "GTM"}
      {#each migration_motivations as motivation, i}
        <g transform={`translate(300 ${i * 35 + 10})`}>
          <rect
            width={motivation.GTM / 6}
            height={barHeight}
            fill={themeColors.orange}
          />
          <text
            text-anchor="end"
            class="motivation-bar-chart-label"
            x={labelPositionXLeft}
            y={labelPositionY}>{motivation.group}</text
          >
          <text
            class="motivation-bar-chart-label"
            x={labelPositionXRight}
            y={labelPositionY}>{motivation.GTM + " people"}</text
          >
        </g>
      {/each}
    {/if}

    {#if countrySelection == "HND"}
      {#each migration_motivations as motivation, i}
        <g transform={`translate(300 ${i * 35 + 10})`}>
          <rect
            width={motivation.HND / 6}
            height={barHeight}
            fill={themeColors.pink}
          />
          <text
            class="motivation-bar-chart-label"
            text-anchor="end"
            x={labelPositionXLeft}
            y={labelPositionY}>{motivation.group}</text
          >
          <text
            class="motivation-bar-chart-label"
            x={labelPositionXRight}
            y={labelPositionY}>{motivation.HND + " people"}</text
          >
        </g>
      {/each}
    {/if}

    {#if countrySelection == "SLV"}
      {#each migration_motivations as motivation, i}
        <g transform={`translate(300 ${i * 35 + 10})`}>
          <rect
            width={motivation.SLV / 6}
            height={barHeight}
            fill={themeColors.green}
          />
          <text
            class="motivation-bar-chart-label"
            text-anchor="end"
            x={labelPositionXLeft}
            y={labelPositionY}>{motivation.group}</text
          >
          <text
            class="motivation-bar-chart-label"
            x={labelPositionXRight}
            y={labelPositionY}>{motivation.SLV + " people"}</text
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
    height: 100vh;
    position: relative;
    padding-top: 10px;
    margin: auto;
  }

  .motivation-bar-chart-text {
    text-align: center;
    font-size: 20px;
    padding-top: 10px;
    font-family: sans-serif;
  }

  .bar-chart-buttons {
    position: relative;
    padding-top: 10px;
    font-family: sans-serif;
    font-size: 16px;
  }

  .motivation-bar-chart-label {
    font-size: 16px;
    font-family: sans-serif;
  }
</style>
