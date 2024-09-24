<script lang="ts">
    export let detail_data: any = null;

    let initial_car_image: any = null;

    const formatFirstCaptial = (capitalString: string) => {
        return capitalString.charAt(0).toUpperCase() + capitalString.slice(1);
    };

    const selectImage = (modal_image: any) => {
        initial_car_image = modal_image?.image?.url ?? null;
    };

    $: if (detail_data) {
        initial_car_image = detail_data?.modelImages?.[0]?.image?.url ?? null;
    }
</script>

<div class="w-full flex flex-col gap-y-10 laptop:flex-row gap-x-[50px] border-none laptop:border-solid border-b-1 pb-5 laptop:pb-[50px] border-[#015601]">
    <div class="flex flex-col laptop:flex-row gap-y-5 gap-x-5 items-center">
        {#if initial_car_image}
            <a href={initial_car_image} target="_blank" rel="noreferrer">
                <img
                    class="w-full laptop:w-[543px] rounded-[30px] cursor-pointer"
                    src={initial_car_image}
                    alt="car"
                />
            </a>
        {/if}
        <div class="h-full flex flex-row laptop:flex-col gap-y-3 gap-x-3 tablet:gap-x-[30px] laptop:justify-between">
            {#each detail_data?.modelImages as model_image }
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <img
                    class="w-16 h-16 tablet:w-[105px] tablet:h-auto rounded-2xl cursor-pointer"
                    src={model_image?.image?.url}
                    alt="car"
                    on:click={() => selectImage(model_image)}
                />
            {/each}
        </div>
    </div>

    <div class="relative flex flex-col gap-y-[30px] w-full laptop:max-w-[600px]">
        <div>
            <h3 class="text-3xl font-semibold text-start w-full">
                {formatFirstCaptial(detail_data?.brand?.name ?? "")} {formatFirstCaptial(detail_data?.name ?? "")}
            </h3>

            {#if detail_data?.price?.[0]?.quantity}
                <div class="mt-4 text-lg font-semibold leading-[26px] text-[#022F02]">
                    Price: ${detail_data?.price?.[0]?.quantity ?? ""}* <span class="uppercase">{detail_data?.price?.[0]?.unit ?? ""}</span>
                </div>
            {/if}

            <div class="mt-4 text-lg font-semibold leading-[26px] text-[#022F02]">
                Brand: {formatFirstCaptial(detail_data?.brand?.name ?? "")}
            </div>

            <div class="mt-4 text-lg font-semibold leading-[26px] text-[#022F02]">
                Model: {formatFirstCaptial(detail_data?.name ?? "")}
            </div>

            <div class="mt-4 text-lg font-semibold leading-[26px] text-[#022F02]">
                Trim: {formatFirstCaptial(detail_data?.trim ?? "")}
            </div>

            <div class="mt-4 text-lg font-semibold leading-[26px] text-[#022F02]">
                Year: {detail_data?.year ?? ""}
            </div>

            <div class="mt-4 text-base font-medium leading-[26px] text-[#022F02]">
                *Estimated Market Price from most recent data
            </div>
        </div>
    </div>
</div>