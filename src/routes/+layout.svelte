<svelte:head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<meta name="description" content="Powerful software solutions for all, used by many industries and people, anyone can use it from all across the globe!">
	<meta property="og:locale" content="en_US">
	<meta property="og:type" content="article">
	<meta property="og:site_name" content="EV Car Sales">
	<meta property="article:modified_time" content="2022-12-04T00:46:37+00:00">
</svelte:head>

<div class="min-h-screen bg-site_bg_color">
	<Header siteBanner={siteBanner} />
	<main class="mt-14">
		<slot />
	</main>
	<Footer />
</div>

<script lang="ts">
	import Header from "$lib/components/Header/Header.svelte";
	import Footer from "$lib/components/Footer/Footer.svelte";
	import { navigating } from '$app/stores';
	import { brands } from "$lib/stores/brands";
	import { GetSiteBannerBrandsQuery } from "$lib/utils/query";
	import { PUBLIC_GRAPHQL_URL_FROM_APP } from "$env/static/public";
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	import "../app.css";
	import { onMount } from "svelte";

    let siteBanner = {};

    const getSiteBannerBrands = async () => {
		const result = await fetch(PUBLIC_GRAPHQL_URL_FROM_APP, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: GetSiteBannerBrandsQuery()
		});

		const resultSiteBannerBrands = await result.json();

        if (resultSiteBannerBrands?.data?.SiteBanner) {
            siteBanner = resultSiteBannerBrands?.data?.SiteBanner;
        }

        if (resultSiteBannerBrands?.data?.Brands?.docs) {
            brands.set(resultSiteBannerBrands.data.Brands.docs);
        }
	};

    onMount(async () => {
        await getSiteBannerBrands();
    });

    NProgress.configure({ minimum: 0.16	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>
