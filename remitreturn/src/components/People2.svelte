<!-- App.svelte -->
<script>
    // import Icon from "./Icon.svelte";
    import IconWoman from "../icons/female.svg";
    import IconMan from "../icons/male.svg";

    const people = [
        {
            id: 1,
            name: "Alice",
            icon: "../icons/female.svg",
        },
        {
            id: 2,
            name: "Bob",
            icon: "../icons/male.svg",
        },
    ];

    let tooltipText = "";

    function handleMouseover(name) {
        tooltipText = name;
    }

    function handleMouseout() {
        tooltipText = "";
    }
</script>

{#each people as person}
    <div
        class="person"
        on:mouseover={() => handleMouseover(person.name)}
        on:mouseout={handleMouseout}
    >
        <IconWoman {person} />
    </div>
{/each}

<div class="tooltip">{tooltipText}</div>

<style>
    .person {
        display: inline-block;
        margin: 10px;
        position: relative;
    }

    .tooltip {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #333;
        color: #fff;
        padding: 5px;
        border-radius: 3px;
        font-size: 12px;
        opacity: 0.8;
        pointer-events: none;
        transition: opacity 0.2s;
    }

    .person:hover .tooltip {
        opacity: 1;
    }
</style>
