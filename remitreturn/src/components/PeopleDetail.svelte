<script>
    import IconWoman from "../icons/woman.svelte";
    import IconMan from "../icons/man.svelte";
    import TextTooltip from "./TextTooltip.svelte";
    import {
        LinkedChart,
        LinkedLabel,
        LinkedValue,
    } from "svelte-tiny-linked-charts";
    import migrantGroup from "../../../class-data/migrants_to_US_sample.json";

    export let themeColors;
    const countries = {
        GT: "Guatemala",
        SLV: "El Salvador",
        HND: "Honduras",
    };

    const highlightMigrant = migrantGroup[7];
    const salary = 800; // highlightMigrant.occupation_salary;
    const monthlyRemits = highlightMigrant.remesa_usd_sent_monthly;
    const originCountry = countries[highlightMigrant.country];
    const sex = highlightMigrant.mig_ext_sex;
    const age = highlightMigrant.mig_ext_age;
    const migCost = highlightMigrant.mig_cost_usd;
    const max = Math.max(salary, migCost);

    const numMonths = 12;
    const monthKeys = [...Array(numMonths).keys()].map((i) => `Month ${i + 1}`);

    let monthlySalaryData = {};
    let monthlyRemitData = {};
    let monthlyRemainingCostData = {};
    let monthlyMoneyToUSData = {};

    monthlySalaryData = Object.fromEntries(
        monthKeys.map((month) => [month, salary])
    );
    monthlyRemitData = Object.fromEntries(
        monthKeys.map((month) => [month, monthlyRemits])
    );

    let remaining = migCost;

    for (let month = 0; month < numMonths; month++) {
        let payment = Math.min(remaining, salary - monthlyRemits);
        remaining -= payment;
        monthlyRemainingCostData[`Month ${month + 1}`] = Math.max(0, remaining);
        monthlyMoneyToUSData[`Month ${month + 1}`] = Math.max(
            0,
            salary - monthlyRemits - payment
        );
    }

    function getTooltipTitle(migrant) {
        let destText = migrant.at_destination
            ? "Currently living in the US."
            : "Did not make it to the US.";
        return `${sex}, age ${age}, from ${originCountry}. Spent $${migCost} USD to migrate. ${destText}`;
    }

    function getIconColor(migrant) {
        return migrant.at_destination ? themeColors.blue : themeColors.orange;
    }
</script>

<div class="people-text">
    <p>
        Consider the {age}-year-old man from
        {originCountry}. He spent ${migCost} USD to migrate and is currently living
        in the US. He has a salaried job in the US; assume he makes ${salary}/month.
        He also sends home ${monthlyRemits} USD as remittances every month. With
        these numbers, he will break even in a month, earning beyond the initial
        cost of migration. Every month forward, he will contribute ${salary -
            monthlyRemits} USD (${salary}-${monthlyRemits}) to the United States
        economy.
    </p>
</div>

<div class="person">
    <TextTooltip title={getTooltipTitle(highlightMigrant)}>
        {#if highlightMigrant.mig_ext_sex === "Man"}
            <IconMan fill={getIconColor(highlightMigrant)} />
        {:else}
            <IconWoman fill={getIconColor(highlightMigrant)} />
        {/if}
    </TextTooltip>
</div>

<div class="linked-charts">
    <!--Credit: "https://github.com/Mitcheljager/svelte-tiny-linked-charts" -->
    {#if Object.values(monthlySalaryData).length > 0}
        <table class="preview-table">
            <tr>
                <th>Money Category</th>
                <th width="250"
                    ><LinkedLabel linked="table" empty="12 month period" /></th
                >
                <th>Value (USD)</th>
            </tr>

            <tr>
                <td class="label">Monthly Salary ($ coming in)</td>
                <td
                    ><LinkedChart
                        data={monthlySalaryData}
                        linked="table"
                        uid="table-1"
                        fill={themeColors.orange}
                        scaleMax={max}
                        grow={true}
                        barMinHeight="5"
                    /></td
                >
                <td
                    >$<LinkedValue
                        uid="table-1"
                        empty={Object.values(monthlySalaryData).reduce(
                            (a, b) => a + b
                        )}
                    /></td
                >
            </tr>

            <tr>
                <td class="label">Monthly Remittances Sent Home ($ leaving)</td>
                <td
                    ><LinkedChart
                        data={monthlyRemitData}
                        linked="table"
                        uid="table-2"
                        fill={themeColors.blue}
                        scaleMax={max}
                        grow={true}
                        barMinHeight="5"
                    /></td
                >
                <td
                    >$<LinkedValue
                        uid="table-2"
                        empty={Object.values(monthlyRemitData).reduce(
                            (a, b) => a + b
                        )}
                    /></td
                >
            </tr>

            <tr>
                <td class="label">Balance on Migration Cost ($ remaining)</td>
                <td
                    ><LinkedChart
                        data={monthlyRemainingCostData}
                        linked="table"
                        uid="table-3"
                        type="line"
                        fill={themeColors.pink}
                        scaleMax={max}
                        barMinHeight="5"
                        grow={true}
                    /></td
                >
                <td>$<LinkedValue uid="table-3" empty={migCost} /></td>
            </tr>

            <tr>
                <td class="label"
                    >Monthly Money Spent in US ($ cash leftover)</td
                >
                <td
                    ><LinkedChart
                        data={monthlyMoneyToUSData}
                        linked="table"
                        uid="table-4"
                        fill={themeColors.green}
                        scaleMax={max}
                        barMinHeight="5"
                        grow={true}
                    /></td
                >
                <td
                    >$<LinkedValue
                        uid="table-4"
                        empty={Object.values(monthlyMoneyToUSData).reduce(
                            (a, b) => a + b
                        )}
                    /></td
                >
            </tr>
        </table>
    {/if}
</div>

<style>
    .person {
        display: inline-block;
    }

    .people-text {
        text-align: left;
        font-size: 20px;
        font-family: sans-serif;
    }

    .linked-charts {
        display: block;
        font-family: sans-serif;
        text-align: left;
        padding-left: 40px;
    }
    td {
        padding: 10px;
    }
    tr {
        line-height: 20px;
    }
</style>
