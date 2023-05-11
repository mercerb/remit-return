<script>
    import IconWoman from "../icons/woman.svelte";
    import IconMan from "../icons/man.svelte";

    import TextTooltip from "./TextTooltip.svelte";
    import ten_migrants from "../../../class-data/migrants_to_US_sample.json";

    let highlight_migrant = ten_migrants[0];
    export let themeColors;

    function getTooltipTitle(migrant) {
        let countries = {
            GT: "Guatemala",
            SLV: "El Salvador",
            HND: "Honduras",
        };
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
        Consider this {highlight_migrant.mig_ext_age}-year-old man from
        Guatemala. He spent $303 USD to migrate and is currently living in the
        US. He has a salaried job in the US - assume he makes $X/month. He also
        sends home $168 USD as remittances every month. With these numbers, he
        will break even in a month, earning beyond the initial cost of
        migration. Every month forward, he will contribute ($X-$168=) $Y USD to
        the United States economy.
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
</style>
