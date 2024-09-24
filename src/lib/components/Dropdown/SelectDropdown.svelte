<div class="flex relative select-container" use:clickOutside={() => show = false} >
    <div class="pb-2 w-full text-xl font-semibold select flex flex-col relative bg-white" >
        <span value="" on:click={() => show = !show} on:keypress={() => show = !show} >Please Select</span>
        <div class="absolute flex-col top-10 {show ? 'flex' : 'hidden'} px-8 pt-2 w-full pb-10 bg-white" >
            {#each data as option}
            <span value="{option.value}" class="py-3 option cursor-pointer" >{option.title}</span>
            {/each}
        </div>
    </div>
    <img src="/img/Arrow.png" alt="" class="absolute right-6 rotate-90 h-4 top-1.5" />
</div>

<script lang="ts" >
    import { clickOutside } from 'svelte-use-click-outside';

    const data = [
        {title: "Accessories/Parts",value:"accessories-parts"},
        {title: "After Market Warranties",value:"after-market-warranties"},
        {title: "Body Shops & Repairers",value:"body-shops-repairers"},
        {title: "Car Pooling",value:"car-pooling"},
        {title: "Car Rentals",value:"car-rentals"},
    ]

    let show = false;
</script>

<style lang="postcss" >
    .select {
        -moz-appearance:none; /* Firefox */
        -webkit-appearance:none; /* Safari and Chrome */
        appearance:none;
        border-bottom: theme('colors.primaryfontcolor') 2px solid;
    }
    .option {
        border-bottom: #3F4837 1px solid;
    }
</style>