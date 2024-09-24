<section id='{id}' class="w-full flex justify-center">
	<div class="container w-full flex-col items-center pt-20 tablet_only:pt-[50px] pb-15">
		<h2 class="text-center hidden laptop:block">
            Buy and Sell Electric Cars
        </h2>
		<div class="flex flex-col tablet:flex-row gap-y-6 gap-x-[30px] justify-center w-full tablet_only:mt-0 mt-[50px] tablet_only:mb-0 mb-8">
			<HelpCard
                header_text="Help me find an EV"
                body_text="Take our short quiz to help find the electric vehicles that suit your needs."
                button_text="Take the Quiz"
            />
			<HelpCard
                header_text="Browse Our Range"
                body_text="Explore the range of electric vehicles on our global buy-and-sell marketplace."
                button_text="Browse"
            />
		</div>
	</div>
</section>

<script>
	import HelpCard from "$lib/components/Card/HelpCard.svelte";
  export let id = "";
</script>
