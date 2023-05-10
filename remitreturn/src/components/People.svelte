<script>
    import { onMount } from "svelte";

    let people, tooltip, woman_icon, man_icon;

    // <a href="https://iconscout.com/icons/female" target="_blank">Free Female Icon</a> by <a href="https://iconscout.com/contributors/scott-de-jonge">Scott De jonge</a> on <a href="https://iconscout.com">IconScout</a>
    // <a href="https://iconscout.com/icons/man" target="_blank">Free Man Icon</a> by <a href="https://iconscout.com/contributors/google-inc" target="_blank">Google Inc.</a>
    onMount(() => {
        man_icon = `../icons/man.svg`; // relative path to the SVG icon file
        woman_icon = `../icons/female.svg`; // relative path to the SVG icon file

        people = [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
        ];

        tooltip = {
            x: 0,
            y: 0,
            visible: false,
            text: "",
        };
    });
    function handleHover(person, event) {
        tooltip.text = person.name;
        tooltip.x = event.clientX;
        tooltip.y = event.clientY;
        tooltip.visible = true;
    }

    function handleMouseOut() {
        tooltip.visible = false;
    }
</script>

<div class="icon-man">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d={man_icon} />
    </svg>
</div>

<div class="icon-woman">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d={woman_icon} />
    </svg>
</div>

<div>
    {#each people as person}
        <!-- {#if people.name == "Alice"} -->
        <div
            class="icon-man"
            on:mouseover={(event) => handleHover(person, event)}
            on:mouseout={() => handleMouseOut()}
        />
    {/each}

    {#if tooltip.visible}
        <div
            class="tooltip"
            style="left: {tooltip.x + 1}px; top: {tooltip.y - 20}px;"
        >
            {tooltip.text}
        </div>
    {/if}
</div>

<style>
    .icon {
        width: 50px;
        height: 50px;
        background-color: #ccc;
        display: inline-block;
        margin-right: 10px;
    }

    .tooltip {
        position: absolute;
        background-color: #fff;
        border: 1px solid #000;
        padding: 5px;
        font-size: 14px;
    }
</style>
