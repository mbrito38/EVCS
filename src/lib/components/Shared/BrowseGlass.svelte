<div class="glass w-full max-w-[750px] mt-[34px] tablet:mt-12 py-[30px] tablet:py-14">
    <div class="flex flex-wrap justify-center px-8 tablet:px-20 gap-y-7 gap-x-7 pb-7">
        <SolidButton title="Select Make" on:click={selectMakeModal} />
        <SolidButton title="Edit Filters" on:click={selectFiltersModal} />
        <TagContainer />
        <SolidButton title="Submit" />
    </div>
</div>

<Modal bind:show={select_make_modal}>
    <MakeModal />
</Modal>

<Modal bind:show={filters_modal}>
    <FilterModal />
</Modal>

<script lang="ts" >
    import FilterModal from "$lib/components/Modal/FilterModal.svelte";
    import MakeModal from "$lib/components/Modal/MakeModal.svelte";
	import Modal from "$lib/components/Modal/Modal.svelte";
	import TagContainer from "$lib/components/Shared/TagContainer.svelte";
    import SolidButton from "$lib/components/Button/SolidButton.svelte";

    export let select_make_modal : boolean = false;
    export let filters_modal : boolean = false;

    const selectMakeModal = () => {
        select_make_modal = !select_make_modal;
    };

    const selectFiltersModal = () => {
        filters_modal = !filters_modal;
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