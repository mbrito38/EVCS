<!-- svelte-ignore a11y-click-events-have-key-events -->
<button
	class="px-10 py-4 text-sm font-semibold text-vibrant_green border-2 border-solid border-vibrant_green desktop:text-lg rounded-[3rem] text-center bg-white
  hover:opacity-90 cursor-pointer w-fit flex items-center {classes}"
	on:click={clickBtn}
>
	{title}
</button>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let title: string = 'Button';
	let classes: string = '';
	export { classes as class };

	const dispatch = createEventDispatcher();

	const clickBtn = () => {
		dispatch('click');
	};
</script>
