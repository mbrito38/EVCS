<section class="bg-white w-full flex justify-center">
	<div class="container w-full flex-col items-center tablet_only:pt-10 pt-20 tablet_only:pb-[70px] pb-[100px]">
		<h2 class="text-center">
			Latest News
		</h2>
		<div class="grid tablet:grid-cols-2 laptop:flex justify-between gap-x-5 gap-y-5 w-full tablet_only:mt-10 mt-[72px] tablet_only:mb-[50px] mb-14">
			<NewsCard
				header_text="“A future without petrol bills”: Labor…"
				img_url="/img/PlaceholderImage-1.png"
				minute_read={5}
			/>
			<NewsCard
				header_text="Which electric car delivers the best…"
				img_url="/img/PlaceholderImage-2.png"
				minute_read={5}
			/>
			<NewsCard
				header_text="Tesla dominates first quarter EV sales in…"
				img_url="/img/PlaceholderImage.png"
				minute_read={5}
			/>
		</div>
		<button class="button-1">
			Go to newsfeed
		</button>
	</div>
</section>

<script>
	import NewsCard from '../Card/NewsCard.svelte';
</script>
