<script>
  import * as d3 from "d3";
  import LineChart from "../components/LineChart.svelte";
  import LineChart2 from "../components/LineChart2.svelte";
  import Sankey from "../components/Sankey.svelte";
  import Sankey2 from "../components/Sankey2.svelte";

  import Map from "../components/Map.svelte";
  import Scroller from "@sveltejs/svelte-scroller";
  import IntroText from "../components/IntroText.svelte";
  import MiddleText from "../components/MiddleText.svelte";
  import SankeyText from "./SankeyText.svelte";

  let count, index, offset, progress;
  let width, height;

  export const themeColors = {
    blue: "#112b64",
    beige: "#e8e4d5",
    orange: "#e39d12",
    pink: "#be318f",
  };
</script>

<Scroller
  top={0.0}
  bottom={1}
  threshold={0.5}
  bind:count
  bind:index
  bind:offset
  bind:progress
>
  <div
    class="background"
    slot="background"
    bind:clientWidth={width}
    bind:clientHeight={height}
  >

  <Map visible_index=5 {index} {offset} /> 
      
    <div class="progress-bars">
      <p>current section: <strong>{index + 1}/{count}</strong></p>
      <progress value={count ? (index + 1) / count : 0} />

      <p>offset in current section</p>
      <progress value={offset || 0} />

      <p>total progress</p>
      <progress value={progress || 0} />

      <p>current index: {index}</p>
    </div>
  </div>

  <div class="foreground" slot="foreground">
    <section>
      <!-- Section 1 (index == 0)-->
      <IntroText />
    </section>
    <section>
      <!-- Section 2 (index == 1)-->
      <!-- <Sankey {index} /> -->
      <Sankey2 visible_index=1 {index} />
    </section>
    <section>
      <!-- Section 3 (index == 2)-->
      <SankeyText />
    </section>
    <section>
      <!-- Section 4 (index == 3)-->
      Cost of migration projected over time (months). index: {index}
      <LineChart2 visible_index=2 {index} {width} {height} {themeColors} />
      <!-- <LineChart {index} {width} {height} {themeColors} /> -->
    </section>
    <section>
      <!-- Section 5 (index == 4)-->
      <MiddleText />
    </section>
    <section>
      <!-- Section 6 (map) (index == 5) -->    
      <!-- <Map visible_index=5 {index} {offset} />    -->
    </section>
  </div>
</Scroller>

<style>
  .background {
    width: 100%;
    height: 100vh;
    position: relative;
    color: "#e8e4d5";
  }

  .foreground {
    width: 60%;
    margin: 0 auto;
    height: auto;
    position: relative;
  }

  .progress-bars {
    position: absolute;
    background: rgba(170, 51, 120, 0.2) /*  40% opaque */;
    visibility: hidden; /* visible */
  }

  section {
    height: 80vh;
    /* background-color: rgba(0, 0, 0, 0.2); 20% opaque */
    /* color: white; */
    text-align: center;
    max-width: 750px; /* adjust at will */
    color: black;
    padding: 1em;
    margin: 0 0 2em 0;
  }
</style>
