<div class="flex w-full flex-col gap-y-20 justify-center items-center {classes}" >
    <RangeSlider values={[slider_data.min,slider_data.max]} min={slider_data.min} max={slider_data.max} />
    <div class="flex flex-col gap-y-12 tablet:flex-row justify-between w-full" >
        <div class="flex flex-col gap-y-3 items-center text-xl font-semibold" >
            {slider_data.min_text}
            <input class="border-2 border-solid border-primaryfontcolor w-[165px] rounded-3xl px-6 py-1.5 bg-site_bg_color" />
        </div>
        <div class="flex flex-col gap-y-3 items-center text-xl font-semibold" >
            {slider_data.max_text}
            <input class="border-2 border-solid border-primaryfontcolor w-[165px] rounded-3xl px-6 py-1.5 bg-site_bg_color" />
        </div>
    </div>
</div>

<script lang="ts" >
	import RangeSlider from "svelte-range-slider-pips";
    let classes : string = '';
    export {classes as class};
    export let slider_data : {min : number , max : number , min_text : string , max_text : string} = {min: 0 , max : 1000000 , min_text : "Minimum" , max_text : "Maximum"};
</script>

<style lang="postcss" >
	:global {
		.rangeSlider {
			--range-slider:          theme('colors.vibrant_green'); /* slider main background color */
			--range-handle-inactive: var(--range-slider); /* inactive handle color */
			--range-handle:          var(--range-slider); /* non-focussed handle color */
			--range-handle-focus:    white; /* focussed handle color */
			@apply w-[96%] m-0;
            .rangeHandle {
                @apply w-7 h-7;
                .rangeNub {
                    @apply bg-white border-primaryfontcolor border-2;
                }
            }
			&.focus .rangeNub {
				@apply bg-white;
			}
		}
	}
</style>