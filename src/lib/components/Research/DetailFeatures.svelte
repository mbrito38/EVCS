<script lang="ts">
    export let detail_data: any = null;

    const formatFirstCaptial = (capitalString: string) => {
        return capitalString.charAt(0).toUpperCase() + capitalString.slice(1);
    };
</script>

<div class="flex flex-col gap-y-[70px] laptop:flex-row pt-[30px] pb-[30px] laptop:pb-15 border-none laptop:border-solid border-b-1 border-[#015601]">
    <div class="flex flex-col flex-1 gap-y-[50px] pr-0 laptop:pr-28">
        <div class="flex flex-col gap-y-[30px]">
            <h3 class="font-semibold leading-[36px] text-2xl">
                Features & Specifications
            </h3>

            {#if detail_data?.performance?.acceleration0100Kmh}
                <div class="flex justify-between">
                    <div class="flex gap-x-5">
                        <img src="/img/icons/Body%20Type%20Icon.svg" class="w-8 h-8" alt="feature" />

                        <h4 class="font-semibold text-lg leading-[26px] text-[#022F02] my-auto">
                            Acceleration to 100km/h (seconds)
                        </h4>
                    </div>

                    <span class="font-medium text-base leading-[26px] text-warm_grey">
                        {detail_data?.performance?.acceleration0100Kmh ?? ""}
                    </span>
                </div>
            {/if}

            {#if detail_data?.generalMechanicalInfo?.bodyStyle}
                <div class="flex justify-between">
                    <div class="flex gap-x-5">
                        <img src="/img/icons/Body%20Type%20Icon.svg" class="w-8 h-8" alt="feature" />

                        <h4 class="font-semibold text-lg leading-[26px] text-[#022F02] my-auto">
                            Body Type
                        </h4>
                    </div>

                    <span class="font-medium text-base leading-[26px] text-warm_grey">
                        {detail_data?.generalMechanicalInfo?.bodyStyle ?? ""}
                    </span>
                </div>
            {/if}

            {#if detail_data?.energyClass}
                <div class="flex justify-between">
                    <div class="flex gap-x-5">
                        <img src="/img/icons/Body%20Type%20Icon.svg" class="w-8 h-8" alt="feature" />

                        <h4 class="font-semibold text-lg leading-[26px] text-[#022F02] my-auto">
                            Energy Class
                        </h4>
                    </div>

                    <span class="font-medium text-base leading-[26px] text-warm_grey">
                        {detail_data?.energyClass ?? ""}
                    </span>
                </div>
            {/if}

            {#if detail_data?.trim}
                <div class="flex justify-between">
                    <div class="flex gap-x-5">
                        <img src="/img/icons/Body%20Type%20Icon.svg" class="w-8 h-8" alt="feature" />

                        <h4 class="font-semibold text-lg leading-[26px] text-[#022F02] my-auto">
                            Trim
                        </h4>
                    </div>

                    <span class="font-medium text-base leading-[26px] text-warm_grey">
                        {detail_data?.trim ?? ""}
                    </span>
                </div>
            {/if}

            {#if detail_data?.year}
                <div class="flex justify-between">
                    <div class="flex gap-x-5">
                        <img src="/img/icons/Body%20Type%20Icon.svg" class="w-8 h-8" alt="feature" />

                        <h4 class="font-semibold text-lg leading-[26px] text-[#022F02] my-auto">
                            Year
                        </h4>
                    </div>

                    <span class="font-medium text-base leading-[26px] text-warm_grey">
                        {detail_data?.year ?? ""}
                    </span>
                </div>
            {/if}
        </div>

        <div class="flex justify-center">
            <button class="button-1 px-[30px]">
                Get Offers
            </button>
        </div>
    </div>

    <div class="flex flex-col items-start flex-1 gap-y-10 pl-0 laptop:pl-28 border-none laptop:border-solid border-l-1 border-[#015601]">
        <div class="flex flex-col gap-y-5">
            <h3 class="font-semibold leading-[36px] text-2xl">
                About {formatFirstCaptial(detail_data?.brand?.name ?? "Brand")}
            </h3>
            <p class="text-start text-warm_grey font-medium text-base">
                - Lorem ipsum dolor sit amet.
            </p>
            <p class="text-start text-warm_grey font-medium text-base">
                - Lorem ipsum dolor sit amet.
            </p>
            <p class="text-start text-warm_grey font-medium text-base">
                - Lorem ipsum dolor sit amet
            </p>
        </div>
    </div>
</div>