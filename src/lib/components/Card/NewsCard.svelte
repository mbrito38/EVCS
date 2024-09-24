<div class="flex flex-col gap-y-4 max-w-[438px] laptop:max-w-[348px] desktop:max-w-[438px] bg-white justify-between
items-center rounded-[2rem] border-1 border-[#0026071A] border-solid {classes} {mode}">
	<img class="rounded-t-[2rem] h-[220px] w-full object-cover" src={img_url} alt={img_alt} />
	<div class="text_info flex flex-col w-full flex-1 justify-between gap-y-4" >
		<h4 class="px-8">
			{header_text}
		</h4>
		<div class="flex gap-x-2 w-full px-8 pb-7 time_info">
			<p class="text-[#3D4835]">
				{minutes_ago} min ago
			</p>
			<p class="middle-dot text-[#3D4835]" />
			<p class="minute_read text-[#3D4835]">
				{minute_read} min read
			</p>
		</div>
	</div>
</div>

<script lang="ts">
	export let header_text: string = '';
	export let minute_read: number = 0;
	export let img_url: string = '/img/halley.jpeg';
	export let img_alt: string = '';
	export let mode: string = '';
	let classes : string = '';
	export {classes as class};

	$: minutes_ago = 12;
</script>

<style lang="postcss">

	.long {
		@apply h-[158px] tablet:h-[unset] flex-row max-w-[unset] flex-1;

		&.flex-row-reverse {
			flex-direction: row-reverse;
			> img {
				@apply rounded-l-none rounded-r-3xl;
			}
		}

		> img {
			@apply w-1/2 tablet:w-[unset] flex-1 h-[158px] rounded-l-[2rem] rounded-r-none;
		}

		.text_info {
			@apply line-clamp-3 flex-[1.1];
		}

		.time_info {
			@apply flex-col py-0;
		}

		.minute_read,.middle-dot {
			@apply hidden;
		}
	}
</style>
