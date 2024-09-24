<div class="w-full flex items-center flex-col">
    <section class="bg-white w-full">
        <div class="container flex flex-col gap-y-6 item-section pt-12 pb-12 desktop:pt-20 desktop:pb-15">
            <div class="flex">
                <img src="/img/halley.jpeg" class="avatar" alt="" />
                <div class="flex flex-col ml-8">
                    <h1 class="font-bold">
                        John S
                    </h1>
                    <p class="font-semibold">
                        Melbourne, VIC
                    </p>
                </div>
            </div>
            <div class="font-medium text-base text-warm_grey">
                I am John "S", S as in an S Tier Electric Vehicles enthusiast! I have been attending conferences since the first EV was launched and am now a Climate Scientist researching new ways to reduce emissions.
            </div>
            <div class="flex flex-col-reverse gap-y-6 justify-between desktop:flex-row">
                <div class="flex gap-8 my-auto">
                    <img src="/img/icons/FacebookBW.svg" class="social-icon" alt="" />
                    <img src="/img/icons/InstagramBW.svg" class="social-icon" alt="" />
                    <img src="/img/icons/LinkedInBW.svg" class="social-icon" alt="" />
                </div>
                <div class="flex gap-x-3 justify-between tablet:justify-start laptop:justify-start desktop:justify-start">
                    <SolidButton title="Send Message" class="!text-xl !px-8 !py-3" />
                    <div class="flex gap-x-3 items-center">
                        <img src="/img/icons/share-with-bg.svg" class="tool-icon" alt="" />
                        <img src="/img/icons/more-with-bg.svg" class="tool-icon" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="w-full">
        <div class="container flex flex-col item-section pt-12 pb-12 desktop:pt-20 desktop:pb-15">
            <h2>John's Listings</h2>
            <div class="grid tablet:grid-cols-2 laptop:flex justify-start gap-x-5 gap-y-5 w-full mt-10 tablet:mt-[72px] mb-8">
                <ListingCard
                    car_text="Audie-Tron 2020"
                    price_text="$32,000"
                    img_url="/img/demo.jpg"
                    client_url="/img/halley.jpeg"
                />
                <ListingCard
                    car_text="Audie-Tron 2020"
                    price_text="$32,000"
                    img_url="/img/demo.jpg"
                    client_url="/img/halley.jpeg"
                />
            </div>
        </div>
    </section>
    <section class="bg-white w-full">
        <div class="container flex flex-col item-section pt-12 pb-12 desktop:pt-20 desktop:pb-15">
            <h2>John's Listings</h2>
            <div class="flex flex-wrap gap-8 w-full inter-section">
                <ListingTag title="Electric Cars" />
                <ListingTag title="EV News" />
                <ListingTag title="Audi" />
                <ListingTag title="Tesla" />
                <ListingTag title="Market Trends" />
            </div>
        </div>
    </section>
    <section class="w-full">
        <div class="container flex flex-col item-section pt-12 pb-12 desktop:pt-20 desktop:pb-15">
            <h2>John's Garage</h2>
            <div class="grid tablet:grid-cols-2 laptop:flex justify-start gap-x-5 gap-y-5 w-full mt-10 laptop:mt-[72px] mb-8">
                <FavouriteCard
                    header_text="2022 Tesla Model S Plaid Tri Motor AWD"
                    img_url="/img/demo.jpg"
                    body_text="A permanent magnet synchronous reluctance motor Liquid-cooled with variable frequency drive"
                    button_text="My EVs"
                />
                <FavouriteCard
                    header_text="2021 Tesla Model 3 Performance AWD"
                    img_url="/img/demo.jpg"
                    body_text="A permanent magnet synchronous reluctance motor Liquid-cooled with variable frequency drive"
                    button_text="My Wishlist"
                />
                <FavouriteCard
                    header_text="2021 Tesla Model 3 Long Range AWD"
                    img_url="/img/demo.jpg"
                    body_text="Overhang front / rear - 929 / 1081 mm Optional rear-facing child seat available (seats up to two children)"
                    button_text="My Wishlist"
                />
            </div>
        </div>
    </section>
</div>

<script lang="ts">
    import ListingCard from "$lib/components/Card/ListingCard.svelte";
    import FavouriteCard from "$lib/components/Card/FavouriteCard.svelte";
    import ListingTag from "$lib/components/Badge/ListingTag.svelte";
    import SolidButton from "$lib/components/Button/SolidButton.svelte";
</script>

<style lang="postcss" scoped>
    .item-section {
        margin-right: auto;
        margin-left: auto;
    }
    .inter-section {
        margin-top: 40px;
        margin-bottom: 40px;
    }
    .avatar {
        width: 96px;
        height: 96px;
        border-radius: 50%;
    }
    .social-icon {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }
</style>