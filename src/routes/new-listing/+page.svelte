<div class="w-full flex items-center flex-col">
	<section class="w-full flex justify-center pt-10 laptop:pt-20 pb-[70px] laptop:pb-48 bg-cover">
		<div class="container w-full flex-col items-center gap-y-4 text-primaryfontcolor">
			<h1 class="text-center">
                Create New Listing
            </h1>
			<p class="text-center mb-10 laptop:mb-12 font-semibold max-w-[374px] laptop:max-w-full">
                Enter your registration below to prefill your EV's basic details.
            </p>
			<MainDropdown header="State" />
            <CarNumberEntry class="mt-5 laptop:mt-12" />
			<p class="text-warm_grey mt-5 laptop:mt-12 text-center">
                You can add more details in the next step.
            </p>
			<div class="mt-4 laptop:mt-8 desktop:mt-12 gap-y-12 items-center flex flex-col laptop:flex-row-reverse justify-between w-full laptop:max-w-[750px] desktop:max-w-[1366px]">
				<button class="button-3">
                    Find my EV
                </button>
				<button class="button-4 whitespace-nowrap">
                    Or, enter details manually
                </button>
			</div>
		</div>
	</section>
</div>

<script lang="ts">
	import MainDropdown from "$lib/components/Dropdown/MainDropdown.svelte";
	import CarNumberEntry from "$lib/components/Shared/CarNumberEntry.svelte";
</script>