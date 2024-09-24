<svelte:head>
	<title>News & Videos - EV Car Sales</title>
</svelte:head>

<div class="w-full flex items-center flex-col">
    <section class="w-full flex justify-center bg-white">
        <div class="container w-full flex-col gap-y-6 items-center pt-12 pb-12 desktop:pt-15 desktop:pb-15">
            <h1 class="font-bold text-center text-primaryfontcolor">News & Videos</h1>
            <div class="flex justify-between w-full">
                <LocationDropdown />
                <Search />
            </div>
        </div>
    </section>
    <FeedGrid header="Latest News" >
        <NewsCard img_url="/img/demo.jpg" class="basis-[48%]" header_text="Ford to cut 3,000 jobs in pivot to electric..." />
        <NewsCard img_url="/img/demo.jpg" class="basis-[48%]" header_text="Genesis lifts veil on pricing and specs…" />
        <NewsCard img_url="/img/demo.jpg" class="hidden laptop:flex" header_text="Ford to cut 3,000 jobs in pivot to electric..." />
        <NewsCard img_url="/img/demo.jpg" class="col-span-full" mode="long" header_text="High-set Subaru Solterra electric SUV to arrive in 2023" />
        <NewsCard img_url="/img/demo.jpg" class="col-span-full flex-row-reverse" mode="long" header_text="BMW secures “CO2-reduced steel” supply from H2 Green Steel" />
    </FeedGrid>
	<VibrantSection header="Customise your newsfeed" >
        <SolidButton title="Create an account" class="border-2 border-solid border-white" />
		<SolidButton title="Login" class="border-2 border-solid border-white" />
    </VibrantSection>
    <FeedGrid header="Opinion Pieces" >
        <NewsCard img_url="/img/demo.jpg" class="basis-[48%]" header_text="Ford to cut 3,000 jobs in pivot to electric..." />
        <NewsCard img_url="/img/demo.jpg" class="basis-[48%]" header_text="Genesis lifts veil on pricing and specs…" />
        <NewsCard img_url="/img/demo.jpg" class="hidden laptop:flex" header_text="Ford to cut 3,000 jobs in pivot to electric..." />
        <NewsCard img_url="/img/demo.jpg" class="col-span-full" mode="long" header_text="High-set Subaru Solterra electric SUV to arrive in 2023" />
        <NewsCard img_url="/img/demo.jpg" class="col-span-full flex-row-reverse" mode="long" header_text="BMW secures “CO2-reduced steel” supply from H2 Green Steel" />
    </FeedGrid>
    <FeedGrid header="Government News" >
        <NewsCard img_url="/img/demo.jpg" class="basis-[48%]" header_text="Ford to cut 3,000 jobs in pivot to electric..." />
        <NewsCard img_url="/img/demo.jpg" class="basis-[48%]" header_text="Genesis lifts veil on pricing and specs…" />
        <NewsCard img_url="/img/demo.jpg" class="hidden laptop:flex" header_text="Ford to cut 3,000 jobs in pivot to electric..." />
        <NewsCard img_url="/img/demo.jpg" class="col-span-full" mode="long" header_text="High-set Subaru Solterra electric SUV to arrive in 2023" />
        <NewsCard img_url="/img/demo.jpg" class="col-span-full flex-row-reverse" mode="long" header_text="BMW secures “CO2-reduced steel” supply from H2 Green Steel" />
    </FeedGrid>
	<VibrantSection header="Explore more topics" button_holder_classes="gap-x-12" mode="inverted" >
        <SolidButton title="Manufacturing" class="!px-[30px] !py-4 !leading-[26px]" />
		<SolidButton title="Development" class="!px-[30px] !py-4 !leading-[26px]" />
		<SolidButton title="Charging infrastructure" class="!px-[30px] !py-4 !leading-[26px]" />
		<SolidButton title="Batteries" class="!px-[30px] !py-4 !leading-[26px]" />
        <SolidButton title="Manufacturing" class="!px-[30px] !py-4 !leading-[26px]" />
		<SolidButton title="Policy" class="!px-[30px] !py-4 !leading-[26px]" />
		<SolidButton title="Charging infrastructure" class="!px-[30px] !py-4 !leading-[26px]" />
    </VibrantSection>
	<VibrantSection header="Customise your newsfeed" >
        <SolidButton title="Create an account" class="border-2 border-solid border-white !px-[30px] !py-4 !leading-[26px]" />
		<SolidButton title="Login" class="border-2 border-solid border-white !px-[30px] !py-4 !leading-[26px]" />
    </VibrantSection>
</div>

<script>
	import LocationDropdown from "$lib/components/Dropdown/LocationDropdown.svelte";
	import Search from "$lib/components/Shared/Search.svelte";
	import FeedGrid from "$lib/components/Templates/FeedGrid.svelte";
	import NewsCard from "$lib/components/Card/NewsCard.svelte";
	import VibrantSection from "$lib/components/Templates/VibrantSection.svelte";
	import SolidButton from "$lib/components/Button/SolidButton.svelte";
</script>
