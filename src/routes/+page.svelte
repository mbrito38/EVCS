<svelte:head>
	<title>EV Car Sales - The World's First EV Selling Platform</title>
</svelte:head>

<div class="w-full flex items-center flex-col">
	<section class="text-white home-banner" style="background-image: url('img/home-banner.webp')">
		<div class="container flex-col items-center h-[820px] pt-15 tablet:pt-20 pb-12 gap-y-4">
			<h1 class="text-center">
                Only Electric Vehicles
            </h1>
			<p class="text-center">
                The first and only global site for buying and selling only electric vehicles.
            </p>
			<HomeBrowseGlass />
			<div class="w-full mt-28">
				<ScrollDownButton link="#buy-sell-section" />
			</div>
		</div>
	</section>
	<BuySellLinksSection id="buy-sell-section" />
	<NewsSection />
	<DiscussionsSection />
	<ReviewsSection />
	<CTASection />
</div>

<script lang="ts">
	import HomeBrowseGlass from "$lib/components/Shared/HomeBrowseGlass.svelte";
	import CTASection from "$lib/components/Templates/CTASection.svelte";
	import ReviewsSection from "$lib/components/Templates/ReviewsSection.svelte";
	import DiscussionsSection from "$lib/components/Templates/DiscussionsSection.svelte";
	import NewsSection from "$lib/components/Templates/NewsSection.svelte";
	import BuySellLinksSection from "$lib/components/Templates/BuySellLinksSection.svelte";
	import ScrollDownButton from "$lib/components/Button/ScrollDownButton.svelte";
</script>

<style lang="postcss" scoped>
	section {
		@apply w-full flex justify-center;
		> * {
			@apply container w-full;
		}
	}
	.home-banner {
		background: 5% 95%;
		@apply bg-auto;
	}
</style>
