<svelte:head>
	<title>Quiz - EV Car Sales</title>
</svelte:head>

<div class="w-full flex items-center flex-col">
	<section class="w-full flex justify-center pt-10 tablet:pt-16 pb-[70px] tablet:pb-48 bg-cover bg-white">
		<div class="container flex-col items-center gap-y-6 text-primaryfontcolor">
			<h1 class="text-center">
				EV Match Quiz
			</h1>
			<h3 class="text-center text-[27px]">
				{quiz_data[quiz - 1].title}
			</h3>
			<p class="text-center text-xl font-semibold">
				{quiz_data[quiz - 1].subtitle}
			</p>
			<div class="max-w-[904px] w-full flex flex-col gap-y-[50px]">
				<div class="glass w-full mt-0 tablet:mt-4 flex flex-col items-center justify-center py-14 gap-y-11 px-8">
					{#if quiz === 1}
						<div class="flex flex-col tablet:flex-row gap-x-8 gap-y-8 items-center" >
							<MainDropdown header="Make" />
							<MainDropdown header="Model" />
							<MainDropdown header="Year" />
						</div>
						<SolidButton title="Add" class="!px-[100px] !text-xl py-4" />
						<div class="font-semibold text-base flex items-center gap-x-5" >
							<Checkbox />
							<span class="flex-1 font-bold text-base">
                                I've never owned or used a car
                            </span>
						</div>
					{:else if quiz === 2 || quiz === 3 || quiz === 5}
						<div class="flex flex-wrap gap-x-8 gap-y-5 justify-center" >
							{#each q2items as item}
							<button class="text-xl border-primaryfontcolor border-solid border-2 font-semibold py-2.5 px-7 rounded-[2rem]
							 hover:text-white hover:border-[#82D06D] hover:bg-[#82D06D] {item.checked ? 'q2checked' : ''}"
							 on:click={() => item.checked = !item.checked}
							 >
								{item.title}
							</button>
							{/each}
						</div>
					{:else if quiz === 4}
						<RangeSliderSection class="tablet:w-[526px]" />
					{:else if quiz === 6}
						<div class="flex flex-wrap gap-x-2 tablet:gap-x-8 desktop:gap-x-20 gap-y-5 justify-center" >
							{#each q6items as item,i}
							<button class="tablet:text-xl border-primaryfontcolor border-solid border-2 font-semibold py-2 tablet:py-2.5
							px-5 tablet:px-7 rounded-[2rem] {i === q6checked ? 'q2checked' : ''}"
								on:click={() => q6checked = i}
								>
								{item.title}
							</button>
							{/each}
						</div>
					{:else if quiz === 7}
						<Carousel class="three-items-max" item_classes="h-[280px] desktop:h-[210px]" >
							<BodyStyleCard />
							<BodyStyleCard />
							<BodyStyleCard />
						</Carousel>
					{:else if quiz === 8}
						<div class="flex flex-col items-center gap-y-6" >
							<input class="border-solid border-1 border-primaryfontcolor rounded-3xl py-2 px-6 mb-4 bg-site_bg_color" />
							<img src="img/map.png" alt="" />
							<RangeSlider values={[0]} min={0} max={5000} />
							<div>1 km</div>
							<button class="button-3">Add Location</button>
						</div>
					{:else if quiz === 9}
						<RangeSliderSection class="tablet:w-[526px]" slider_data={{min: 2001 , max : 2026 , min_text : "Oldest" , max_text : "Newest"}}  />
					{:else if quiz === 10}
						<RangeSliderSection class="tablet:w-[526px]" slider_data={{min: 0 , max : 1000000 , min_text : "Lowest" , max_text : "Highest"}}  />
					{/if}
				</div>
				<div class="flex justify-between" >
					<button class="button-1 backwards" on:click={() => quiz -= 1} >Back</button>
					<button class="button-1" on:click={() => quiz += 1} >Next</button>
				</div>
			</div>
		</div>
	</section>
</div>

<script lang="ts" >
	import Checkbox from './../../lib/components/Button/Checkbox.svelte';
	import BodyStyleCard from './../../lib/components/Card/BodyStyleCard.svelte';
	import Carousel from './../../lib/components/Carousel/Carousel.svelte';
	import RangeSliderSection from './../../lib/components/Shared/RangeSliderSection.svelte';
	import SolidButton from '$lib/components/Button/SolidButton.svelte';
	import MainDropdown from '$lib/components/Dropdown/MainDropdown.svelte';
	import RangeSlider from 'svelte-range-slider-pips';

	const quiz_data = [
		{title: 'What car(s) have you owned or used before?' , subtitle: 'Add all or just a handful'},
		{title: 'What did you like about previous vehicles?' , subtitle: 'Select up to 5 features'},
		{title: 'What did you dislike about previous vehicles?' , subtitle: 'Select up to 5 features'},
		{title: "What's your budget?" , subtitle: 'Type in the boxes or drag the sliders to a desired amount'},
		{title: 'What would you love your EV to do?' , subtitle: 'Select one'},
		{title: 'What kinds of cars do you want to see?' , subtitle: 'Select one'},
		{title: 'What body types do you like?' , subtitle: 'Select as many as you want'},
		{title: 'Where do you want to look?' , subtitle: 'Add up to 3 locations'},
		{title: 'What year range are you interested in?' , subtitle: 'Drag the sliders to select'},
		{title: 'What odometer range are you interested in?' , subtitle: 'Drag the sliders to select'},
	]

	let quiz = 1;
	let q1checked : boolean = false;
	const q2items = [
		{title : 'Comfortable',checked : false},
		{title : 'Spacious',checked : false},
		{title : 'Heated seats',checked : false},
		{title : 'Navigation system',checked : false},
		{title : 'Sunroof',checked : false},
		{title : 'Bluetooth',checked : false},
		{title : 'Reverse camera',checked : false},
		{title : 'Spacious',checked : false},
	]
	const q6items = [
		{title : 'All'},
		{title : 'New'},
		{title : 'Used'},
	]

	let q6checked : number = 1;
</script>

<style lang="postcss" scoped>
	.glass {
		background: #F6F7F5;
		border-radius: 2rem;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(7px);
		-webkit-backdrop-filter: blur(7px);
		border: 1px solid white;
	}

	.q2checked {
		@apply border-vibrant_green bg-vibrant_green text-white
	}
</style>