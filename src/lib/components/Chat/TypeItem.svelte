<div class="flex gap-x-7 px-7 py-5 type-card bg-site_bg_color">
    <img class="type-image" src={model_image} alt="type" />
    <div class="flex flex-col gap-y-1">
        <p class="text-base font-medium">
            {model_type}
        </p>
        <p class="text-sm font-bold text-vibrant_green">
            View Listing
        </p>
    </div>
</div>

<script lang="ts">
    export let model_image: string = "/img/halley.jpeg";
    export let model_type: string = "$30,000 - Tesla Model Y 2022";
</script>

<style lang="postcss" scoped>
    .type-card {
        box-shadow: 0 2px 2px rgba(182, 182, 182, 0.75);
    }
    .type-image {
        width: 74px;
        height: 46px;
        border-radius: 6px;
    }
</style>