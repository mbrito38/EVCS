<div class="flex flex-col items-center {classes}" >
    <div class="flex items-center gap-x-9 justify-center w-full mt-11 mb-8">
        <ArrowButton left={true} onClick={() => change_slide(-1)} class="hidden laptop:flex" />
        <div class="container relative carousel w-full flex gap-x-6 overflow-x-hidden {item_classes}" bind:this={carousel} >
            <slot />
        </div>
        <ArrowButton onClick={() => change_slide(1)} class="hidden laptop:flex" />  
    </div>
    <div class="flex gap-x-4" >
        {#each Array(carousel_length - 3) as _,i}
        <button on:click={() => {slide = i}} on:keypress={() => {slide = i}}
            class="border-solid border-1 border-vibrant_green p-1 rounded-2xl {i === slide ? 'bg-vibrant_green' : ''}" ></button>
        {/each}
    </div>
</div>

<script lang="ts" >
	import ArrowButton from '$lib/components/Button/ArrowButton.svelte';
	import { onMount } from 'svelte';

    let carousel : HTMLElement;
    let carousel_length : number = 3; //starts at 3 because of the -3 above
    let slide : number = 0;
    export let item_classes : string = '';
    let classes : string = '';
    export {classes as class};

    onMount(() => {
        carousel_length = carousel.children.length;
    })

    function change_slide(int : number) {
        if (slide < carousel_length - 4 && int > 0) {
            slide += int;
        }
        else if (slide > 0 && int < 0) {
            slide += int;
        }
    }

</script>

<style lang="postcss" >
    .carousel {
        > :global(*) {
            @apply w-full shrink-0;

            flex-basis: calc(80% - 24px);

            @screen tablet {
                flex-basis: calc(45% - 24px);
            }

            @screen laptop {
                flex-basis: calc(25% - 24px);
            }
        }
    }

    .three-items-max {
        .carousel {
            @apply gap-x-12;
            > :global(*) {
                flex-basis: calc(80% - 24px);

                @screen tablet {
                    flex-basis: calc(55% - 24px);
                }

                @screen desktop {
                    flex-basis: calc(35% - 24px);
                }
            }
        }
    }
</style>