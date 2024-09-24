<div class="glass w-full max-w-[750px] mt-[34px] tablet:mt-12 py-[30px] tablet:py-14">
	<div class="flex flex-wrap justify-center px-8 tablet:px-8 gap-y-7 gap-x-7 pb-7">
		<SolidButton
            title="Buy an EV"
            class="!bg-white text-[#022F02] cursor-not-allowed opacity-50 hover:opacity-50"
            on:click={() => buyEV()}
        />
		<SolidButton
            title="Research an EV"
            class="!bg-white hover:!bg-[#82D06D] text-[#022F02]"
            on:click={() => selectResearch()}
        />
		<SolidButton
            title="Sell my EV"
            class="!bg-white hover:!bg-[#82D06D] text-[#022F02]"
            on:click={() => sellEV()}
        />
		<TagContainer items={tag_items} />
        {#if $researchModel}
            <a href="/research-an-ev/{$researchModel?.slug}">
                <SolidButton title="Submit" />
            </a>
        {/if}
	</div>
</div>

<Modal bind:show={select_make_modal}>
    <MakeModal bind:modal={select_make_modal} on:add_tag={add_tag} />
</Modal>

<script lang="ts" >
	import TagContainer from "$lib/components/Shared/TagContainer.svelte";
	import SolidButton from "$lib/components/Button/SolidButton.svelte";
	import MakeModal from "$lib/components/Research/MakeModal.svelte";
	import Modal from "$lib/components/Modal/Modal.svelte";
    import { researchModel } from "$lib/stores/research-model";

    export let select_make_modal : boolean = false;

    let tag_items : string[] = [];

    const selectResearch = () => {
		tag_items = [];
		tag_items = tag_items;
		select_make_modal = !select_make_modal;
		tag_items.push("Research");
		tag_items = tag_items;
    }

    const buyEV = () => {
        return;
    };

    const sellEV = () => {
        tag_items = [];
		tag_items = tag_items;
		select_make_modal = !select_make_modal;
		tag_items.push("Sell EV");
		tag_items = tag_items;
    };

	const add_tag = (event: CustomEvent) => {
		tag_items.push(event.detail.text);
		console.log(event.detail.text);
		tag_items = tag_items;
	};
</script>

<style lang="postcss" scoped>
.glass {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border: 1px solid white;
}
</style>