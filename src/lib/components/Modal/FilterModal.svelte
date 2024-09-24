<div class="h-full w-full px-20 py-8 flex flex-col text-primaryfontcolor">
	<h4 class="mb-6 text-center">Edit Filters</h4>
	<div class="flex flex-col flex-1 overflow-y-auto">
		<div class="flex justify-between items-center row">
			<span class="text-base font-bold">Price</span>
			<div class="flex gap-x-5">
				<button>Min</button>
				<button>Max</button>
			</div>
		</div>
		<div class="flex justify-between items-center row">
			<span class="text-base font-bold">Range</span>
			<div class="flex gap-x-5">
				<button>Min</button>
				<button>Max</button>
			</div>
		</div>
		<div class="flex flex-wrap items-center row gap-x-5 gap-y-3">
			<button class="green2">All</button>
			<button class="green2">New</button>
			<button class="green2">Used</button>
		</div>
		<div class="flex flex-wrap items-center row text-base gap-x-4 gap-y-3">
			<span class="font-bold flex items-center gap-x-7">Location</span>
			<button class="flex items-center gap-x-2">
				<img src="img/Plus.png" alt="" class="h-4" />
				<span class="whitespace-nowrap" >Add location</span>
			</button>
		</div>
		<div class="flex justify-between items-center row">
			<span class="text-base font-bold flex items-center gap-x-7 cursor-pointer">Body<img class="h-4" src="img/Arrow.png" alt="" /></span>
			<button>Any</button>
		</div>
	</div>
	<div class="flex justify-center">
		<button class="green mt-6">Apply</button>
	</div>
</div>

<script lang="ts">
</script>

<style lang="postcss">
	.row {
		@apply py-3.5;
		border-bottom: solid 1px #707070;
	}

	button {
		@apply rounded-3xl bg-white px-4 py-1.5;
		border: solid 1px #1d3307;
		&.green {
			border: none;
			@apply py-2.5  px-7 text-white bg-vibrant_green font-semibold text-xl;
		}
	}

	.green2 {
		@apply py-1.5 px-6 text-primaryfontcolor border-primaryfontcolor bg-white font-semibold text-xl;
		border-width: 2px;
	}
</style>
