<section class="w-full flex justify-center bg-vibrant_green {mode}">
    <div class="container w-full flex-col gap-y-6 items-center pt-[50px] pb-[70px] desktop:pt-15 desktop:pb-15">
        <h1 class="font-bold text-center text-white">{header}</h1>
        <div class="flex flex-col tablet:flex-row flex-wrap justify-center gap-x-5 gap-y-5 items-center mt-5 {button_holder_classes} ">
            <slot />
        </div>
    </div>
</section>

<script lang="ts" >
    export let header : string = '';
    export let mode : string = '';
    export let button_holder_classes : string = '';
</script>

<style lang="postcss" >
    .inverted {
        @apply bg-site_bg_color;
        h1 {
            @apply text-primaryfontcolor;
        }
    }
</style>