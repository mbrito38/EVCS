<svelte:head>
	<title>Browse Vehicles - EV Car Sales</title>
</svelte:head>

<div class="w-full flex items-center flex-col">
	<section class="w-full flex justify-center pt-15 laptop:pt-20 pb-[70px] laptop:pb-48 relative bg-white" >
		<img src='img/browse.webp' class="object-cover object-0 banner absolute h-full w-full top-0" alt="" />
		<div class="container flex-col items-center z-10 gap-y-4 text-white">
			<h1>Browse EVs</h1>
			<p class="text-center">Enter details to find listings or scroll down to view more options.</p>
			<BrowseGlass />
		</div>
	</section>
	<section class="w-full flex justify-center">
		<div class="w-full flex flex-col items-center pt-10 laptop:pt-20 gap-y-6 pb-15">
			<h2 class="text-center px-14 tablet:px-0">
				Or, explore our range by:
			</h2>
			<MainDropdown header="Body type" />
			<div class="flex max-w-[400px] w-full items-center justify-center mt-8 gap-x-8 mb-8" >
				<div class="h-full flex items-center" >
					<ArrowButton left={true} />
				</div>
				<div class="flex-1 flex justify-center">
					<CarIconTile />
				</div>
				<div class="h-full flex items-center" >
					<ArrowButton />
				</div>
			</div>
		</div>
	</section>
	<section class="bg-white w-full flex justify-center">
		<div class="w-full flex flex-col items-center pt-10 laptop:pt-20 pb-15">
			<h2 class="text-center">
				Popular Searches
			</h2>
			<div class="flex w-full items-center justify-center mt-10 laptop:mt-[72px] gap-x-0 tablet:gap-x-8 mb-8" >
				<div class="h-full items-center hidden tablet:flex">
					<ArrowButton left={true} />
				</div>
				<div class="grid container tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-x-5 gap-y-5 w-full">
					<PopularSearchCard img_url="/img/demo.jpg" heading="Small cars under $25k" />
					<PopularSearchCard img_url="/img/demo.jpg" heading="Luxury sports cars over $70k" />
					<PopularSearchCard img_url="/img/demo.jpg" heading="Family cars under $50k" />
				</div>
				<div class="h-full items-center hidden tablet:flex">
					<ArrowButton />
				</div>
			</div>

			<div class="block tablet:hidden">
				<SolidButton title="Load more" />
			</div>
		</div>
	</section>
	<BuySellLinksSection />
	<NewsSection />
	<DiscussionsSection />
	<ReviewsSection />
	<CTASection />
</div>

<script>
	import MainDropdown from '$lib/components/Dropdown/MainDropdown.svelte';
	import CarIconTile from "$lib/components/Shared/CarIconTile.svelte";
	import PopularSearchCard from "$lib/components/Card/PopularSearchCard.svelte";
	import ArrowButton from "$lib/components/Button/ArrowButton.svelte";
	import CTASection from "$lib/components/Templates/CTASection.svelte";
	import BuySellLinksSection from "$lib/components/Templates/BuySellLinksSection.svelte";
	import NewsSection from "$lib/components/Templates/NewsSection.svelte";
	import ReviewsSection from "$lib/components/Templates/ReviewsSection.svelte";
	import DiscussionsSection from "$lib/components/Templates/DiscussionsSection.svelte";
	import BrowseGlass from "$lib/components/Shared/BrowseGlass.svelte";
	import SolidButton from "$lib/components/Button/SolidButton.svelte";
</script>

<style lang="postcss" >
	.banner {
		filter: brightness(70%);
	}
</style>