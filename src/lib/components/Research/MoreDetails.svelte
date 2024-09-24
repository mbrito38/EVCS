<script lang="ts">
    export let detail_data: any = null;
</script>

<div class="flex flex-col gap-y-6 items-center w-full px-5 tablet:px-[50px] laptop:px-[240px]">
    <div class="flex w-full">
        <div class="w-full text-xs font-bold text-[#3D4835] leading-[22px]">
            Vehicle*
        </div>

        <div class="w-full text-xs font-medium text-[#3D4835] leading-[22px]">
            Make, Model & Badge
        </div>
    </div>

    {#if detail_data?.price}
        <div class="flex w-full">
            <div class="w-full text-xs font-bold text-[#3D4835] leading-[22px]">
                Price*
            </div>

            <div class="w-full text-xs font-medium text-[#3D4835] leading-[22px]">
                {detail_data?.price?.[0]?.quantity ?? ""} <span class="uppercase">{detail_data?.price?.[0]?.unit ?? ""}</span>
            </div>
        </div>
    {/if}

    {#if detail_data?.generalMechanicalInfo?.exteriorColors}
        <div class="flex w-full">
            <div class="w-full text-xs font-bold text-[#3D4835] leading-[22px]">
                Color*
            </div>

            <div class="w-full text-xs font-medium text-[#3D4835] leading-[22px]">
                {detail_data?.generalMechanicalInfo?.exteriorColors?.[0]?.color ?? ""}
            </div>
        </div>
    {/if}

    {#if detail_data?.generalMechanicalInfo?.interiorColors}
        <div class="flex w-full">
            <div class="w-full text-xs font-bold text-[#3D4835] leading-[22px]">
                Interior
            </div>

            <div class="w-full text-xs font-medium text-[#3D4835] leading-[22px]">
                {detail_data?.generalMechanicalInfo?.interiorColors?.[0]?.color ?? ""}
            </div>
        </div>
    {/if}

    {#if detail_data?.transmission?.type}
        <div class="flex w-full">
            <div class="w-full text-xs font-bold text-[#3D4835] leading-[22px]">
                Transmission*
            </div>

            <div class="w-full text-xs font-medium text-[#3D4835] leading-[22px]">
                {detail_data?.transmission?.type ?? ""}
            </div>
        </div>
    {/if}

    {#if detail_data?.generalMechanicalInfo?.bodyStyle}
        <div class="flex w-full">
            <div class="w-full text-xs font-bold text-[#3D4835] leading-[22px]">
                Body*
            </div>

            <div class="w-full text-xs font-medium text-[#3D4835] leading-[22px]">
                {detail_data?.generalMechanicalInfo?.bodyStyle ?? ""}
            </div>
        </div>
    {/if}

    {#if detail_data?.electricMotor}
        <div class="flex w-full">
            <div class="w-full text-xs font-bold text-[#3D4835] leading-[22px]">
                Electric Motor
            </div>

            <div class="w-full text-xs font-medium text-[#3D4835] leading-[22px]">
                {detail_data?.electricMotor?.[0]?.type ?? ""} {detail_data?.electricMotor?.[0]?.model ?? ""}
            </div>
        </div>
    {/if}

    {#if detail_data?.year}
        <div class="flex w-full">
            <div class="w-full text-xs font-bold text-[#3D4835] leading-[22px]">
                Model Year*
            </div>

            <div class="w-full text-xs font-medium text-[#3D4835] leading-[22px]">
                {detail_data?.year ?? ""}
            </div>
        </div>
    {/if}
</div>