<button on:click={onClick} on:keypress={onClick} 
class="border-1 border-solid border-vibrant_green h-11 aspect-square flex items-center justify-center rounded-3xl {left ? 'reversed' : ''} {classes}" />

<script lang="ts">
	export let left: boolean = false;
	let classes : string = '';
	export {classes as class};
	export let onClick = () => {};
</script>

<style lang="postcss">
	button::after {
		content: url('/img/icons/VibrantArrow.svg');
		height: 17px;
		margin-left: 2px;
	}

	button.reversed::after {
		transform: scaleX(-1);
		margin-left: 0;
	}
</style>
