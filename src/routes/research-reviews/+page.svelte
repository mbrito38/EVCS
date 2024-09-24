<svelte:head>
	<title>Research & Reviews - EV Car Sales</title>
</svelte:head>

<div class="w-full flex items-center flex-col">
    <section class="w-full flex justify-center bg-white">
        <div class="container flex flex-col gap-y-6 items-center pt-12 pb-12 desktop:pt-15 desktop:pb-[100px]">
            <h1 class="font-bold text-center">
                Research & Reviews
            </h1>
            <h3 class="text-center" >
                Search or select an EV to find research & reviews
            </h3>
            <div class="flex justify-center gap-6 w-full">
                <Search />
                <SolidButton title="Select EV" on:click={showSelectModal} class="!px-11 !leading-[26px]" />
            </div>
        </div>
    </section>
    <section class="w-full flex justify-center">
        <div class="container w-full flex-col items-center pt-12 pb-12 desktop:pt-15 desktop:pb-[100px]">
            <h2 class="text-center">
                Popular Searches
            </h2>
            <div class="laptop:flex laptop:flex-wrap grid tablet:grid-cols-2 justify-center gap-x-6 gap-y-[30px] w-full mt-10 mb-8">
                <InfoCard
                    header_text="Tesla Model X"
                    img_url="/img/PlaceholderImage-1.png"
                    img_alt="Tesla Model X"
                    class="laptop_only:basis-[30%]"
                />
                <InfoCard
                    header_text="Audi e-Tron S"
                    img_url="/img/PlaceholderImage-1.png"
                    img_alt="Audi e-Tron S"
                    class="laptop_only:basis-[30%]"
                />
                <InfoCard
                    header_text="BMW I4"
                    img_url="/img/PlaceholderImage-1.png"
                    img_alt="BMW I4"
                    class="laptop_only:basis-[30%]"
                />
                <InfoCard
                    header_text="Tesla Model X"
                    img_url="/img/PlaceholderImage-1.png"
                    img_alt="Tesla Model X"
                    class="laptop_only:basis-[30%]"
                />
                <InfoCard
                    header_text="Audi e-Tron S"
                    img_url="/img/PlaceholderImage-1.png"
                    img_alt="Audi e-Tron S"
                    class="laptop_only:basis-[30%]"
                />
                <InfoCard
                    header_text="BMW I4"
                    img_url="/img/PlaceholderImage-1.png"
                    img_alt="BMW I4"
                    class="laptop_only:basis-[30%]"
                />
            </div>
            <SolidButton title="Load More" class="mt-5 !leading-[26px]" />
        </div>
    </section>
    <section class="w-full flex justify-center bg-white">
        <div class="w-full flex-col items-center pt-12 pb-12 desktop:pt-15 desktop:pb-[100px]">
            <h2 class="text-center">
                Recent reviews
            </h2>
            <Carousel>
                <InfoCard header_text="Audi e-Tron S" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px] min-w-[310px]" />
                <InfoCard header_text="Audi e-Tron S" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px] min-w-[310px]" />
                <InfoCard header_text="Audi e-Tron S" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px] min-w-[310px]" />
                <InfoCard header_text="Audi e-Tron S" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px] min-w-[310px]" />
                <InfoCard header_text="Audi e-Tron S" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px] min-w-[310px]" />
                <InfoCard header_text="Audi e-Tron S" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px] min-w-[310px]" />
                <InfoCard header_text="Audi e-Tron S" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px] min-w-[310px]" />
                <InfoCard header_text="Audi e-Tron S" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px] min-w-[310px]" />
            </Carousel>
        </div>
    </section>
    <section class="w-full flex justify-center">
        <div class="w-full flex-col items-center pt-12 pb-12 desktop:pt-15 desktop:pb-[100px]">
            <h2 class="text-center">
                Reviews by brand
            </h2>
            <Carousel>
                <InfoCard header_text="Tesla" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px] min-w-[310px]" />
                <InfoCard header_text="Mercedes-Benz" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px] min-w-[310px]" />
                <InfoCard header_text="Kia" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px] min-w-[310px]" />
                <InfoCard header_text="Tesla" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px] min-w-[310px]" />
                <InfoCard header_text="Tesla Model X" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px] min-w-[310px]" />
                <InfoCard header_text="Tesla Model X" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px] min-w-[310px]" />
                <InfoCard header_text="Tesla Model X" img_url="/img/PlaceholderImage-1.png" img_alt="Tesla Model" class="h-[240px] min-w-[310px]" />
            </Carousel>
        </div>
    </section>
    <Modal bind:show={select_make_modal}>
        <MakeModal />
    </Modal>
</div>

<script lang="ts">
    import InfoCard from "$lib/components/Card/InfoCard.svelte";
    import SolidButton from "$lib/components/Button/SolidButton.svelte";
    import Carousel from "$lib/components/Carousel/Carousel.svelte";
    import Search from "$lib/components/Shared/Search.svelte";
    import MakeModal from "$lib/components/Modal/MakeModal.svelte";
	import Modal from "$lib/components/Modal/Modal.svelte";

    let select_make_modal: boolean = false;

    const showSelectModal = () => {
        select_make_modal = true;
    }
</script>

<style lang="postcss">

</style>