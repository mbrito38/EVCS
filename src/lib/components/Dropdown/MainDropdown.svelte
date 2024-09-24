<div
    on:mouseover={() => (item_show = true)}
    on:mouseleave={() => (item_show = false)}
    on:focus={() => (item_show = true)}
    on:focusout={() => (item_show = false)}
    class="relative {classes}"
>
    <div class="pt-2.5 pb-2.5 px-7 flex justify-between gap-x-5 invisible text-lg font-semibold {dropdownclass}">
        <div class="{item_show ? 'px-8' : ''}" >
            {item_current ? item_current : header}
        </div>
        <img src="/img/down-short-arrow.svg" alt="Category Menu" />
    </div>
    <div class="dropdown border-2 border-[#1D3307] text-primaryfontcolor text-lg absolute top-0 cursor-pointer {dropdownclass}" >
        <div class="flex flex-col items-center" >
            <div class="pt-2.5 pb-2.5 px-7 flex justify-between gap-x-5">
                <div class="{item_show ? 'px-8' : ''} whitespace-nowrap" >
                    {item_current ? item_current : header}
                </div>
                <img src="/img/down-short-arrow.svg" alt="Profile Menu" />
            </div>
            {#if item_show}
                <div class="dropdown_menu w-full">
                    {#each Items as item}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div on:click={() => selectItem(item)}>
                            {item.title}
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
</div>

<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let header : string = 'Category';
    let classes : string = '';
    export {classes as class};
    export let dropdownclass : string = '';

    let item_show: boolean = false;
    let item_current: string = "";

    const dispatch = createEventDispatcher();

    let Items = [
        { id: header, title: header },
        { id: "accessories-parts", title: "Accessories / Parts" },
        { id: "after-market-warranties", title: "After Market Warranties" },
        { id: "body-shop-repaires", title: "Body Shops & Repaires" },
    ];

    const selectItem = (item: any): void => {
        dispatch("select", {
            item: item.id
        });
        item_show = false;
        item_current = item.title;
    };
</script>

<style lang="postcss" scoped>
    .dropdown {
        @apply rounded-[27px] font-semibold;
    }
    .dropdown_menu {
        @apply relative flex flex-col rounded-[27px] z-10 bg-white w-full gap-y-3 px-8 py-4;
    }
</style>