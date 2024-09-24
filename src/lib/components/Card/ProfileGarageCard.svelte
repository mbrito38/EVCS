<div class="flex flex-col gap-y-4 min-w-[330px] tablet:min-w-[279px] laptop:min-w-[348px] desktop:min-w-[438px] bg-white rounded-[2rem] border-1 border-[#0026071A] border-solid {classes} {mode}">
    <img class="rounded-t-[2rem] h-[220px] w-full" src={img_url} alt={img_alt} />
	<div class="flex flex-col gap-y-4 px-6 pb-8">
        <input
            class="px-5 py-2 font-medium text-xl rounded-[1.75rem] border-solid border-1 border-primaryfontcolor text-[#022F02]"
            placeholder="EV Car Name"
            type="text"
        />
        <textarea
            class="px-5 py-3 font-medium text-base rounded-[1.75rem] border-solid border-1 border-primaryfontcolor text-[#3D4835]"
            placeholder="EV Car Name"
            rows="4"
        />

        <div class="flex gap-x-6 gap-y-5 flex-col laptop:flex-row">
            <SolidButton title="My EVs"  class="desktop:text-sm px-5 !py-2 !w-full laptop:!w-fit flex justify-center" />
            <OutlineButton title="My Wishlist" class="desktop:text-sm px-5 !py-2 !border-primaryfontcolor !text-primaryfontcolor !w-full laptop:!w-fit flex justify-center" />
        </div>
	</div>
</div>

<script lang="ts">
    import SolidButton from "$lib/components/Button/SolidButton.svelte";
    import OutlineButton from "$lib/components/Button/OutlineButton.svelte";
	export let img_url: string = "/img/halley.jpeg";
	export let img_alt: string = "";
	export let mode: string = "";
	export {classes as class};
	let classes : string = "";
</script>

<style lang="postcss" scoped>
	input::placeholder {
		color: #022F02
	}

	textarea::placeholder {
		@apply text-warm_grey;
	}

	.long {
		@apply h-[158px] tablet:h-[unset] flex-row max-w-[unset] flex-1;

		&.flex-row-reverse {
			flex-direction: row-reverse;
			> img {
				@apply rounded-l-none rounded-r-3xl;
			}
		}

		> img {
			@apply w-1/2 tablet:w-[unset] flex-1 h-[158px] rounded-l-[2rem] rounded-r-none;
		}
	}
</style>
