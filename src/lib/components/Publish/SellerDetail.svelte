<div class="flex flex-col">
	<div class="flex gap-x-5">
		<img class="avatar" src="/img/halley.jpeg" alt="avatar" />
		<div class="text-base font-medium my-auto">
			<span class="font-bold">John Smith</span> is selling
		</div>
	</div>

	<h2 class="mt-5 font-bold">Tesla Model X, 2021</h2>

	<div class="flex flex-col tablet:flex-row gap-y-5 justify-between laptop:flex-col mt-2">
		<h3 class="font-semibold">$40,000</h3>

		<h4 class="font-semibold my-auto">Used EV • Available Now</h4>
	</div>

	<CarImageInfo class="mt-8 block laptop:hidden laptop:mt-0" />

	<div class="mt-10 flex justify-between">
		<SolidButton title="Message Seller" class="pre_laptop:!px-6 pre_laptop:!py-3 laptop:!text-lg" />
		<div class="flex gap-x-5 items-center">
			<img src="/img/icons/save-with-bg.svg" class="social-icon" alt="" />
			<img src="/img/icons/share-with-bg.svg" class="social-icon" alt="" />
			<img src="/img/icons/more-with-bg.svg" class="social-icon" alt="" />
		</div>
	</div>
</div>

<script lang="ts">
	import SolidButton from '$lib/components/Button/SolidButton.svelte';
	import CarImageInfo from '$lib/components/Publish/CarImageInfo.svelte';
</script>

<style lang="postcss" scoped>
	.avatar {
		@apply w-14 h-14 rounded-full;
	}
</style>
