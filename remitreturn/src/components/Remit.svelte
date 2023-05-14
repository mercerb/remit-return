<script>
  import Scroller from "@sveltejs/svelte-scroller";

  import LineChart2 from "../components/LineChart2.svelte";
  import Map from "../components/Map.svelte";
  import Sankey from "../components/Sankey.svelte";
  import Sankey2 from "../components/Sankey2.svelte";
  import People from "../components/People.svelte";
  import PeopleDetail from "../components/PeopleDetail.svelte";
  import TextIntro from "../components/TextIntro.svelte";
  import TextMiddle from "../components/TextMiddle.svelte";
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
    <Map visible_index="8" {index} {progress} />

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
      <TextIntro />
    </section>
    <section>
      <!-- Section 2 (index == 1)-->
      Here we will have the economic bar graph
    </section>
    <section>
      <!-- Section 3 (index == 2)-->
      <Sankey2 visible_index="0" {index} />
      <!-- <Sankey {index} /> -->
    </section>
    <section>
      <!-- Section 4 (index == 5)-->
      <People {themeColors} />
    </section>
    <section>
      <!-- Section 5 (index == 4)-->
      <PeopleDetail {themeColors} />
    </section>
    <section>
      <!-- Section 6 (index == 5)-->
      <LineChart2 visible_index="6" {index} {width} {height} {themeColors} />
      <!-- <LineChart {index} {width} {height} {themeColors} /> -->
    </section>
    <section>
      <!-- Section 7 (index == 6)-->
      <TextMiddle />
    </section>
    <section>
      <!-- Section 8 (index == 7)-->
    </section>
    <section />
    <!-- Section 9 (index == 8): map (visible in the back) -->
    <!-- Section 10 (index == 9): map (visible in the back) -->
    <section />
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
    width: 70%;
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
    height: 70vh;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    text-align: center;
    max-width: 850px; /* adjust at will */
    color: black;
    padding: 0em;
    margin: 0 0 2em 0;
  }
</style>
