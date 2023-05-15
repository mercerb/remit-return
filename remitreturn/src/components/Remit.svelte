<script>
  import Bar from "./Bar.svelte";
  import LineChart from "../components/LineChart.svelte";
  import Map from "../components/Map.svelte";
  import People from "../components/People.svelte";
  import PeopleDetail from "../components/PeopleDetail.svelte";
  import Sankey from "../components/Sankey.svelte";
  import SankeyText from "../components/SankeyText.svelte";
  import TextIntro from "../components/TextIntro.svelte";
  import TextMiddle from "../components/TextMiddle.svelte";

  let width, height;

  export const themeColors = {
    blue: "#112b64",
    beige: "#e8e4d5",
    orange: "#e39d12",
    pink: "#be318f",
    green: "forestgreen", // expand the palette
  };
</script>

<body>
  <div class="progress-container fixed-top">
    <span class="progress-bar" />
  </div>
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
      6.C85, the "Interactive Data Visualization and Society" class, in the
      spring of 2023. Acknowledgments, data sources, and additional details are
      available here:
      <b><a href="/sources">Learn more about the data</a></b>
    </p>
  </div>
  <Bar {themeColors} />
  <TextIntro />
  <Sankey />
  <SankeyText />
  <People {themeColors} />
  <PeopleDetail {themeColors} />
  <LineChart {themeColors} {width} {height} />
  <TextMiddle />
  <Map />
</body>

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

  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 5;
  }

  .progress-container {
    width: 100%;
    background-color: transparent;
    height: 5px;
    display: block;
  }
  .progress-bar {
    background-color: red;
    width: 0%;
    display: block;
    height: inherit;
  }
</style>
