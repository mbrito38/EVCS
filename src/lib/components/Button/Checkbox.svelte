<div class="border-solid border-primaryfontcolor border-2 aspect-square h-7 cursor-pointer rounded-3xl {checked ? 'checked' : ''}" 
    on:click={() => checked = !checked} on:keypress={() => checked = !checked} >
    <img src='/img/icons/Tick.svg' class="{checked ? '' : 'hidden'}" alt="" />
</div>

<script lang="ts">
    let checked = false;
</script>

<style lang="postcss" >
    .checked {
		@apply border-vibrant_green bg-vibrant_green;
	}
</style>