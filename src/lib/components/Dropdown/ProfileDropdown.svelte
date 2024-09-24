<div
    on:mouseover={() => (item_show = true)}
    on:mouseleave={() => (item_show = false)}
    on:focus={() => (item_show = true)}
    on:focusout={() => (item_show = false)}
    class="relative"
>
    <div class="pt-2.5 pb-2.5 px-7 flex justify-between gap-x-5 invisible text-lg font-semibold">
        <div class="{item_show ? 'px-8' : ''}" >
            {item_current ? item_current : 'Select'}
        </div>
        <img src="/img/down-short-arrow.svg" alt="Category Menu" />
    </div>
    <div class="dropdown absolute top-0 cursor-pointer" >
        <div class="flex flex-col items-center" >
            <div class="pt-2.5 pb-2.5 px-7 flex justify-between gap-x-5">
                <div class="{item_show ? 'px-8' : ''}" >
                    {item_current ? item_current : 'Select'}
                </div>
                <img src="/img/down-short-arrow.svg" alt="Profile Menu" />
            </div>
            {#if item_show}
                <div class="dropdown_menu w-full">
                    {#each editItems as item}
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

    let item_show: boolean = false;
    let item_current: string = "";

    const dispatch = createEventDispatcher();

    const editItems = [
        { id: "basic-info", title: "Basic" },
        { id: "listings", title: "Listings" },
        { id: "interests", title: "Interests" },
        { id: "garage", title: "Garage" },
        { id: "settings", title: "Settings" }
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
        @apply border-2 border-[#1D3307] rounded-[27px] text-lg font-semibold text-primaryfontcolor;
    }
    .dropdown_menu {
        @apply relative flex flex-col rounded-[27px] z-10 bg-white w-full gap-y-3 px-8 py-4;
    }
</style>