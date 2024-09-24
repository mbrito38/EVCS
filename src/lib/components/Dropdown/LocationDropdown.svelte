<div
    on:mouseover={() => (category_show = true)}
    on:mouseleave={() => (category_show = false)}
    on:focus={() => (category_show = true)}
    on:focusout={() => (category_show = false)}
    class="relative"
>
    <div class="pt-2.5 pb-2.5 px-7 flex justify-between gap-x-3 invisible text-lg font-semibold">
        <img src="/img/icons/BlackLocationPin.svg" alt="" class="h-5" />
        <div>
            {header}
        </div>
        <img src="/img/down-short-arrow.svg" alt="Category Menu" class="ml-2" />
    </div>
    <div class="dropdown absolute top-0 cursor-pointer" >
        <div class="flex flex-col items-center" >
            <div class="pt-2.5 pb-2.5 px-7 flex justify-between items-center gap-x-3">
                <img src="/img/icons/BlackLocationPin.svg" alt="" class="h-5" />
                <div>
                    {locations[0]}
                </div>
                <img src="/img/down-short-arrow.svg" alt="Category Menu" class="ml-2" />
            </div>
            {#if category_show}
                <div class="dropdown_menu w-full">
                    {#each locations.slice(1) as location}
                    <div>
                        {location}
                    </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
</div>

<script lang="ts">
    export let header : string = 'Category';

    let category_show = false;
    let locations = ['Australia','USA','Europe','UK'];
</script>

<style lang="postcss" scoped>
    .dropdown {
        @apply border-2 border-[#1D3307] rounded-[27px] text-lg font-semibold text-primaryfontcolor;
    }
    .dropdown_menu {
        @apply relative flex flex-col rounded-[27px] z-10 bg-white w-full gap-y-3 px-8 py-4 min-w-[242px];
    }
</style>