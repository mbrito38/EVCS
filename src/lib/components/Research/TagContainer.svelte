{#if $researchModel?.name}
    <div class="flex flex-wrap w-full gap-x-4 gap-y-5 justify-center">
        <button class="tag flex items-center" on:click={() => close()} >
            <img src="img/Cross.png" alt="close" class="h-4" /> {$researchModel.name}
        </button>
    </div>
{/if}
<script lang="ts">
	import { researchModel } from "$lib/stores/research-model";

	const close = () => {
		researchModel.set({});
  	}
</script>

<style lang="postcss" scoped>
  .tag {
	  @apply text-primaryfontcolor bg-white leading-[1] px-[30px] py-3.5 gap-x-3.5 rounded-3xl text-base;
  }
</style>