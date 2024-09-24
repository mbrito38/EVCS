<div class="glass w-full max-w-[750px] mt-[34px] tablet:mt-12 py-[30px] tablet:py-14">
    <div class="flex flex-wrap justify-center px-8 tablet:px-20 gap-y-7 gap-x-7 pb-7">
        <SolidButton title="Select Make" on:click={selectMakeModal} />
        <SolidButton title="Edit Filters" on:click={selectFiltersModal} />
        <TagContainer />
        {#if $researchModel}
            <a href="/research-an-ev/{$researchModel?.slug}">
                <SolidButton title="Submit" />
            </a>
        {/if}
    </div>
</div>

<Modal bind:show={select_make_modal}>
    <MakeModal bind:modal={select_make_modal} />
</Modal>

<Modal bind:show={filters_modal}>
    <FilterModal />
</Modal>

<script lang="ts" >
    import Modal from "$lib/components/Modal/Modal.svelte";
    import FilterModal from "$lib/components/Research/FilterModal.svelte";
    import MakeModal from "$lib/components/Research/MakeModal.svelte";
    import TagContainer from "$lib/components/Research/TagContainer.svelte";
    import SolidButton from "$lib/components/Button/SolidButton.svelte";
    import { researchModel } from "$lib/stores/research-model";

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