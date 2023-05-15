<script>
  import Scroller from "@sveltejs/svelte-scroller";

  import Bar from "../components/Bar.svelte";
  import LineChart from "../components/LineChart.svelte";
  import Map from "../components/Map.svelte";
  import People from "../components/People.svelte";
  import PeopleDetail from "../components/PeopleDetail.svelte";
  import Sankey from "../components/Sankey.svelte";
  import SankeyText from "../components/SankeyText.svelte";
  import TextIntro from "../components/TextIntro.svelte";
  import TextMiddle from "../components/TextMiddle.svelte";

  let count, index, offset, progress;
  let width, height;

  export const themeColors = {
    blue: "#112b64",
    beige: "#e8e4d5",
    orange: "#e39d12",
    pink: "#be318f",
    green: "forestgreen", // expand the palette
  };
</script>

<div class="TextIntroHeading">
  <h2>RemitReturn</h2>
  <p>
    <i>
      Understanding the economic growth associated with migration and economic
      opportunities to send remittances home while contributing to the
      destination country's economy
    </i>
  </p>

  <p id="authors">
    This site was made by Mercer Borris, Ahsan Imran, and Shelby Unger for
    6.C85, the "Interactive Data Visualization and Society" class, in the spring
    of 2023. Acknowledgments, data sources, and additional details are available
    here:
    <b><a href="/sources">Learn more about the data</a></b>
  </p>
</div>

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
  </div>

  <div class="foreground" slot="foreground">
    <section>
      <!-- Section 1 (index == 0)-->
      <Bar {themeColors} />
    </section>
    <section>
      <!-- Section 2 (index == 1)-->
      <TextIntro />
    </section>
    <section>
      <!-- Section 3 (index == 2)-->
      <Sankey visible_index="0" {index} />
    </section>
    <section>
      <!-- Section 4 (index == 3)-->
      <SankeyText />
    </section>
    <section>
      <!-- Section 5 (index == 4)-->
      <People {themeColors} />
    </section>
    <section>
      <!-- Section 6 (index == 5)-->
      <PeopleDetail {themeColors} />
    </section>
    <section>
      <!-- Section 7 (index == 6)-->
      <LineChart visible_index="5" {index} {themeColors} {width} {height} />
    </section>
    <section>
      <!-- Section 8 (index == 7)-->
      <TextMiddle />
    </section>
    <section>
      <!-- Section 9 (index == 8)-->
    </section>
    <section />
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

  section {
    height: 80vh;
    /* background-color: rgba(0, 0, 0, 0.2); */
    color: white;
    text-align: center;
    max-width: 800px;
    color: black;
    padding: 0em;
    margin: 0 0 2em 0;
  }

  .TextIntroHeading {
    text-align: center;
    max-width: 800px;
    margin: auto;
    font-size: 18px;
    padding-right: 30px;
    font-family: sans-serif;
    color: #112b64;
  }

  #authors {
    text-align: left;
    font-size: 16px;
    color: black;
  }
</style>
