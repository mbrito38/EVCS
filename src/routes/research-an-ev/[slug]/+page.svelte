<svelte:head>
	<title>EV Car Sales - The World's First EV Selling Platform</title>
</svelte:head>

{#if detail_data}
    <div class="w-full flex items-center flex-col">
        <section class="w-full flex justify-center bg-white">
            <div class="container flex flex-col gap-y-10 mt-10 laptop:mt-15">
                <h1 class="font-bold text-center">
                    Research an EV
                </h1>
                <ResearchImage detail_data={detail_data} />
                <DetailFeatures detail_data={detail_data} />
                <ResearchMoreDetail detail_data={detail_data} />
                <RatingsBreak />
            </div>
        </section>
        <ReviewsSection />
        <DiscussionsSection />
        <NewsSection />
    </div>
{/if}

<script lang="ts">
	import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { PUBLIC_GRAPHQL_URL_FROM_APP } from "$env/static/public";
    import { GetDetailCarModelWithSlugQuery } from "$lib/utils/query";
    import ReviewsSection from "$lib/components/Templates/ReviewsSection.svelte";
    import DiscussionsSection from "$lib/components/Templates/DiscussionsSection.svelte";
    import NewsSection from "$lib/components/Templates/NewsSection.svelte";
    import RatingsBreak from "$lib/components/Research/RatingsBreak.svelte";
    import ResearchMoreDetail from "$lib/components/Research/ResearchMoreDetail.svelte";
	import DetailFeatures from "$lib/components/Research/DetailFeatures.svelte";
	import ResearchImage from "$lib/components/Research/ResearchImage.svelte";

    let detail_data: any = null;

    const getDetailCarModel = async (slug: string) => {
		const result = await fetch(PUBLIC_GRAPHQL_URL_FROM_APP, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: GetDetailCarModelWithSlugQuery(slug)
		});
		const resultCarModels = await result.json();
        detail_data = resultCarModels?.data?.CarModels?.docs?.[0] ?? null;
	};

    onMount(async () => {
        const slug = $page.params.slug;
        await getDetailCarModel(slug);
    });
</script>
