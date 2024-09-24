<div class="w-full flex items-center flex-col">
    <section class="w-full flex justify-center bg-white">
        <div class="container flex flex-col items-center pt-14 pb-12 desktop:pb-15">
            <div class="flex flex-col-reverse gap-y-16 laptop:flex-row items-center gap-x-8">
                <div class="flex flex-col gap-y-12 left-section h-full">
                    <MainDetail />
                    <MoreDetail />
                </div>
                <div class="flex flex-col gap-y-12 right-section h-full">
                    <SellerDetail />
                    <div class="flex flex-col gap-y-10">
                        <QuickFacts />
                        <Options />
                    </div>
                    <Location />
                </div>
            </div>
            <div class="flex tablet:gap-x-12 justify-between laptop:justify-center mt-[70px] w-full">
                <SolidButton title="Message Seller" class="pre_laptop:!px-6 pre_laptop:!py-3 laptop:!text-lg" />
                <div class="flex gap-x-2 tablet:gap-x-5 items-center">
                    <img src="/img/icons/save-with-bg.svg" class="social-icon" alt="" />
                    <img src="/img/icons/share-with-bg.svg" class="social-icon" alt="" />
                    <img src="/img/icons/more-with-bg.svg" class="social-icon" alt="" />
                </div>
            </div>
        </div>
    </section>
    <section class="w-full flex justify-center">
        <div class="w-full flex-col items-center pt-12 pb-12 desktop:pt-20 desktop:pb-15">
            <h3 class="text-center font-semibold">
                Similar EVs
            </h3>
            <Carousel>
                <PublishCard header_text="Tesla Model X" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px]" />
                <PublishCard header_text="Tesla Model X" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px]" />
                <PublishCard header_text="Tesla Model X" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px]" />
                <PublishCard header_text="Tesla Model X" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px]" />
                <PublishCard header_text="Tesla Model X" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px]" />
                <PublishCard header_text="Tesla Model X" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px]" />
                <PublishCard header_text="Tesla Model X" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px]" />
                <PublishCard header_text="Tesla Model X" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px]" />
            </Carousel>
        </div>
    </section>
</div>

<script lang="ts">
    import MainDetail from "$lib/components/Publish/MainDetail.svelte";
    import SellerDetail from "$lib/components/Publish/SellerDetail.svelte";
    import QuickFacts from "$lib/components/Publish/QuickFacts.svelte";
    import Options from "$lib/components/Publish/Options.svelte";
    import PublishCard from "$lib/components/Card/PublishCard.svelte";
    import Carousel from "$lib/components/Carousel/Carousel.svelte";
    import SolidButton from "$lib/components/Button/SolidButton.svelte";
    import Location from "$lib/components/Publish/Location.svelte";
    import MoreDetail from "$lib/components/Publish/MoreDetail.svelte";
</script>

<style lang="postcss" scoped>
    .left-section {
        @apply w-full laptop:w-[621px] desktop:w-[670px];
    }
    .right-section {
        @apply w-full laptop:w-[435px];
    }
</style>