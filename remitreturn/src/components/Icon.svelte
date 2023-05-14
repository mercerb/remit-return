<!-- Icon.svelte -->
<script>
    export let person;
</script>

<div class="icon">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d={person.icon} />
    </svg>
</div>

<style>
    .icon {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        display: inline-block;
    }

    svg {
        width: 100%;
        height: 100%;
        fill: #000;
    }
</style>
