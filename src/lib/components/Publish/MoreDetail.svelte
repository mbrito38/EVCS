<div class="flex flex-col gap-y-8">
    <h3 class="font-semibold {headerclasses}">
        More Details
    </h3>

    <div class="flex flex-col">
        <div class="flex w-full px-6">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <h4
                class="font-semibold basis-[25%] text-center cursor-pointer pb-2.5 {currentTab === 'details' ? 'border-b-2 border-solid border-primaryfontcolor' : ''}"
                on:click={() => selectTab('details')}
            >
                Details
            </h4>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <h4
                class="font-semibold basis-[50%] text-center cursor-pointer pb-2.5 {currentTab === 'features' ? 'border-b-2 border-solid border-primaryfontcolor' : ''}"
                on:click={() => selectTab('features')}
            >
                Features & Specifications
            </h4>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <h4
                class="font-semibold basis-[25%] text-center cursor-pointer pb-2.5 {currentTab === 'options' ? 'border-b-2 border-solid border-primaryfontcolor' : ''}"
                on:click={() => selectTab('options')}
            >
                Options
            </h4>
        </div>
        <div class="w-full detail-card py-9 rounded-3xl">
            {#if currentTab === "details"}
                <div class="flex flex-col gap-y-3">
                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            Vehicle*
                        </div>
                        <input class="w-[214px] input-1 text-warm_grey !text-xs !font-medium !px-4 !py-1.5 !border-[#022F02]" value="Tesla Model X" />
                    </div>

                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            Price*
                        </div>
                        <input class="w-[214px] input-1 text-warm_grey !text-xs !font-medium !px-4 !py-1.5 !border-[#022F02]" value="$40,000" />
                    </div>

                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            Odometer*
                        </div>
                        <input class="w-[214px] input-1 text-warm_grey !text-xs !font-medium !px-4 !py-1.5 !border-[#022F02]" value="XXXXXX" />
                    </div>

                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            Color*
                        </div>
                        <input class="w-[214px] input-1 text-warm_grey !text-xs !font-medium !px-4 !py-1.5 !border-[#022F02]" value="White" />
                    </div>

                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            Interior
                        </div>
                        <input class="w-[214px] input-1 text-warm_grey !text-xs !font-medium !px-4 !py-1.5 !border-[#022F02]" value="White" />
                    </div>

                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            Transmission*
                        </div>
                        <input class="w-[214px] input-1 text-warm_grey !text-xs !font-medium !px-4 !py-1.5 !border-[#022F02]" value="Automatic" />
                    </div>

                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            Body*
                        </div>
                        <input class="w-[214px] input-1 text-warm_grey !text-xs !font-medium !px-4 !py-1.5 !border-[#022F02]" value="Sedan" />
                    </div>

                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            Electric Motor
                        </div>
                        <input class="w-[214px] input-1 text-warm_grey !text-xs !font-medium !px-4 !py-1.5 !border-[#022F02]" value="Dual Motor AWD 60D" />
                    </div>

                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            VIN*
                        </div>
                        <input class="w-[214px] input-1 text-warm_grey !text-xs !font-medium !px-4 !py-1.5 !border-[#022F02]" value="XXXXXXXXX" />
                    </div>

                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            Registration
                        </div>
                        <input class="w-[214px] input-1 text-warm_grey !text-xs !font-medium !px-4 !py-1.5 !border-[#022F02]" value="XXXXXX" />
                    </div>

                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            Build date
                        </div>
                        <input class="w-[214px] input-1 text-warm_grey !text-xs !font-medium !px-4 !py-1.5 !border-[#022F02]" value="November 2018" />
                    </div>

                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            Compliance Date
                        </div>
                        <input class="w-[214px] input-1 text-warm_grey !text-xs !font-medium !px-4 !py-1.5 !border-[#022F02]" value="MM YYYY" />
                    </div>

                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            Model Year*
                        </div>
                        <input class="w-[214px] input-1 text-warm_grey !text-xs !font-medium !px-4 !py-1.5 !border-[#022F02]" value="2018" />
                    </div>

                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            Stock
                        </div>
                        <input class="w-[214px] input-1 text-warm_grey !text-xs !font-medium !px-4 !py-1.5 !border-[#022F02]" value="XXXXX" />
                    </div>

                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            Range per charge
                        </div>
                        <input class="w-[214px] input-1 text-warm_grey !text-xs !font-medium !px-4 !py-1.5 !border-[#022F02]" value="400 km" />
                    </div>

                    <div class="flex justify-center">
                        <div class="font-bold text-xs text-warm_grey min-w-[250px] text-left my-auto">
                            Safety Rating
                        </div>
                        <div class="flex gap-2 my-auto w-[214px] py-3">
                            <img class="rate" src="/img/star-empty.svg" alt="star empty" />
                            <img class="rate" src="/img/star-empty.svg" alt="star empty" />
                            <img class="rate" src="/img/star-empty.svg" alt="star empty" />
                            <img class="rate" src="/img/star-empty.svg" alt="star empty" />
                            <img class="rate rate-disabled" src="/img/star-empty.svg" alt="star empty" />
                        </div>
                    </div>
                </div>
            {:else if currentTab === "features"}
                <div class="flex flex-col gap-y6"></div>
            {:else}
                <div class="flex flex-col gap-y6"></div>
            {/if}
        </div>
    </div>
</div>

<script lang="ts">
    let currentTab = "details";

    const selectTab = (tab: string) => {
        currentTab = tab;
    };

    export let headerclasses : string = '';
</script>

<style lang="postcss" scoped>
    .detail-card {
        background: #F6F7F5;
        padding-left: 50px;
        padding-right: 50px;
    }
    .rate {
        @apply w-5 h-5;
    }
    .rate-disabled {
        @apply opacity-40;
    }
</style>