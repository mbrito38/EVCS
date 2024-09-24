<div class="w-full flex items-center flex-col">
    <section class="bg-white w-full items-center flex flex-col">
        <div class="container flex flex-col w-full tablet:items-center gap-y-7 item-section pt-[50px] pb-12 desktop:pt-20 desktop:pb-15">
            <h1 class="font-bold tablet:text-center text-[37px]">
                {question <= 1 ? 'Partner Request' : `Question ${question} of ${question_data.length}`}
            </h1>
            <h3 class="flex w-full gap-x-24 stretch">
                {question_data[question - 1].title}
            </h3>
            <div class="flex flex-col w-full min-h-[180px] tablet:min-h-[240px] laptop:min-h-[500px] mt-4" >
                {#if question === 1}
                    <SelectDropdown />
                {:else if question === 2}
                    <SelectDropdown />
                {:else if question === 3}
                    <input placeholder="Please type here" class="border-solid border-b-2 border-primaryfontcolor pb-2" />
                {:else if question === 4}
                    <div class="grid laptop:grid-cols-2 gap-y-10 gap-x-5" >
                        <input placeholder="Business phone" class="border-solid border-b-2 border-b-primaryfontcolor pb-2.5" />
                        <input placeholder="Business email" class="border-solid border-b-2 border-b-primaryfontcolor pb-2.5" />
                        <input placeholder="Business address" class="border-solid border-b-2 border-b-primaryfontcolor pb-2.5" />
                        <input placeholder="Business website" class="border-solid border-b-2 border-b-primaryfontcolor pb-2.5" />
                    </div>
                {:else if question === 5}
                    <textarea placeholder="Please type here" rows=10 ></textarea>
                {:else}
                    <div class="flex gap-x-6 text-xl font-semibold text-primaryfontcolor" >
                        <Checkbox />
                        <span>I consent to display evcarsales.net's URL and imagery on my website.</span>
                    </div>
                {/if}
            </div>
            <div class="flex justify-between w-full">
                <button class="button-1 backwards {question > 1 ? '' : 'invisible'}" on:click={() => {if(question > 0) question -= 1}} >Back</button>
                <button class="button-1 justify-self-end" on:click={() => {if(question < question_data.length) question += 1}} >Next</button>
            </div>
        </div>
    </section>
</div>

<script lang="ts">
	import Checkbox from "$lib/components/Button/Checkbox.svelte";
	import SelectDropdown from "$lib/components/Dropdown/SelectDropdown.svelte";
    let question : number = 1;

    const question_data = [
		{title: "What is your partner category?"},
		{title: "What is your partner sub-category?"},
		{title: "What is your business name?"},
		{title: "What are your business's contact details?"},
		{title: "Please describe your business's services."},
		{title: "Do you consent to display evcarsales.net's URL and imagery on your business's website?"},
	]
</script>

<style lang="postcss" scoped>
    input {
        @apply text-primaryfontcolor font-semibold text-xl;
        &::placeholder {
            @apply text-primaryfontcolor font-semibold text-xl opacity-60;
        }
    }

    textarea {
        @apply py-4 px-6 border-solid border-primaryfontcolor border-[3px] rounded-3xl text-xl text-primaryfontcolor font-semibold;
        &::placeholder {
            @apply text-xl text-primaryfontcolor opacity-50 font-semibold;
        }
    }
</style>