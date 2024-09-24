<div class="h-full w-full px-20 py-8 text-primaryfontcolor">
    <h4 class="mb-6 text-center">
        Select Make
    </h4>

    {#if !show_models}
        <div class="flex flex-col">
            {#each $brands as brand}
                <div
                    class="selection font-bold capitalize"
                    on:click={() => show_models = true}
                    on:keypress={() => show_models = true}
                >
                    {brand.name}
                    <img src="img/Arrow.png" class="h-4" alt="" />
                </div>
            {/each}
        </div>
    {:else}
        <div class="flex flex-col">
            {#each $brands as brand}
                <div class="selection font-bold capitalize">
                    {brand.name}
                    <img src="img/Arrow.png" class="h-4" alt="" />
                </div>
            {/each}
        </div>
    {/if}
</div>

<script lang="ts">
    import { brands } from "$lib/stores/brands";

    let show_models = false;
</script>

<style lang="postcss" scoped>
    .selection {
        @apply text-base cursor-pointer pl-4 pr-2 flex items-center justify-between py-2 border-solid border-b-1 border-b-[#707070];
        &:first-child {
            border-top: solid 1px #707070;
        }
    }
</style>