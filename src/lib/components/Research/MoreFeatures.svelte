<script lang="ts">
    import { UNITS } from "$lib/utils/constants";
    export let detail_data: any = null;

    let isExpand = false;
    let activeItem = "";

    const expandFeature = () => {
        isExpand = !isExpand;
    };

    const selectItem = (item: string) => {
        if (item == activeItem) {
            activeItem = "";
        } else {
            activeItem = item;
        }
    };

    const formatFirstCaptial = (capitalString: string) => {
        return capitalString.charAt(0).toUpperCase() + capitalString.slice(1);
    };

    const formatUnit = (unit_data: string) => {
        return UNITS[unit_data];
    };
</script>

<div class="flex flex-col gap-y-[30px] items-center">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="px-[30px] py-4 border-2 border-solid border-[#1D3307] rounded-[27px] text-lg font-semibold text-[#022F02] cursor-pointer"
        on:click={expandFeature}
    >
        {isExpand ? 'Collapse All' : 'Expand All'}
    </div>

    <div class="w-full laptop:w-4/5 px-5 flex flex-col gap-y-1">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="bg-white hover:bg-gray-100 flex flex-col gap-y-5 px-8 py-5 cursor-pointer"
            on:click={() => selectItem("make-brand-model")}
        >
            <div class="flex justify-between gap-x-10">
                <div class="text-lg font-bold text-[#022F02]">
                    Brand, Price
                </div>

                {#if (isExpand && activeItem == "make-brand-model") || (!isExpand && activeItem == "make-brand-model") || (isExpand && activeItem !== "make-brand-model") || activeItem == "make-brand-model"}
                    <img class="transform rotate-180" src="/img/down-short-arrow.svg" alt="arrow" />
                {:else}
                    <img class="transform rotate-0" src="/img/down-short-arrow.svg" alt="arrow" />
                {/if}
            </div>

            {#if (isExpand && activeItem == "make-brand-model") || (!isExpand && activeItem == "make-brand-model") || (isExpand && activeItem !== "make-brand-model") || activeItem == "make-brand-model" }
                <div class="flex flex-col gap-y-4">
                    <div class="text-base font-semibold text-[#3D4835]">
                        {formatFirstCaptial(detail_data?.brand?.name ?? "")}
                    </div>

                    {#each detail_data?.price as price}
                        <div class="flex flex-col gap-y-2">
                            <div class="text-base font-semibold text-[#3D4835]">
                                {price?.quantity ?? ""} <span class="uppercase">{price?.unit ?? ""}</span>
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="bg-white hover:bg-gray-100 flex flex-col gap-y-5 px-8 py-5 cursor-pointer"
            on:click={() => selectItem("body-style")}
        >
            <div class="flex justify-between gap-x-10">
                <div class="text-lg font-bold text-[#022F02]">
                    Body Style, Volumes
                </div>

                {#if (isExpand && activeItem == "body-style") || (!isExpand && activeItem == "body-style") || (isExpand && activeItem !== "body-style") || activeItem == "body-style"}
                    <img class="transform rotate-180" src="/img/down-short-arrow.svg" alt="arrow" />
                {:else}
                    <img class="transform rotate-0" src="/img/down-short-arrow.svg" alt="arrow" />
                {/if}
            </div>

            {#if (isExpand && activeItem == "body-style") || (!isExpand && activeItem == "body-style") || (isExpand && activeItem !== "body-style") || activeItem == "body-style" }
                <div class="flex flex-col gap-y-4">
                    <div class="text-base font-semibold text-[#3D4835]">
                        {detail_data?.generalMechanicalInfo?.bodyStyle ?? ""}
                    </div>

                    {#each detail_data?.generalMechanicalInfo?.totalVolume as total_volume}
                        <div class="flex flex-col gap-y-2">
                            <div class="text-base font-semibold text-[#3D4835]">
                                {total_volume?.quantity ?? ""} {formatUnit(total_volume?.unit ?? "")}
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="bg-white hover:bg-gray-100 flex flex-col gap-y-5 px-8 py-5 cursor-pointer"
            on:click={() => selectItem("range")}
        >
            <div class="flex justify-between gap-x-10">
                <div class="text-lg font-bold text-[#022F02]">
                    Range (Fully Charged)
                </div>

                {#if (isExpand && activeItem == "range") || (!isExpand && activeItem == "range") || (isExpand && activeItem !== "range") || activeItem == "range"}
                    <img class="transform rotate-180" src="/img/down-short-arrow.svg" alt="arrow" />
                {:else}
                    <img class="transform rotate-0" src="/img/down-short-arrow.svg" alt="arrow" />
                {/if}
            </div>

            {#if (isExpand && activeItem == "range") || (!isExpand && activeItem == "range") || (isExpand && activeItem !== "range") || activeItem == "range" }
                <div class="laptop:grid grid-cols-3 hidden">
                    <div class="border-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                        Standard
                    </div>
                    <div class="border-r-1 border-b-1 border-t-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                        Quantity
                    </div>
                    <div class="border-r-1 border-b-1 border-t-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                        Unit
                    </div>
                    {#each detail_data?.drivingRange as driver_range}
                        <div class="border-l-1 border-b-1 border-r-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                            {driver_range?.standard ?? ""}
                        </div>
                        <div class="border-b-1 border-r-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                            {driver_range?.quantity ?? ""}
                        </div>
                        <div class="border-b-1 border-r-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                            {driver_range?.unit ?? ""}
                        </div>
                    {/each}
                </div>

                <div class="flex flex-col gap-y-4 laptop:hidden">
                    {#each detail_data?.drivingRange as driver_range}
                        <div class="flex flex-col gap-y-2">
                            <div class="text-base font-semibold text-[#3D4835]">
                                {driver_range?.standard ?? ""}
                            </div>
                            <div class="text-base font-semibold text-[#3D4835]">
                                {driver_range?.quantity ?? ""} <span class="uppercase">{driver_range?.unit ?? ""}</span>
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="bg-white hover:bg-gray-100 flex flex-col gap-y-5 px-8 py-5 cursor-pointer"
            on:click={() => selectItem("performance")}
        >
            <div class="flex justify-between gap-x-10">
                <div class="text-lg font-bold text-[#022F02]">
                    Performance
                </div>

                {#if (isExpand && activeItem == "performance") || (!isExpand && activeItem == "performance") || (isExpand && activeItem !== "performance") || activeItem == "performance"}
                    <img class="transform rotate-180" src="/img/down-short-arrow.svg" alt="arrow" />
                {:else}
                    <img class="transform rotate-0" src="/img/down-short-arrow.svg" alt="arrow" />
                {/if}
            </div>

            {#if (isExpand && activeItem == "performance") || (!isExpand && activeItem == "performance") || (isExpand && activeItem !== "performance") || activeItem == "performance" }
                <div class="flex flex-col gap-y-2">
                    <div class="text-base font-semibold text-[#3D4835]">
                        Acceleration 060Mph: {detail_data?.performance?.acceleration060Mph ?? ""}
                    </div>
                    <div class="text-base font-semibold text-[#3D4835]">
                        Acceleration 0100Kmh: {detail_data?.performance?.acceleration0100Kmh ?? ""}
                    </div>
                    <div class="text-base font-semibold text-[#3D4835]">
                        Acceleration 80120Kmh: {detail_data?.performance?.acceleration80120Kmh ?? ""}
                    </div>

                    {#each detail_data?.performance?.topSpeed as top_speed}
                        <div class="text-base font-semibold text-[#3D4835]">
                            Quantity: {top_speed?.quantity ?? ""} {formatUnit(top_speed?.unit ?? "")}
                        </div>
                    {/each}
                </div>
            {/if}
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="bg-white hover:bg-gray-100 flex flex-col gap-y-5 px-8 py-5 cursor-pointer"
            on:click={() => selectItem("charging-time")}
        >
            <div class="flex justify-between gap-x-10">
                <div class="text-lg font-bold text-[#022F02]">
                    Charging Time
                </div>

                {#if (isExpand && activeItem == "charging-time") || (!isExpand && activeItem == "charging-time") || (isExpand && activeItem !== "charging-time") || activeItem == "charging-time"}
                    <img class="transform rotate-180" src="/img/down-short-arrow.svg" alt="arrow" />
                {:else}
                    <img class="transform rotate-0" src="/img/down-short-arrow.svg" alt="arrow" />
                {/if}
            </div>

            {#if (isExpand && activeItem == "charging-time") || (!isExpand && activeItem == "charging-time") || (isExpand && activeItem !== "charging-time") || activeItem == "charging-time" }
                <div class="laptop:grid grid-cols-3 hidden">
                    <div class="border-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                        Battery Percent
                    </div>
                    <div class="border-r-1 border-b-1 border-t-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                        Estimated Time
                    </div>
                    <div class="border-r-1 border-b-1 border-t-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                        Type
                    </div>
                    {#each detail_data?.chargingTime as charger_time}
                        <div class="border-l-1 border-b-1 border-r-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                            {charger_time?.batteryPercent ?? ""}
                        </div>
                        <div class="border-b-1 border-r-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                            {charger_time?.estimatedTime ?? ""}
                        </div>
                        <div class="border-b-1 border-r-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                            {charger_time?.type ?? ""}
                        </div>
                    {/each}
                </div>

                <div class="flex flex-col gap-y-4 laptop:hidden">
                    {#each detail_data?.chargingTime as charger_time}
                        <div class="flex flex-col gap-y-2">
                            <div class="text-base font-semibold text-[#3D4835]">
                                Battery Percent: {charger_time?.batteryPercent ?? ""}
                            </div>
                            <div class="text-base font-semibold text-[#3D4835]">
                                Estimated Time: {charger_time?.estimatedTime ?? ""}
                            </div>
                            <div class="text-base font-semibold text-[#3D4835]">
                                Type: {charger_time?.type ?? ""}
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="bg-white hover:bg-gray-100 flex flex-col gap-y-5 px-8 py-5 cursor-pointer"
            on:click={() => selectItem("charging-type")}
        >
            <div class="flex justify-between gap-x-10">
                <div class="text-lg font-bold text-[#022F02]">
                    Charging Type
                </div>

                {#if (isExpand && activeItem == "charging-type") || (!isExpand && activeItem == "charging-type") || (isExpand && activeItem !== "charging-type") || activeItem == "charging-type"}
                    <img class="transform rotate-180" src="/img/down-short-arrow.svg" alt="arrow" />
                {:else}
                    <img class="transform rotate-0" src="/img/down-short-arrow.svg" alt="arrow" />
                {/if}
            </div>

            {#if (isExpand && activeItem == "charging-type") || (!isExpand && activeItem == "charging-type") || (isExpand && activeItem !== "charging-type") || activeItem == "charging-type" }
                <div class="laptop:grid grid-cols-4 hidden">
                    <div class="border-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                        Type
                    </div>
                    <div class="border-r-1 border-b-1 border-t-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                        Interface
                    </div>
                    <div class="border-r-1 border-b-1 border-t-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                        Power
                    </div>
                    <div class="border-r-1 border-b-1 border-t-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                        Voltage
                    </div>
                    {#each detail_data?.chargingType as charging_type}
                        <div class="border-l-1 border-b-1 border-r-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                            {charging_type?.type ?? ""}
                        </div>
                        <div class="border-b-1 border-r-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                            {charging_type?.interface ?? ""}
                        </div>
                        <div class="border-b-1 border-r-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                            {charging_type?.power ? charging_type?.power + "W" : ""}
                        </div>
                        <div class="border-b-1 border-r-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                            {charging_type?.voltage ?? ""}
                        </div>
                    {/each}
                </div>

                <div class="flex flex-col gap-y-4 laptop:hidden">
                    {#each detail_data?.chargingType as charging_type}
                        <div class="flex flex-col gap-y-2">
                            <div class="text-base font-semibold text-[#3D4835]">
                                Type: {charging_type?.type ?? ""}
                            </div>
                            <div class="text-base font-semibold text-[#3D4835]">
                                Interface: {charging_type?.interface ?? ""}
                            </div>
                            <div class="text-base font-semibold text-[#3D4835]">
                                Power: {charging_type?.power ? charging_type?.power + "W" : ""}
                            </div>
                            <div class="text-base font-semibold text-[#3D4835]">
                                Voltage: {charging_type?.voltage ?? ""}
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="bg-white hover:bg-gray-100 flex flex-col gap-y-5 px-8 py-5 cursor-pointer"
            on:click={() => selectItem("onboard-charger")}
        >
            <div class="flex justify-between gap-x-10">
                <div class="text-lg font-bold text-[#022F02]">
                    Onboard Charger / Port
                </div>

                {#if (isExpand && activeItem == "onboard-charger") || (!isExpand && activeItem == "onboard-charger") || (isExpand && activeItem !== "onboard-charger") || activeItem == "onboard-charger"}
                    <img class="transform rotate-180" src="/img/down-short-arrow.svg" alt="arrow" />
                {:else}
                    <img class="transform rotate-0" src="/img/down-short-arrow.svg" alt="arrow" />
                {/if}
            </div>

            {#if (isExpand && activeItem == "onboard-charger") || (!isExpand && activeItem == "onboard-charger") || (isExpand && activeItem !== "onboard-charger") || activeItem == "onboard-charger" }
                <div class="laptop:grid grid-cols-4 hidden">
                    <div class="border-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                        Name
                    </div>
                    <div class="border-r-1 border-b-1 border-t-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                        Interface
                    </div>
                    <div class="border-r-1 border-b-1 border-t-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                        Location
                    </div>
                    <div class="border-r-1 border-b-1 border-t-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                        Power
                    </div>
                    {#each detail_data?.onboardChargerOrChargingPort as charger_port_data}
                        <div class="border-l-1 border-b-1 border-r-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                            {charger_port_data?.type ?? ""}
                        </div>
                        <div class="border-b-1 border-r-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                            {charger_port_data?.interface ?? ""}
                        </div>
                        <div class="border-b-1 border-r-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                            {charger_port_data?.location ?? ""}
                        </div>
                        <div class="border-b-1 border-r-1 border-solid border-[#3D4835] p-5 text-base font-semibold text-center">
                            {charger_port_data?.power ? charger_port_data?.power + "W" : ""}
                        </div>
                    {/each}
                </div>

                <div class="flex flex-col gap-y-4 laptop:hidden">
                    {#each detail_data?.onboardChargerOrChargingPort as charger_port_data}
                        <div class="flex flex-col gap-y-2">
                            <div class="text-base font-semibold text-[#3D4835]">
                                Name: {charger_port_data?.name ?? ""}
                            </div>
                            <div class="text-base font-semibold text-[#3D4835]">
                                Interface: {charger_port_data?.interface ?? ""}
                            </div>
                            <div class="text-base font-semibold text-[#3D4835]">
                                Location: {charger_port_data?.location ?? ""}
                            </div>
                            <div class="text-base font-semibold text-[#3D4835]">
                                Power: {charger_port_data?.power ? charger_port_data?.power + "W" : ""}
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
</div>