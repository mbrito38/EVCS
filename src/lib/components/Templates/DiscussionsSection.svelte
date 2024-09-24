<section class="w-full flex justify-center">
	<div class="container w-full flex-col items-center tablet_only:pt-10 pt-20 tablet_only:pb-[70px] pb-[100px]">
		<h2 class="text-center">
			Trending Discussions
		</h2>
		<div class="grid tablet:grid-cols-2 laptop:flex justify-between gap-x-5 gap-y-5 w-full tablet_only:mt-10 mt-[72px] tablet_only:mb-[50px] mb-14">
			<DiscussionCard
				header_text="Does anybody know a good DMV around Melbourne?"
				author_name="John Doe"
				date="15"
				body_text="So I came from the United States, Melbourne is a beautiful city however..."
			/>
			<DiscussionCard
				header_text="Where do I go to submit my car information?"
				author_name="Jane Smith"
				date="15"
				body_text="I have a car that I had for about two decades, I just came across this site..."
			/>
			<DiscussionCard
				header_text="How on earth do I disable the filter here?"
				author_name="Hakeem Robinson"
				date="15"
				body_text="So I was using the filters in order to search cars by the Tesla brand but..."
			/>
		</div>
		<button class="button-1">
			Go to discussions
		</button>
	</div>
</section>

<script lang="ts">
	import DiscussionCard from "$lib/components/Card/DiscussionCard.svelte";
</script>
