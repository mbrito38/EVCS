<div class="flex flex-col gap-y-10 border-none laptop:border-solid border-b-2 border-[#015601]">
    <CarImageInfo class="hidden laptop:block" />

    <div class="flex flex-col gap-y-8 description">
        <h3 class="font-semibold">
            Seller's Description
        </h3>

        <div class="font-medium text-base text-warm_grey">
          The car is in a new and untouched condition, it has nothing on its odometer and is ready to be driven. There are 4 doors and 5 seats and with a 
          0 to 100km/h acceleration of around 7 seconds it is quite the speedy vessel for you daredevils out there.
        </div>
    </div>
</div>

<script>
	import CarImageInfo from "$lib/components/Publish/CarImageInfo.svelte";
</script>

<style lang="postcss" scoped>
  .description {
    @apply mb-0 laptop:mb-16;
  }
</style>