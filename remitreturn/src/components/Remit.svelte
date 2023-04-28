<script>
    import * as d3 from "d3";
    import LineChart2 from "../components/LineChart2.svelte";
    // import LineChart from "../components/LineChart.svelte";
    import Scroller from "@sveltejs/svelte-scroller";
    import IntroText from "../components/IntroText.svelte";

    let count, index, offset, progress;
    let width, height;

    export const themeColors = {
        blue: "#112b64",
        beige: "#e8e4d5",
        orange: "#e39d12",
        pink: "#be318f"
    }

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
        <!-- Section 1 -->
        <IntroText />
    </section>
    <section>
        <!-- Section 2 -->
        Cost of migration projected over time (months).
        <!-- <LineChart {index} {width} {height} {themeColors}/>  -->
        <LineChart2 {index} {width} {height} {themeColors}/> 
    </section>
    <section>This is the third section.</section>
    <section>This is the 4th section.</section>
    <section>This is the 5th section.</section>
    <section>This is the 6th section.</section>
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
      width: 50%;
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
