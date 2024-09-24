<section class="w-full flex justify-center">
    <div class="container w-full flex-col gap-y-6 items-center pt-12 pb-12 desktop:pt-15 desktop:pb-15">
        <h1 class="font-bold text-center text-primaryfotncolor">{header}</h1>
        <div class="grid tablet:grid-cols-2 laptop:flex laptop:flex-row flex-wrap justify-center gap-x-5 gap-y-5 items-center mt-2">
            <slot />
        </div>
        <button class="button-3 mt-10" >Load More</button>
    </div>
</section>

<script lang="ts">
    export let header : string = '';
</script>