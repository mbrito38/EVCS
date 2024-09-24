<section class="w-full flex justify-center" >
	<div class="container w-full flex-col items-center">
		<div class="flex flex-col desktop:flex-row justify-around gap-x-5 w-full my-12 laptop:px-20">
			<CTACard
				class= "{disable_our_partners ? 'hidden' : ''}"
				header_text="Our Partners"
				img_url="/img/MaintenanceImage.png"
				body_text="Our partners are EV Car Sales Certified businesses that work with electric cars and can help you with your needs."
				button_text="View our partners"
				button_link="/partners"
			/>
			<CTACard
				header_text="Become a Partner"
				img_url="/img/FinanceImage.png"
				body_text="Get involved in our partner program to receive great benefits for your business including higher traffic to your site."
				button_text="Join Program"
				button_link="/partnership-request"
			/>
		</div>
	</div>
</section>

<script lang="ts">
    import CTACard from "$lib/components/Card/CTACard.svelte";

	export let disable_our_partners : boolean = false;
</script>
