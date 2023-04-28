<script>
    import * as d3 from "d3";
    import LineChart2 from "../components/LineChart2.svelte";
    import LineChart from "../components/LineChart.svelte";
    import Scroller from "@sveltejs/svelte-scroller";

    let count, index, offset, progress;
    let width, height;

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
    <!-- <LineChart2 {index} {width} {height} /> -->

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

        The data displayed here is a subset of the class data. This subset includes
        454 individuals who reported a cost of migration and whose destination was the United States. 
        Of these, 349 currently reside in the USA and send remittances back to their families (as of the time of the survey, April 2021).
        105 paid the cost of migration but either did not make it to the USA or were sent back.

        To better understand the tradeoff between the cost of migration, remittances, and money entering the USA,
        we have identified 10 migrants who represent a statistically similar sample of this larger group.
    </section>
    <section>
        <!-- Section 2 -->
        <LineChart /> 
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
