<script>
    import IconWoman from "../icons/woman.svelte";
    import IconMan from "../icons/man.svelte";
    import TextTooltip from "./TextTooltip.svelte";
    import migrantGroup from "../../class-data/migrants_to_US_sample.json";

    export let themeColors;
    const countries = {
        GT: "Guatemala",
        SLV: "El Salvador",
        HND: "Honduras",
    };

    function getTooltipTitle(migrant) {
        let dest_text = migrant.at_destination
            ? "Currently living in the US."
            : "Did not make it to the US.";
        return `${migrant.mig_ext_sex}, age ${migrant.mig_ext_age}, from ${
            countries[migrant.country]
        }. Spent $${migrant.mig_cost_usd} USD to migrate. ${dest_text}`;
    }

    function getIconColor(migrant) {
        return migrant.at_destination ? themeColors.blue : themeColors.orange;
    }
</script>

<div class="people-text">
    <p>
        In reviewing this data, we wanted to connect more deeply with the people
        behind the numbers. We are highlighting here 10 USA-bound migrants who
        form a representative sample of the larger group.
    </p>
    <p>
        Put another way, if this group of migrants were 10 people, who would
        they be? What would they be like? How can they help us better understand
        the tradeoff between the cost of migration, remittances, and money
        entering the USA on a more accessible scale? <b>
            Move your mouse over each individual to learn more.
        </b>
    </p>
</div>

<div class="people-tooltip">
    {#each migrantGroup as migrant}
        <div class="person">
            <TextTooltip title={getTooltipTitle(migrant)}>
                {#if migrant.mig_ext_sex === "Man"}
                    <IconMan fill={getIconColor(migrant)} />
                {:else}
                    <IconWoman fill={getIconColor(migrant)} />
                {/if}
            </TextTooltip>
        </div>
    {/each}
</div>

<style>
    .person {
        display: inline-block;
    }

    .people-tooltip {
        width: 80%;
        margin: auto;
    }

    .people-text {
        width: 90%;
        padding-top: 2%;
        margin: auto;
        position: relative;
        text-align: left;
        font-size: 18px;
        font-family: sans-serif;
    }
</style>
