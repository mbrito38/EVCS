<svelte:head>
	<title>Search Cars - EV Car Sales</title>
</svelte:head>

<div class="w-full flex items-center flex-col">
	<section class="bg-white">
		<div class="flex-col items-center pt-20 tablet_only:pt-10 pb-15">
			<h2 class="text-center">
                Search Results
            </h2>

            <div class="laptop:flex justify-between items-end w-full mt-10 hidden">
				<div class="flex gap-x-10 h-10">
					<img
                        on:click={() => (filters_modal = !filters_modal)}
                        on:keypress={() => (filters_modal = !filters_modal)}
					    src="img/icons/edit-filters.svg"
                        class="cursor-pointer"
                        alt="Filters"
                    />
					<img
                        on:click={() => savetoggle()}
                        on:keypress={() => savetoggle()}
					    src="img/icons/{saved ? 'SaveClicked.svg' : 'Save.svg'}"
                        class="cursor-pointer"
                        alt="Save"
                    />
				</div>
				<div class="flex-1 flex px-32 text-dove-gray" >
					<p
                        on:click={() => filtertoggle('list')}
                        on:keypress={() => filtertoggle('list')}
                        class="flex-1 text-center cursor-pointer border-b-solid border-b-2 pb-[6.5px] {filter_mode !== 'map' ? 'border-b-vibrant_green text-vibrant_green' : 'border-b-dove-gray'}"
                    >
                        List View
                    </p>
					<p
                        on:click={() => filtertoggle('map')}
                        on:keypress={() => filtertoggle('map')}
						class="flex-1 text-center cursor-pointer border-b-solid border-b-2 pb-[6.5px] border-b-dove-gray {filter_mode === 'map' ? 'border-b-vibrant_green text-vibrant_green' : 'border-b-dove-gray'}"
                    >
                        Map View
                    </p>
				</div>
				<button
                    on:click={() => (sort_modal = !sort_modal)}
                    on:keypress={() => (sort_modal = !sort_modal)}
					class="button-2 border-solid border-2 border-primaryfontcolor"
                >
					Sort By
				</button>
			</div>

			<div class="laptop:hidden flex flex-col w-full mt-[30px] gap-y-[30px]">
				<div class="flex justify-between">
					<div class="flex gap-x-[20px] tablet:gap-x-[30px] h-10 my-auto">
						<img
							on:click={() => (filters_modal = !filters_modal)}
							on:keypress={() => (filters_modal = !filters_modal)}
							src="img/icons/edit-filters.svg"
							class="cursor-pointer"
							alt="Filters"
						/>
						<img
							on:click={() => savetoggle()}
							on:keypress={() => savetoggle()}
							src="img/icons/{saved ? 'SaveClicked.svg' : 'Save.svg'}"
							class="cursor-pointer"
							alt="Save"
						/>
					</div>

					<button
						on:click={() => (sort_modal = !sort_modal)}
						on:keypress={() => (sort_modal = !sort_modal)}
						class="button-2 border-solid border-2 border-primaryfontcolor"
					>
						Sort By
					</button>
				</div>

				<div class="flex text-dove-gray" >
					<p
                        on:click={() => filtertoggle('list')}
                        on:keypress={() => filtertoggle('list')}
                        class="w-full text-center cursor-pointer border-b-solid border-b-2 pb-[6.5px] {filter_mode !== 'map' ? 'border-b-vibrant_green text-vibrant_green' : 'border-b-dove-gray'}"
                    >
                        List View
                    </p>
					<p
                        on:click={() => filtertoggle('map')}
                        on:keypress={() => filtertoggle('map')}
						class="w-full text-center cursor-pointer border-b-solid border-b-2 pb-[6.5px] border-b-dove-gray {filter_mode === 'map' ? 'border-b-vibrant_green text-vibrant_green' : 'border-b-dove-gray'}"
                    >
                        Map View
                    </p>
				</div>
			</div>

            <div class="grid tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-x-[30px] gap-y-[30px] w-full mt-12 tablet_only:mt-10 mb-8">
				<ListingCard car_text="Tesla Model Y 2022" price_text="$32000" img_url="/img/demo.jpg" />
				<ListingCard car_text="Tesla Model Y 2022" price_text="$32000" img_url="/img/demo.jpg" />
				<ListingCard car_text="Tesla Model Y 2022" price_text="$32000" img_url="/img/demo.jpg" />
				<ListingCard car_text="Tesla Model Y 2022" price_text="$32000" img_url="/img/demo.jpg" />
				<ListingCard car_text="Tesla Model Y 2022" price_text="$32000" img_url="/img/demo.jpg" />
				<ListingCard car_text="Tesla Model Y 2022" price_text="$32000" img_url="/img/demo.jpg" />
			</div>
			<SolidButton title="Load more" class="mt-8 mb-4 !px-[30px] !leading-[26px]" />
		</div>
	</section>
    <BuySellLinksSection />
	<NewsSection />
	<DiscussionsSection />
	<ReviewsSection />
	<CTASection />
	<Modal bind:show={filters_modal}>
		<FilterModal />
	</Modal>
	<Modal bind:show={sort_modal}>
		<SortModal />
	</Modal>
</div>

<script lang="ts" >
	import Modal from "$lib/components/Modal/Modal.svelte";
	import CTASection from "$lib/components/Templates/CTASection.svelte";
	import BuySellLinksSection from "$lib/components/Templates/BuySellLinksSection.svelte";
	import SolidButton from "$lib/components/Button/SolidButton.svelte";
	import ListingCard from "$lib/components/Card/ListingCard.svelte";
	import NewsSection from "$lib/components/Templates/NewsSection.svelte";
	import DiscussionsSection from "$lib/components/Templates/DiscussionsSection.svelte";
	import ReviewsSection from "$lib/components/Templates/ReviewsSection.svelte";
	import FilterModal from "$lib/components/Modal/FilterModal.svelte";
	import SortModal from "$lib/components/Modal/SortModal.svelte";

	let filters_modal = false;
	let saved = false;
	let filter_mode = "list";
	let sort_modal = false;

	const savetoggle = () => {
		saved = !saved;
	}

	const filtertoggle = (mode : string) => {
		filter_mode = mode;
	}
</script>

<style lang="postcss" scoped>
	section {
		@apply w-full flex justify-center;
		> * {
			@apply container w-full;
		}
	}
</style>
