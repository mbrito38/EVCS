<div class="h-full w-full px-20 py-8 text-primaryfontcolor">
	{#if show_modals == 'make'}
		<h4 class="mb-6 text-center">Select Make</h4>
		<div class="flex flex-col overflow-y-auto max-h-[376px]">
			{#each $brands as brand}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="selection font-bold capitalize" on:click={() => selectBrand(brand.id)}>
					{brand.name}
					<img src="img/Arrow.png" class="h-4" alt="" />
				</div>
			{/each}
		</div>
	{:else if show_modals == 'model'}
		<h4 class="mb-6 text-center">Select Model</h4>
		<div class="flex flex-col overflow-y-auto max-h-[376px]">
			{#each Array.from(carModels) as carModel}
				<div class="selection font-bold capitalize hover:opacity-80" on:click={() => selectModel(carModel)} on:keydown={() => selectModel(carModel)} >
					{carModel}
                    <img src="img/Arrow.png" class="h-4" alt="" />
				</div>
			{/each}
		</div>
	{:else if show_modals == 'badge'}
		<h4 class="mb-6 text-center">Select Badge</h4>
		<div class="flex flex-col overflow-y-auto max-h-[376px]">
			{#each badges as badge}
				<div class="selection font-bold capitalize" on:click={() => selectBadge(badge)} on:keydown={() => selectBadge(badge)} >
					{badge?.name ?? ''} {badge?.trim ?? ''} {badge?.year ?? ''}
				</div>
			{/each}
		</div>
	{/if}
</div>

<script lang="ts">
	import { PUBLIC_GRAPHQL_URL_FROM_APP } from '$env/static/public';
	import { brands } from '$lib/stores/brands';
	import { GetCarModelWithBrandQuery } from '$lib/utils/query';
    import { researchModel } from "$lib/stores/research-model";
	import { createEventDispatcher } from 'svelte';

    export let modal;

	let show_modals = 'make';
    let carEntries : any[] = [];
	let carModels: Set<string> = new Set();
	let models: string[] = [];
	let badges: any[] = [];

	const dispatch = createEventDispatcher();

	const selectBrand = async (id: string) => {
		const result = await fetch(PUBLIC_GRAPHQL_URL_FROM_APP, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: GetCarModelWithBrandQuery(id)
		});

		const resultCarModels = await result.json();
		carEntries = resultCarModels?.data?.CarModels?.docs;

		for (const entry of carEntries) {
			carModels.add(entry?.name);
		}

		show_modals = 'model';
	};

    const selectModel = (model_name: string) => {
        badges = carEntries.filter((car) => car.name === model_name);
		show_modals = 'badge';
	};

    const selectBadge = (badge: any) => {
        researchModel.set(badge);
        modal = false;
		dispatch('add_tag', {
			text: `${badge?.brand?.name} ${badge?.name} ${badge?.year}`
		});
    };
</script>

<style lang="postcss" scoped>
	.selection {
		@apply text-base cursor-pointer pl-4 pr-2 flex items-center justify-between py-2 border-solid border-b-1 border-b-[#707070];
		&:first-child {
			border-top: solid 1px #707070;
		}
	}
</style>
