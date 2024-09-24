<div class="card flex flex-col rounded-[2rem] bg-white border-1 border-[#0026071A]">
	<img alt={img_alt} src={img_url} class="rounded-t-[2rem] h-[242px] w-full" />
	<div class="px-8 py-8 flex flex-col gap-y-6">
		<h4>
			{header_text}
		</h4>
		<p class="font-medium">
			{body_text}
		</p>
		<a href={button_link}>
			<OutlineButton title={button_text} class="!px-[30px] border-[#1D3307] text-[#1D3307] !font-bold" />
		</a>
	</div>
</div>

<script lang="ts">
	export let header_text: string;
	export let body_text: string;
	export let button_text: string;
	export let button_link: string = '';
	export let img_url: string = '/img/demo.jpg';
	export let img_alt: string = '';

	import OutlineButton from "$lib/components/Button/OutlineButton.svelte";
</script>

<style lang="postcss">
	.card {
		max-width: 439px;
	}
</style>
