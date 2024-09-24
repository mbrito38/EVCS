
<div class="flex flex-wrap w-full gap-x-4 gap-y-5 justify-center" >
    {#each items as item,i}
        <button class="tag flex items-center capitalize" on:click={() => close(i)} ><img src="img/Cross.png" alt="close" class="h-4" />{item}</button>
    {/each}
</div>

<script lang="ts" >
    export let items : string[] = ['asd'];

    function close(i : number) {
        let proxy_items = items;
        proxy_items.splice(i,1);
        items = proxy_items; //reactivity
    }
</script>

<style lang="postcss" >
    .tag {
        @apply text-primaryfontcolor bg-white leading-[1] px-[30px] py-3.5 gap-x-3.5 rounded-3xl text-base;                
    }
</style>