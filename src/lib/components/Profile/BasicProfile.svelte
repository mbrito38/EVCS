<section class="w-full flex justify-center bg-white">
    <div class="container flex flex-col items-center pb-12 desktop:pb-15">
        <div class="flex flex-col laptop:flex-row gap-6 w-full">
            <div class="w-full flex flex-col justify-center items-center gap-y-10">
                <div class="flex flex-col gap-y-5 items-center">
                    <img class="w-36 h-36 rounded-full" src="/img/halley.jpeg" alt="profile" />
                    <div class="font-bold text-sm text-vibrant_green cursor-pointer hover:opacity-80">
                        Change profile photo
                    </div>
                </div>
                <div class="hidden justify-center gap-x-4 tablet:gap-x-6 laptop:grid grid-cols-3 laptop:w-[170px] desktop:w-full gap-y-9 desktop:flex desktop:gap-x-12">
                    <img class="h-8" src="/img/icons/Facebook.svg" alt="Facebook" />
                    <img class="h-8" src="/img/icons/Instagram.svg" alt="Instagram" />
                    <img class="h-8" src="/img/icons/Twitter.svg" alt="Twitter" />
                    <img class="h-8" src="/img/icons/YouTube.svg" alt="Youtube" />
                    <img class="h-8" src="/img/icons/TikTok.svg" alt="TikTok" />
                    <img class="h-8" src="/img/LinkedIn.svg" alt="LinkedIn" />
                </div>
                <div class="hidden laptop:flex justify-center">
                    <OutlineButton title="Add Social Media" />
                </div>
                <div class="hidden laptop:flex justify-center gap-6">
                    <img src="/img/fill-checkbox.svg" alt="Social Media" />
                    <p class="font-semibold my-auto">
                        Display social media links on my profile
                    </p>
                </div>
            </div>

            <div class="w-full max-w-[376px] mx-auto laptop:max-w-full laptop:mx-0 border-solid border-t-1 border-b-1 border-primaryfontcolor h-fit">
                <div class="flex gap-x-10">
                    <div class="min-w-[80px] laptop:min-w-[220px] pt-5 pb-5 font-semibold text-base tablet:text-xl">Name</div>
                    <div class="border-solid border-b-1 border-primaryfontcolor w-full pt-5 pb-5 font-medium text-sm tablet:text-base">John</div>
                </div>

                <div class="flex gap-x-10">
                    <div class="min-w-[80px] laptop:min-w-[220px] pt-5 pb-5 font-semibold text-base tablet:text-xl">Surname</div>
                    <div class="border-solid border-b-1 border-primaryfontcolor w-full pt-5 pb-5 font-medium text-sm tablet:text-base">Smith</div>
                </div>

                <div class="flex gap-x-10">
                    <div class="min-w-[80px] laptop:min-w-[220px] pt-5 pb-5 font-semibold text-base tablet:text-xl">Location</div>
                    <div class="border-solid border-b-1 border-primaryfontcolor w-full pt-5 pb-5 font-medium text-sm tablet:text-base">Melbourne, VIC</div>
                </div>

                <div class="flex gap-x-10">
                    <div class="min-w-[80px] laptop:min-w-[220px] pt-5 pb-5 font-semibold text-base tablet:text-xl">Bio</div>
                    <div class="border-solid border-b-1 border-primaryfontcolor w-full pt-5 pb-5 font-medium text-sm tablet:text-base">My name is John Smith, I am a car enthusiast and yet at the same time... Also an enviromnent enthusiast. I drive Electric Vehicles in order to maintain our ecosystems and reduce my emissions and work as a biology teacher.</div>
                </div>

                <div class="flex gap-x-10">
                    <div class="min-w-[80px] laptop:min-w-[220px] pt-5 pb-5 font-semibold text-base tablet:text-xl">Email</div>
                    <div class="border-solid border-b-1 border-primaryfontcolor w-full pt-5 pb-5 font-medium text-sm tablet:text-base">johnsmith@example.com</div>
                </div>

                <div class="flex gap-x-10">
                    <div class="min-w-[80px] laptop:min-w-[220px] pt-5 pb-5 font-semibold text-base tablet:text-xl">Phone</div>
                    <div class="w-full pt-5 pb-5 font-medium text-sm tablet:text-base">04XX XXX XXX</div>
                </div>
            </div>

            <div class="w-full max-w-[376px] mx-auto flex flex-col gap-y-10 mt-4 laptop:hidden">
                <div class="flex justify-center gap-x-4 tablet:gap-x-6 desktop:gap-x-12 laptop:hidden">
                    <img class="h-8" src="/img/icons/Facebook.svg" alt="Facebook" />
                    <img class="h-8" src="/img/icons/Instagram.svg" alt="Instagram" />
                    <img class="h-8" src="/img/icons/Twitter.svg" alt="Twitter" />
                    <img class="h-8" src="/img/icons/YouTube.svg" alt="Youtube" />
                    <img class="h-8" src="/img/icons/TikTok.svg" alt="TikTok" />
                    <img class="h-8" src="/img/LinkedIn.svg" alt="LinkedIn" />
                </div>
                <div class="flex justify-center laptop:hidden">
                    <OutlineButton title="Add Social Media" class="!px-[30px]" />
                </div>
            </div>

            <div class="flex gap-6 justify-center laptop:hidden">
                <img src="/img/fill-checkbox.svg" alt="Social Media" />
                <p class="font-semibold my-auto">
                    Display social media links on my profile
                </p>
            </div>
        </div>
        <div class="flex justify-between w-full mt-12 laptop:mt-24">
            <SolidButton title="Discard" class="!text-xl !px-[30px]" />
            <SolidButton title="Save" class="!text-xl !px-[30px]" />
        </div>
    </div>
</section>

<script lang="ts">
    import SolidButton from "$lib/components/Button/SolidButton.svelte";
    import OutlineButton from "$lib/components/Button/OutlineButton.svelte";
</script>