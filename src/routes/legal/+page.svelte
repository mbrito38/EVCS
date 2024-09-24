<svelte:head>
	<title>Legal - EV Car Sales</title>
</svelte:head>

<div class="w-full flex items-center flex-col">
    <section class="bg-white w-full">
        <div class="container flex flex-col gap-y-5 laptop:gap-y-6 item-section pt-10 pb-10 laptop:pt-15 laptop:pb-[70px] desktop:pt-15 desktop:pb-[100px]">
            <h1 class="font-bold text-center">
                Legal
            </h1>
            <h4 class="font-semibold text-center text-[19px]">
                Learn more about the specifics of EV Car Sales on this page.
            </h4>
            <div>
                <div class="laptop:flex laptop:flex-wrap grid tablet:grid-cols-2 justify-center gap-6 w-full mt-[18px] mb-[18px]">
                    <InfoCard
                        header_text="Terms and Conditions"
                        img_url="/img/PlaceholderImage-1.png"
                        img_alt="Terms and Conditions"
                        class="laptop_only:basis-[30%]"
                    />
                    <InfoCard
                        header_text="Privacy Policy"
                        img_url="/img/PlaceholderImage-2.png"
                        img_alt="Privacy Policy"
                        class="laptop_only:basis-[30%]"
                    />
                    <InfoCard
                        header_text="Copyright"
                        img_url="/img/PlaceholderImage-3.png"
                        img_alt="Copyright"
                        class="laptop_only:basis-[30%]"
                    />
                    <InfoCard
                        header_text="Cookie Settings"
                        img_url="/img/PlaceholderImage-1.png"
                        img_alt="Cookie Settings"
                        class="laptop_only:basis-[30%]"
                    />
                    <InfoCard
                        header_text="Cookie Policy"
                        img_url="/img/PlaceholderImage-2.png"
                        img_alt="Cookie Policy"
                        class="laptop_only:basis-[30%]"
                    />
                </div>
            </div>
        </div>
    </section>
    <section class="w-full">
        <div class="container flex flex-col gap-y-6 item-section pt-8 pb-8">
            <div class="grid tablet:grid-cols-2 laptop:flex justify-center gap-8 w-full mt-[18px] mb-[18px]">
                <HelpCard
                    header_text="About Us"
                    body_text="Learn about the first large scale platform for discussing,buying and selling EV Cars!"
                    button_text="About Us"
                />
                <HelpCard
                    header_text="Browse Our Range"
                    body_text="Explore the range of electric vehicles on our global buy-and-sell marketplace."
                    button_text="Browse"
                />
            </div>
        </div>
    </section>
</div>

<script lang="ts">
    import InfoCard from "$lib/components/Card/InfoCard.svelte";
    import HelpCard from "$lib/components/Card/HelpCard.svelte";
</script>

<style lang="postcss" scoped>
    .item-section {
        @apply mx-auto;
    }
</style>