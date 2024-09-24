<div class="max-w-[435px] flex flex-col gap-y-4 p-6 tablet:p-8 bg-white items-center rounded-[2rem] card-border">
	<h4 class="leading-[26px]">
		{header_text}
	</h4>
	<div class="flex gap-x-7 w-full">
		<img src={author_img} alt={author_name} class="rounded-3xl w-[42px] h-[42px] my-auto" />
		<div class="flex flex-col flex-1">
			<p class="font-bold text-warm_grey">
				{author_name}
			</p>
			<div class="flex gap-x-2 text-warm_grey">
				<p>
					{time_ago} hours ago
				</p>
				<p class="middle-dot" />
				<img src="/img/comments.svg" alt="" />
				<p>
					{comment_count}
				</p>
			</div>
		</div>
	</div>
	<p class="text-warm_grey">
		{body_text}
		<a href={button_link}>
			<strong>Read more</strong>
		</a>
	</p>
</div>

<script lang="ts">
	export let header_text: string;
	export let body_text: string;
	export let author_name: string;
	export let author_img: string = '/img/Profile.svg';
	export let button_link: string = '';
	export let comment_count: number = 0;
	export let date: string = '';

	$: time_ago = date;
</script>

<style lang="postcss" scoped>
	.card-border {
			@apply border-1 border-solid;
			border-color: #0026071A;
	}
</style>
