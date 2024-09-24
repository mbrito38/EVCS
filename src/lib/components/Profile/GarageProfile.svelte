<section class="w-full flex justify-center bg-white">
  <div class="container flex flex-col gap-y-6 items-center pb-12">
    <h2 class="font-bold text-center">
        My Garage
    </h2>
    <div class="flex flex-col tablet:flex-row gap-x-6 gap-y-12 justify-center w-full pt-4">
        <ProfileGarageCard />
        <ProfileGarageCard />
    </div>
    <div class="flex justify-between w-full flex-col tablet:flex-row gap-y-5 mt-15">
        <OutlineButton title="Add a New EV" class="text-xl desktop:text-xl !px-8 !py-3 !w-full tablet:!w-fit flex justify-center" />
        <SolidButton title="Save" class="text-xl desktop:text-xl !px-8 !py-3 !w-full tablet:!w-fit flex justify-center" />
    </div>
  </div>
</section>

<script lang="ts">
    import ProfileGarageCard from "$lib/components/Card/ProfileGarageCard.svelte";
    import SolidButton from "$lib/components/Button/SolidButton.svelte";
    import OutlineButton from "$lib/components/Button/OutlineButton.svelte";
</script>