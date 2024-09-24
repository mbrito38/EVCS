<script lang="ts">
	import MoreDetails from "$lib/components/Research/MoreDetails.svelte";
	import MoreFeatures from "$lib/components/Research/MoreFeatures.svelte";

    export let detail_data: any = null;

    let currentStatus = "details";

    const selectTab = (tab: string) => {
        currentStatus = tab;
    }
</script>

<section class="w-full flex justify-center bg-white">
    <div class="container flex flex-col gap-y-[30px] laptop:mt-[30px]">
        <div class="flex justify-start laptop:justify-center">
            <h3 class="font-semibold text-2xl leading-[36px] text-[#022F02]">
                More Details
            </h3>
        </div>

        <div class="flex flex-col">
            <div class="flex">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                    class="w-full font-semibold text-lg leading-[26px] text-center cursor-pointer"
                    on:click={() => selectTab("details")}
                >
                    <div class="pb-2.5 h-16 tablet:h-fit">
                        Details
                    </div>

                    {#if currentStatus == "details"}
                        <div class="border-solid border-b-2 border-b-[#022F02] mx-4" />
                    {:else}
                        <div class="border-solid border-b-2 border-b-white mx-4" />
                    {/if}
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                    class="w-full font-semibold text-lg leading-[26px] text-center cursor-pointer"
                    on:click={() => selectTab("features")}
                >
                    <div class="pb-2.5 h-16 tablet:h-fit">
                        Features & Specification
                    </div>

                    {#if currentStatus == "features"}
                        <div class="border-solid border-b-2 border-b-[#022F02] mx-4" />
                    {:else}
                        <div class="border-solid border-b-2 border-b-white mx-4" />
                    {/if}
                </div>
            </div>

            <div class="bg-[#F6F7F5] rounded-3xl pt-[30px] laptop:pt-10 pb-15">
                {#if currentStatus == "details"}
                    <MoreDetails detail_data={detail_data} />
                {:else if currentStatus == "features"}
                    <MoreFeatures detail_data={detail_data} />
                {/if}
            </div>
        </div>
    </div>
</section>