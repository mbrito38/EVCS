<div class="w-full flex items-center flex-col">
    <section class="w-full flex justify-center bg-white">
        <div class="container flex flex-col items-center pt-12 pb-12 desktop:pt-15 desktop:pb-[70px]">
            <h1 class="font-bold text-center">
                Our Partners
            </h1>

            <img class="mt-10 laptop:mt-15 w-full aspect-[5/2]" src="/img/demo.jpg" alt="partner" />

            <h2 class="font-bold mt-10 laptop:mt-12 text-left w-full">
                Rick's Springvale Motorheads
            </h2>

            <div class="flex gap-8 w-full items-start mt-6">
                <img src="/img/icons/Location.svg" alt="location" />
                <p class="my-auto text-[19px]">
                    125 Cools Street, Springvale 3171
                </p>
            </div>
            <div class="flex gap-8 w-full items-start mt-6">
                <img src="/img/phone.svg" alt="phone" />
                <p class="my-auto text-[19px]">
                    +61 491 570 006
                </p>
            </div>
            <div class="flex gap-8 w-full items-start mt-6">
                <img src="/img/website.svg" alt="location" />
                <p class="my-auto text-[19px] underline">
                    rickheads.com.au
                </p>
            </div>

            <div class="text-base mt-10 gap-y-4 flex flex-col text-[#3D4835]">
                <p>
                    Rick's Springvale Motorheads is a bustling automotive repair shop located in the heart of Springvale, a bustling suburban neighborhood. Founded by Rick, a certified mechanic with over 20 years of experience, the shop has become a go-to destination for car owners in the area who want high-quality repairs and maintenance services at affordable prices.
                </p>
                <p>
                    One of the things that sets Rick's Springvale Motorheads apart from other automotive repair shops is the shop's commitment to using only high-quality parts. Rick believes that using cheap, low-quality parts is a false economy, as they are more likely to break or fail prematurely. Instead, he sources parts from reputable manufacturers, ensuring that his customers' cars are always running at their best.
                </p>
            </div>

            <div class="flex flex-col gap-y-8 mt-[70px] laptop:mt-[100px] items-start w-full">
                <h3 class="font-semibold">
                    Recent Reviews
                </h3>
                <div class="grid tablet:grid-cols-2 laptop:flex justify-between gap-x-5 gap-y-5 w-full">
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
                <div class="flex flex-col laptop:flex-row items-center justify-center mt-6 gap-x-15 gap-y-12 w-full">
                    <SolidButton title="Load More" class="text-xl !px-[30px] !leading-[26px]" />
                    <SolidButton title="Write a Review" class="text-xl !px-[30px] !leading-[26px]" />
                </div>
            </div>
        </div>
    </section>
    <CTASection disable_our_partners={true} />
</div>

<script lang="ts">
    import CTASection from "$lib/components/Templates/CTASection.svelte";
    import DiscussionCard from "$lib/components/Card/DiscussionCard.svelte";
    import SolidButton from "$lib/components/Button/SolidButton.svelte";
</script>