<section class="w-full flex justify-center bg-white">
  <div class="container flex flex-col items-center pb-[70px] desktop:pb-15">
    <h3 class="font-bold text-center mb-10">
        Topics I'm Following
    </h3>
    <ProfileInterestTab />
    <div class="flex justify-between w-full mt-12 desktop:mt-32">
        <SolidButton title="Discard" class="!text-xl" />
        <SolidButton title="Save" class="!text-xl" />
    </div>
  </div>
</section>

<script lang="ts">
    import ProfileInterestTab from "$lib/components/Tab/ProfileInterestTab.svelte";
    import SolidButton from "$lib/components/Button/SolidButton.svelte";
</script>