<script>
    export let title = "";
    let isHovered = false;
    let x;
    let y;

    const pixelOffset = 0;

    function mouseOver(event) {
        isHovered = true;
        x = event.pageX + { pixelOffset };
        y = event.pageY + { pixelOffset };
    }
    function mouseMove(event) {
        x = event.pageX + { pixelOffset };
        y = event.pageY + { pixelOffset };
    }
    function mouseLeave() {
        isHovered = false;
    }
</script>

<div
    on:mouseover={mouseOver}
    on:mouseleave={mouseLeave}
    on:mousemove={mouseMove}
>
    <slot />
</div>

{#if isHovered}
    <div style="top: {y}px; left: {x}px;" class="text-tooltip">{title}</div>
{/if}

<style>
    .text-tooltip {
        border: 1px solid #ddd;
        box-shadow: 1px 1px 1px #ddd;
        background: white;
        border-radius: 4px;
        padding: 4px;
        position: absolute;
        font-family: sans-serif;
        z-index: 5;
    }
</style>
