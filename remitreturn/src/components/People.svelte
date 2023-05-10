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

<div>
    If the population of migrants were 10 people, what would they look like? Who
    would we meet?
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
</style>
