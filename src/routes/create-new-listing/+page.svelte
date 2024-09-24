<div class="w-full flex items-center flex-col bg-white">
    <h1 class="text-center w-full mt-12 mb-7">New Listing</h1>
    <div class="flex items-center w-full container laptop:w-[1150px] justify-between laptop:justify-end gap-x-[50px]">
        <span class="flex gap-x-3 items-center text-base font-medium text-warm_grey">
            <Checkbox />Saved as Draft
        </span>
        <SolidButton title="Publish" class="!px-[30px] !py-4 !leading-[26px]" />
    </div>
    <section class="w-full flex justify-center bg-white">
        <div class="container desktop:w-[1133px] flex flex-col items-center pt-9 pb-12 desktop:pb-15">
            <div class="flex flex-col gap-y-15 left-section h-full w-full">
                <div class="flex flex-col laptop:flex-row gap-y-10 border-none laptop:border-solid border-b-1 laptop:pb-12 w-full justify-between border-[#015601]">
                    <div class="flex gap-y-5 gap-x-5 items-center">
                        <img class="main-image" src="/img/halley.jpeg" alt="car" />
                        <div class="h-full gap-x-3 grid grid-cols-2 tablet:grid-cols-3 gap-y-4 tablet:gap-y-8">
                            <img class="sub-image" src="/img/halley.jpeg" alt="car" />
                            <img class="sub-image" src="/img/halley.jpeg" alt="car" />
                            <img class="sub-image" src="/img/halley.jpeg" alt="car" />
                            <img class="sub-image" src="/img/halley.jpeg" alt="car" />
                            <img class="sub-image" src="/img/halley.jpeg" alt="car" />
                            <img class="sub-image" src="/img/halley.jpeg" alt="car" />
                            <img class="sub-image" src="/img/halley.jpeg" alt="car" />
                            <img class="sub-image" src="/img/halley.jpeg" alt="car" />
                            <img class="sub-image" src="/img/halley.jpeg" alt="car" />
                            <img class="sub-image" src="/img/halley.jpeg" alt="car" />
                            <img class="sub-image" src="/img/halley.jpeg" alt="car" />
                            <img class="sub-image" src="/img/halley.jpeg" alt="car" />
                        </div>
                    </div>
                    <div class="flex flex-row flex-wrap gap-x-7 items-center laptop:items-start laptop:flex-col">
                        <div class="flex gap-x-5">
                            <img class="avatar" src="/img/halley.jpeg" alt="avatar" />
                            <div class="text-base font-medium my-auto">
                                <span class="font-bold">John Smith</span> is selling
                            </div>
                        </div>
                        <h2 class="text-2xl font-semibold mt-5 tablet:mt-0 text-center tablet:text-start w-full tablet:w-fit laptop:mt-5">
                            Tesla Model X, 2021
                        </h2>
                        <div class="flex flex-col tablet:flex-row mt-5 gap-x-12 gap-y-8 items-center">
                            <input class="w-[180px] h-fit input-1" value="40000" />
                            <div class="flex gap-x-4 items-start" >
                                <img src="/img/icons/Stars.svg" alt="" class="relative top-2" />
                                <div class="laptop:flex flex-col laptop:w-[186px] text-xs" >
                                    Based on previous listings, we recommend
                                    <strong>$30,000 — $45,000</strong>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap tablet:flex-nowrap justify-between mt-16 gap-x-28 w-full laptop:flex-col laptop:w-[240px] laptop:mt-5 gap-y-6 border-y-1 py-12 laptop:py-0 border-y-[#015601] laptop:border-y-0">
                            <div class="flex gap-x-5 justify-between w-full" >
                                <button class="text-primaryfontcolor px-[30px] py-2.5 font-semibold rounded-[2rem] text-lg border-primaryfontcolor border-solid border-2 bg-site_bg_color">
                                    New
                                </button>
                                <SolidButton title="Used" class="!px-[30px] !py-4 !leading-[26px]" />
                            </div>
                            <input class="w-full h-fit input-1" value="Available Now" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-y-16 laptop:flex-row pt-4 pb-16 border-b-2 border-solid border-[#015601]">
                    <div class="flex flex-col flex-1 gap-y-5 laptop:pr-28 border-b-1 border-b-[#015601] laptop:border-b-0 pb-12 laptop:pb-0">
                        <div class="flex justify-between items-center" >
                            <h4>
                                Odometer
                            </h4>
                            <input class="h-fit input-1 w-[180px] placeholder:font-semibold placeholder:text-warm_grey" placeholder="XXXXXX" />
                        </div>
                        <div class="flex justify-between items-center" >
                            <h4>Range</h4>
                            <MainDropdown dropdownclass="!border-[#0D8200] border-1 !text-warm_grey !text-base" header="400km" />
                        </div>
                        <div class="flex justify-between items-center" >
                            <h4>Transmission</h4>
                            <MainDropdown dropdownclass="!border-[#0D8200] border-1 !text-warm_grey !text-base" header="Automatic" />
                        </div>
                        <div class="flex justify-between items-center" >
                            <h4>Body Type</h4>
                            <MainDropdown dropdownclass="!border-[#0D8200] border-1 !text-warm_grey !text-base" header="Sedan" />
                        </div>
                        <div class="flex justify-between items-center" >
                            <h4>Exterior Color</h4>
                            <MainDropdown dropdownclass="!border-[#0D8200] border-1 !text-warm_grey !text-base" header="White" />
                        </div>
                        <div class="flex justify-between items-center" >
                            <h4>Interior Color</h4>
                            <MainDropdown dropdownclass="!border-[#0D8200] border-1 !text-warm_grey !text-base" header="Brown" />
                        </div>
                    </div>
                    <div class="flex flex-col items-center laptop:items-start flex-1 gap-y-3 laptop:pl-28 laptop:border-l-2 border-solid border-[#015601] ">
                        <h3>
                            Options
                        </h3>
                        <p class="text-center laptop:text-start text-warm_grey">
                            Select all that apply. You can add more details in the Options tab below.
                        </p>
                        <div class="flex flex-col gap-y-8 mt-6" >
                            <button class="button-4 w-fit">
                                Extra Battery
                            </button>
                            <button class="button-4 w-fit">
                                Larger wheels
                            </button>
                            <button class="button-4 w-fit">
                                Extension cable
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-y-16 laptop:flex-row pt-4 pb-16 border-b-2 border-solid border-[#015601]">
                    <div class="flex flex-col items-center laptop:items-start flex-1 gap-y-5 laptop:pr-32 border-b-1 border-b-[#015601] laptop:border-b-0 pb-12 laptop:py-0">
                        <h2 class="text-center laptop:text-start" >
                            Location
                        </h2>
                        <input
                            class="rounded-[2rem] border-solid border-1 border-primaryfontcolor px-8 py-3 w-[326px] text-base font-medium"
                            value="Melbourne, VIC 3000"
                        />
                        <img class="mt-4" src="/img/map.png" alt="map">
                    </div>
                    <div class="flex flex-col items-center laptop:items-start flex-1 gap-y-5 laptop:pl-32 laptop:border-l-2 border-solid border-[#015601]">
                        <h2 class="text-center laptop:text-start">
                            EV Description
                        </h2>
                        <textarea
                            rows="9"
                            class="py-6 px-7 w-full border-1 border-solid border-[#707070] rounded-[1.75rem] text-base"
                            placeholder="What is the condition of the car? How old is it? Is there anything the buyer has to know about it?"
                        />
                    </div>
                </div>
                <MoreDetail headerclasses="w-full text-center" />
            </div>
            <div class="flex items-center w-full container laptop:w-[1150px] justify-between laptop:justify-center gap-x-[70px] mt-[70px]">
                <span class="flex gap-x-3 items-center text-base font-medium text-warm_grey">
                    <Checkbox />Saved as Draft
                </span>
                <SolidButton title="Publish" class="!px-[30px] !py-4 !leading-[26px]" />
            </div>
        </div>
    </section>
</div>

<script lang="ts">
	import MainDropdown from "$lib/components/Dropdown/MainDropdown.svelte";
	import Checkbox from "$lib/components/Button/Checkbox.svelte";
    import SolidButton from "$lib/components/Button/SolidButton.svelte";
    import MoreDetail from "$lib/components/Publish/MoreDetail.svelte";
</script>

<style lang="postcss" scoped>
    .description {
        @apply mb-0 laptop:mb-16;
    }
    .main-image {
        @apply w-[193px] h-full tablet:w-[364px] laptop:h-[343px] border-1 border-solid border-[#0D8200] rounded-[30px];
    }
    .sub-image {
        @apply flex-1 w-16 h-12 tablet:h-full border-1 border-solid border-[#0D8200] rounded-[15px];
        display: none;
        &:nth-child(-n+6) {
            display:inline;
        }
        @screen tablet {
            &:nth-child(-n+9) {
                display: inline;
            }
        }
        @screen laptop {
            &:nth-child(-n+12) {
                display: inline;
            }
        }
    }
	.avatar {
		@apply w-14 h-14 rounded-full;
	}
</style>