<!-- App.svelte -->
<script>
    import IconWoman from "../icons/woman.svelte";
    import IconMan from "../icons/man.svelte";

    import TextTooltip from "./TextTooltip.svelte";
    import ten_migrants from "../../../class-data/migrants_to_US_sample.json";

    function getTooltipTitle(migrant) {
        let text = `${migrant.mig_ext_sex}, age: ${migrant.mig_ext_age}`;
        return text;
    }
</script>

<div class="people-text">
    If the population of migrants were 10 people, what would they look like? Who
    would we meet?

    To better understand the tradeoff between the cost
    of migration, remittances, and money entering the USA, we have
    identified 10 migrants who represent a statistically similar sample of
    this larger group.
</div>

{#each ten_migrants as migrant}
    <div class="person">
        <TextTooltip title={getTooltipTitle(migrant)}>
            {#if migrant.mig_ext_sex === "Man"}
                <IconMan />
            {:else}
                <IconWoman />
            {/if}
        </TextTooltip>
    </div>
{/each}

<style>
    .person {
        display: inline-block;
    }

    .people-text {
        position: left;
        font-size: 20px;
        font-family: sans-serif;
    }
</style>
