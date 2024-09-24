<footer class="w-full bg-[#015601] py-[70px] text-white flex justify-center">
	<div class="container w-full gap-y-8 gap-x-8 grid tablet:grid-cols-2 laptop:grid-cols-3" bind:this={masonrygrid} >
		<a href="/" class="laptop:hidden w-full" >
			<SiteLogoWhite class="laptop:hidden w-full h-12" />
		</a>
		<a href="/" class="laptop:hidden" >
			<SocialMedia class="laptop:hidden tablet:order-2" />
		</a>
		<div class="flex flex-col gap-y-6">
			<SiteLogoWhite class="hidden laptop:inline" />
			<div class="flex flex-col gap-y-2">
				<h4 class="text-lg font-bold laptop:font-semibold">Partners</h4>
				<a href="/">
					<span class="font-normal text-base"> About Partnerships </span>
				</a>
				<a href="/">
					<span class="font-normal text-base"> Become a Partner </span>
				</a>
				<a href="/">
					<span class="font-normal text-base"> Dealership Advertising </span>
				</a>
			</div>
		</div>
		<div class="flex flex-col gap-y-6 tablet:order-1 laptop:order-none">
			<SocialMedia class="hidden laptop:flex" />
			<div class="flex flex-col gap-y-2">
				<h4 class="text-lg font-bold laptop:font-semibold">Support</h4>
				<a href="/">
					<span class="font-normal text-base"> Help Centre </span>
				</a>
				<a href="/">
					<span class="font-normal text-base"> Contact Us </span>
				</a>
				<a href="/">
					<span class="font-normal text-base"> Sitemap </span>
				</a>
			</div>
		</div>
		<div class="flex flex-col gap-y-2">
			<a class="cursor-pointer" href="/legal" >
				<h4 class="text-lg font-bold laptop:font-semibold">Legal</h4>
			</a>
			<a href="/">
				<span class="font-normal text-base"> Terms & Conditions </span>
			</a>
			<a href="/">
				<span class="font-normal text-base"> Privacy Policy </span>
			</a>
			<a href="/">
				<span class="font-normal text-base"> Copyright Information </span>
			</a>
			<a href="/">
				<span class="font-normal text-base"> Cookies Policy </span>
			</a>
			<a href="/">
				<span class="font-normal text-base"> Cookie Settings </span>
			</a>
		</div>
	</div>
</footer>

<script lang="ts">
	import { onMount } from "svelte";
	import SiteLogoWhite from "$lib/components/Shared/SiteLogoWhite.svelte";
	import SocialMedia from "$lib/components/Shared/SocialMedia.svelte";

	let masonrygrid : any;

	onMount(() => {
		const mason = masonrygrid;
		let i = 0;
		for (const block of mason.children) {
			let height = 0;
			for (const child of block.children) {
				height += child.offsetHeight;
			}
		}
	})
</script>