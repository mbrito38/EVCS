<svelte:head>
	<title>Discussion Board - EV Car Sales</title>
</svelte:head>

<div class="w-full flex items-center flex-col">
    <section class="w-full flex justify-center bg-white">
        <div class="container flex flex-col gap-y-6 items-center pt-12 pb-12 desktop:pt-20 desktop:pb-15">
            <h1 class="font-bold text-center">
                Discussion Board
            </h1>
            <div class="flex justify-center">
                <MainDropdown header="Menu" />
            </div>
        </div>
    </section>
    <section class="w-full flex justify-center">
        <div class="container w-full flex-col items-center pt-[50px] pb-[70px] desktop:pt-20 desktop:pb-15">
            <h2 class="text-center">
                Trending Discussions
            </h2>
            <div class="grid tablet:grid-cols-2 laptop:flex justify-between gap-x-5 gap-y-5 w-full mt-10 mb-8">
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
            <SolidButton title="Load More" class="mt-5 !px-[30px] !leading-[26px]" />
        </div>
    </section>
    <section class="w-full flex justify-center bg-white">
        <div class="container w-full flex-col items-center pt-[50px] pb-[70px] desktop:pt-20 desktop:pb-15">
            <h2 class="text-center">
                Category X
            </h2>
            <div class="grid tablet:grid-cols-2 laptop:flex justify-between gap-x-5 gap-y-5 w-full mt-10 mb-8">
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
            <SolidButton title="Load More" class="mt-5 !px-[30px] !leading-[26px]" />
        </div>
    </section>
    <section class="w-full flex justify-center">
        <div class="container w-full flex-col items-center pt-[50px] pb-[70px] desktop:pt-20 desktop:pb-15">
            <h2 class="text-center">
                Category Y
            </h2>
            <div class="grid tablet:grid-cols-2 laptop:flex justify-between gap-x-5 gap-y-5 w-full mt-10 mb-8">
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
            <SolidButton title="Load More" class="mt-5 !px-[30px] !leading-[26px]" />
        </div>
    </section>
    <VibrantSection header="Start a new discussion">
        <SolidButton title="Create an account" class="border-2 border-solid border-white !px-[30px] !leading-[26px]" />
        <SolidButton title="Login" class="border-2 border-solid border-white !px-[30px] !leading-[26px]" />
    </VibrantSection>
</div>

<script lang="ts">
	import VibrantSection from "$lib/components/Templates/VibrantSection.svelte";
    import DiscussionCard from "$lib/components/Card/DiscussionCard.svelte";
    import SolidButton from "$lib/components/Button/SolidButton.svelte";
    import MainDropdown from "$lib/components/Dropdown/MainDropdown.svelte";
</script>