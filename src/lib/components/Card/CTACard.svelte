<div class="CTACard flex flex-col gap-y-6 gap-x-8 py-8 rounded-[2rem] pre_laptop:flex-row-reverse desktop:max-w-[435px] {classes}">
	<img alt={img_alt} src={img_url} class="rounded-3xl w-full tablet:w-1/2 h-full object-cover laptop:object-fill laptop:h-[242px] laptop:w-full flex-1" />
	<div class="flex-col flex gap-y-6 flex-1 text-center tablet:text-left" >
		<h2>
			{header_text}
		</h2>
		<p class="font-semibold w-full">
			{body_text}
		</p>
		<a href={button_link}>
			<button class="button-1">
				{button_text}
			</button>
		</a>
	</div>
</div>

<script lang="ts">
	export let header_text: string;
	export let body_text: string;
	export let button_text: string;
	export let button_link: string = "";
	export let img_url: string = "/img/halley.jpeg";
	export let img_alt: string = "";
	let classes : string = "";
	export {classes as class};
</script>

<style lang="postcss" scoped>
	.CTACard {
		@apply flex-col laptop:flex-row-reverse desktop:flex-col;
		&:nth-child(2n) {
			@apply tablet:flex-row desktop:flex-col;
		}
	}
</style>