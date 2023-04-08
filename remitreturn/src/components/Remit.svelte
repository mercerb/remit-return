<script>
    import * as d3 from "d3";
    import MultiChart from "../components/MultiChart.svelte";
    import GroupChart from "../components/GroupChart.svelte";
    import SLV_data from "../data/el_salvador_remittances.json";
    import HND_data from "../data/honduras_remittances.json";
    import GTM_data from "../data/guatemala_remittances.json";
    import all_countries from "../data/all_remittances.json";
</script>

<main>
    <h1>Remittances To Northern Triangle Over Time</h1>
    <h3>Total Remittances to El Salvador</h3>
    <section class="graph">
        <MultiChart
            data={SLV_data}
            xVar="Year"
            yVars={["RemittancesReceivedPerMigrant", "RemittancesReceived"]}
        />

        <h3>Total Remittances to Honduras</h3>
        <!-- <section class="graph"> -->
        <MultiChart
            data={HND_data}
            xVar="Year"
            yVars={["RemittancesReceivedPerMigrant", "RemittancesReceived"]}
        />
    </section>

    <h2>Total Remittances to All Countries</h2>
    <section class="graph">
        <GroupChart
            data={all_countries}
            xVar="Year"
            yVars={["RemittancesReceived"]}
            groupVar="Country"
        />
    </section>
    <!-- <h2>Remittances by Number of External Migrants</h2>
    <section class="graph">
        <MultiChart
            data={all_countries}
            xVar="Year"
            yVars={["RemittancesReceivedPerMigrant", "Country"]}
        />
    </section> -->
</main>

<style>
    main {
        text-align: center;
        font-family: "Nunito", sans-serif;
        font-weight: 300;
        line-height: 2;
        font-size: 24px;
        color: var(--color-text);
        margin-top: 100px;
    }

    .graph {
        display: inline-flexbox;
        margin-left: 50px;
    }
</style>
