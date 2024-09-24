<section class="bg-white w-full flex justify-center">
	<div class="container w-full flex-col items-center tablet_only:pt-10 pt-20 tablet_only:pb-[70px] pb-[100px]">
		<h2 class="text-center">
			Research & Reviews
		</h2>
		<div class="grid tablet:grid-cols-2 laptop:flex gap-y-5 justify-between gap-x-6 w-full mt-[50px] tablet_only:mt-10 laptop:mt-[50px] desktop:mt-[72px] tablet_only:mb-[50px] mb-14">
			<ReviewCard
				name="Audi e-Tron S"
				img_url="/img/PlaceholderImage-1.png"
				rating={4}
			/>
			<ReviewCard
				name="Audi e-Tron S"
				img_url="/img/PlaceholderImage-2.png"
				rating={4}
			/>
			<ReviewCard
				name="Audi e-Tron S"
				img_url="/img/PlaceholderImage.png"
				rating={4}
			/>
		</div>
		<button class="button-1 mt-6">
			See all reviews
		</button>
	</div>
</section>

<script>
	import ReviewCard from "$lib/components/Card/ReviewCard.svelte";
</script>
