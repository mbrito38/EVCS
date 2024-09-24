<svelte:head>
	<title>Our Partners - EV Car Sales</title>
</svelte:head>

<div class="w-full flex items-center flex-col">
    <section class="bg-white w-full">
        <div class="container flex flex-col gap-y-6 item-section pt-12 pb-12 desktop:pt-20 desktop:pb-15">
            <h1 class="font-bold text-center">
                Our Partners
            </h1>
            <div class="flex justify-center mt-4 gap-x-24 gap-y-[30px] flex-col laptop:flex-row items-center">
                <MainDropdown />
                <Badge title="Melbourne, VIC 3000" />
            </div>
            <div class="grid tablet:grid-cols-2 laptop:flex desktop:grid desktop:grid-cols-3 gap-y-5 justify-between gap-x-6 w-full mt-10 laptop:mt-[72px] mb-8">
                <ReviewCard name="Partner’s Business Name" img_url="/img/PlaceholderImage-1.png" rating={4} />
                <ReviewCard name="Partner’s Business Name" img_url="/img/PlaceholderImage-2.png" rating={4} />
                <ReviewCard name="Partner’s Business Name" img_url="/img/PlaceholderImage.png" rating={4} />
                <ReviewCard name="Partner’s Business Name" img_url="/img/PlaceholderImage.png" rating={4} />
                <ReviewCard name="Partner’s Business Name" img_url="/img/PlaceholderImage.png" rating={4} />
                <ReviewCard name="Partner’s Business Name" img_url="/img/PlaceholderImage.png" rating={4} />
            </div>
            <div class="flex justify-center">
                <SolidButton title="Load More" />
            </div>
        </div>
    </section>
    <CTASection disable_our_partners={true} />
</div>

<script lang="ts">
    import MainDropdown from "$lib/components/Dropdown/MainDropdown.svelte";
    import Badge from "$lib/components/Badge/ListingTag.svelte";
    import ReviewCard from "$lib/components/Card/ReviewCard.svelte";
    import SolidButton from "$lib/components/Button/SolidButton.svelte";
    import CTASection from "$lib/components/Templates/CTASection.svelte";
</script>

<style lang="postcss" scoped>
    .item-section {
        @apply mx-auto;
    }
</style>