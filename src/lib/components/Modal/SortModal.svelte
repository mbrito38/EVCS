<div class="h-full w-full px-20 py-8" >
    <h4 class="mb-5 text-center pb-3 border-solid border-b-1 border-b-dove-gray">Sort by</h4>
    <div class="flex flex-col items-center gap-y-4" >
        {#each button_data as button,i}
        <button class="{selected === i ? 'selected' : ''}" on:click={() => selected = i} on:keypress={() => selected = i} >{button.name}</button>
        {/each}
    </div>
</div>

<script lang="ts">

    let selected : number = 0;

    let button_data = [
        {name : 'Recommended'},
        {name : 'Price (Highest)'},
        {name : 'Price (Lowest)'},
        {name : 'Range (Highest)'},
        {name : 'Range (Lowest)'},
        {name : 'Nearest'},
        {name : 'Furthest'},
    ]
</script>

<style lang="postcss" >
    button {
        @apply px-5 py-2 border-solid border-1 border-primaryfontcolor rounded-3xl;
        &.selected {
            @apply border-vibrant_green bg-vibrant_green text-white;
        }
    }
</style>