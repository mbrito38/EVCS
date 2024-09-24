<div class="max-w-[435px] flex flex-col gap-y-4 py-8 px-4 laptop:px-8 bg-white items-center justify-between rounded-[2rem] card-shadow">
	<h4>
		{header_text}
	</h4>
	<p class="text-center text-[17px]">
		{body_text}
	</p>
	<a href={button_link}>
		<button class="button-1">
			{button_text}
		</button>
	</a>
</div>

<script lang="ts">
	export let header_text: string;
	export let body_text: string;
	export let button_text: string;
	export let button_link: string = '';
</script>

<style lang="postcss" scoped>
	.card-shadow {
		box-shadow: 0px 0px 20px #0000001A;
	}
</style>
