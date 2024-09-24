<svelte:head>
	<title>{page?.title} - EV Car Sales</title>
</svelte:head>

<main class="pt-16 flex flex-col w-full items-center gap-y-5 bg-white" >
    <h1 class="Container w-full text-center justify-center" >{page.title}</h1>
    <h4 class="Container w-full text-center whitespace-pre-wrap" >{page.subTitle}</h4>
    <div class="Container content w-full flex justify-between gap-x-7 mt-6 pb-20" >
        <div>
            {#each page.firstColumnContent as block}
            {@const blocktext = block.children[0]?.text}
            <RichTextBlock block={block} />
            {/each}
        </div>
        {#if page?.secondColumnContent}
        <div>
            {#each page.secondColumnContent as block}
            {@const blocktext = block.children[0]?.text}
            <RichTextBlock block={block} />
            {/each}
        </div>
        {/if}
    </div>
    <div class="bg-site_bg_color pt-4 pb-20 w-full flex justify-center" >
        <div class="flex Container w-full gap-x-10 mt-8 " >
            {#each page?.bottomCards as card}
                <HelpCard button_text={card.buttonText} body_text={card.text} button_link={card.buttonLink} header_text={card.title} />
            {/each}
        </div>
    </div>
</main>

<script lang="ts" >
	import HelpCard from './../../lib/components/Card/HelpCard.svelte';
	import RichTextBlock from "$lib/components/Shared/RichTextBlock.svelte";


    export let data : any;
    $: page = data?.data?.PagesTwoColumns.docs[0];
    console.log(data?.data?.PagesTwoColumns.docs[0]?.bottomCards);
</script>

<style lang="postcss" >
    .content > div {
        @apply flex flex-col gap-y-5;
    }
    .Container {
        @apply laptop:max-w-[714px] desktop:max-w-[919px];
    }
</style>