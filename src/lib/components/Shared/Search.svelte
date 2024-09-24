<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="w-fit flex cursor-pointer rounded-[2.5rem] border-solid border-2 border-primaryfontcolor search {open ? 'open' : ''} h-fit my-auto"
	use:clickOutside={() => (open = false)}
	on:click={() => (open = true)}
>
	{#if open}
		<input class="flex-1 outline-none" bind:value={searchWord} on:keypress={onKeyPress} placeholder="Search" type="text" />
	{/if}
	<img src="img/icons/SearchNoBG.svg" alt="search" />
</div>

<script lang="ts">
	import { clickOutside } from 'svelte-use-click-outside';

	export let open: boolean = false;

    let searchWord: string = "";

	const onKeyPress = (e: any) => {
		if (e.charCode === 13) {
			searchFunc();
		}
	};

    const searchFunc = () => {};
</script>

<style lang="postcss">
	.search {
		@apply font-medium text-xl;
		&.open {
			@apply pl-6;
		}
	}
</style>
