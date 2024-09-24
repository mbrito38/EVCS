<section class="w-full flex justify-center bg-white">
  <div class="container flex flex-col gap-y-6 items-center pb-[70px] laptop:pb-15">
    <h2 class="font-bold text-center">
        Active Listings
    </h2>

    <div class="laptop:flex laptop:flex-wrap grid tablet:grid-cols-2 justify-center gap-x-5 gap-y-5 w-full mt-4 mb-9">
        <ProfileListCard
            car_name="Hyundai Electron 2015"
            car_price="12000"
            car_sold_status="SOLD"
            img_url="/img/PlaceholderImage-1.png"
            img_alt="Tesla Model X"
            related_messages="10"
            class="laptop_only:basis-[30%]"
        />
        <ProfileListCard
            car_name="Hyundai Electron 2015"
            car_price="12000"
            car_sold_status="SOLD"
            img_url="/img/PlaceholderImage-1.png"
            img_alt="Tesla Model X"
            related_messages="10"
            class="laptop_only:basis-[30%]"
        />
    </div>

    <div class="flex items-center">
        <SolidButton title="Create New Listing" class="!text-xl" />
    </div>
  </div>
</section>

<section class="w-full flex justify-center">
    <div class="container flex flex-col gap-y-6 items-center pt-[50px] pb-12 desktop:pb-15">
      <h2 class="font-bold text-center">
          Past Listings
      </h2>

      <div class="laptop:flex laptop:flex-wrap grid tablet:grid-cols-2 justify-center gap-x-5 gap-y-5 w-full mt-4 mb-9">
        <ProfileListCard
            car_name="Hyundai Electron 2015"
            car_price="12000"
            car_sold_status="SOLD"
            img_url="/img/PlaceholderImage-1.png"
            img_alt="Tesla Model X"
            related_messages="10"
            class="laptop_only:basis-[30%]"
        />
        <ProfileListCard
            car_name="Hyundai Electron 2015"
            car_price="12000"
            car_sold_status="SOLD"
            img_url="/img/PlaceholderImage-1.png"
            img_alt="Tesla Model X"
            related_messages="10"
            class="laptop_only:basis-[30%]"
        />
      </div>
    </div>
  </section>

<script lang="ts">
    import ProfileListCard from "$lib/components/Card/ProfileListCard.svelte";
    import SolidButton from "$lib/components/Button/SolidButton.svelte";
</script>