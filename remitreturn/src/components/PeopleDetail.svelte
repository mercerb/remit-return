<script>
    import IconWoman from "../icons/woman.svelte";
    import IconMan from "../icons/man.svelte";
    import TextTooltip from "./TextTooltip.svelte";
    import {
        LinkedChart,
        LinkedLabel,
        LinkedValue,
    } from "svelte-tiny-linked-charts";
    import ten_migrants from "../../../class-data/migrants_to_US_sample.json";

    export let themeColors;
    const countries = {
        GT: "Guatemala",
        SLV: "El Salvador",
        HND: "Honduras",
    };

    let data = {
        "2005-01-01": 25,
        "2005-01-02": 20,
        "2005-01-03": 18,
        "2005-01-04": 17,
        "2005-01-05": 21,
    };

    const highlight_migrant = ten_migrants[7];
    const salary = 500; // highlight_migrant.occupation_salary;
    const monthly_remittances = highlight_migrant.remesa_usd_sent_monthly;
    const origin_country = countries[highlight_migrant.country];
    const sex = highlight_migrant.mig_ext_sex;
    const age = highlight_migrant.mig_ext_age;
    const mig_cost = highlight_migrant.mig_cost_usd;
    const max = Math.max(salary, mig_cost);

    const numMonths = 12;
    const monthKeys = [...Array(numMonths).keys()].map((i) => `Month ${i + 1}`);

    let monthly_salary_data = {};
    let monthly_remit_data = {};
    let monthly_remaining_cost_data = {};
    let monthly_money_to_us_data = {};

    monthly_salary_data = Object.fromEntries(
        monthKeys.map((month) => [month, salary])
    );
    monthly_remit_data = Object.fromEntries(
        monthKeys.map((month) => [month, monthly_remittances])
    );

    let remaining = mig_cost;

    for (let month = 0; month < numMonths; month++) {
        let payment = Math.min(remaining, salary);
        remaining -= payment;
        monthly_remaining_cost_data[`Month ${month + 1}`] = Math.max(
            0,
            remaining
        );
        monthly_money_to_us_data[`Month ${month + 1}`] = Math.max(
            0,
            salary - payment
        );
    }

    function getTooltipTitle(migrant) {
        let dest_text = migrant.at_destination
            ? "Currently living in the US."
            : "Did not make it to the US.";
        return `${sex}, age ${age}, from ${origin_country}. Spent $${mig_cost} USD to migrate. ${dest_text}`;
    }

    function getIconColor(migrant) {
        return migrant.at_destination ? themeColors.blue : themeColors.orange;
    }
</script>

<div class="people-text">
    <p>
        Consider the {age}-year-old man from
        {origin_country}. He spent ${mig_cost} USD to migrate and is currently living
        in the US. He has a salaried job in the US; assume he makes ${salary}/month.
        He also sends home ${monthly_remittances} USD as remittances every month.
        With these numbers, he will break even in a month, earning beyond the initial
        cost of migration. Every month forward, he will contribute (${salary}-${monthly_remittances}=)
        ${salary - monthly_remittances} USD to the United States economy.
    </p>
</div>

<div class="person">
    <TextTooltip title={getTooltipTitle(highlight_migrant)}>
        {#if highlight_migrant.mig_ext_sex === "Man"}
            <IconMan fill={getIconColor(highlight_migrant)} />
        {:else}
            <IconWoman fill={getIconColor(highlight_migrant)} />
        {/if}
    </TextTooltip>

    <!-- let monthly_salary_data = {};
    let monthly_remit_data = {};
    let monthly_remaining_cost_data = {};
    let monthly_money_to_us_data = {}; -->
</div>
<div class="linked-charts">
    {#if Object.values(monthly_salary_data).length > 0}
        <LinkedLabel linked="link-1" />

        <LinkedChart
            data={monthly_salary_data}
            linked="link-1"
            scaleMax={max}
            showValue={true}
            valuePrepend="Income: $"
            barMinHeight="5"
            barMinWidth="14"
            width="200"
            fill={themeColors.orange}
        />
        <LinkedChart
            data={monthly_remit_data}
            linked="link-1"
            scaleMax={max}
            showValue={true}
            valueDefault="Mouse over to see monthly remittances sent home"
            valuePrepend="Remittances Sent: $"
            barMinHeight="5"
            barMinWidth="14"
            width="200"
            fill={themeColors.blue}
        />
        <LinkedChart
            data={monthly_remaining_cost_data}
            linked="link-1"
            scaleMax={max}
            showValue={true}
            valueDefault="Mouse over to see remaining balance on migration cost"
            valuePrepend="Cost remaining: $"
            lineColor={themeColors.pink}
            width="200"
            barMinWidth="14"
            type="line"
        />
        <LinkedChart
            data={monthly_money_to_us_data}
            linked="link-1"
            scaleMax={max}
            showValue={true}
            valueDefault="Mouse over to see monthly money spend in USA"
            valuePrepend="Remaining cash to spend: $"
            barMinHeight="5"
            barMinWidth="14"
            width="200"
            fill="lightgreen"
        />
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
    }
</style>
