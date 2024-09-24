<header class="min-h-14 bg-white w-full fixed flex flex-col items-center justify-center top-0 z-20 header-shadow">
	<div class="container w-full justify-between items-center py-3">
		<img src="/img/hamburger-button.svg" alt="Menu" class="laptop:hidden" />
		<a href="/">
			<img src="/img/LogoGreen.png" alt="EV Car Sales" class="cursor-pointer h-[29px]" />
		</a>
		<div class="flex laptop:gap-x-14 justify-end font-semibold text-xl menu-container">
			<div class="hidden laptop:flex laptop:gap-x-14">
				<span
					on:mouseover={() => (buy_and_sell_show = true)}
					on:mouseleave={() => (buy_and_sell_show = false)}
					on:focus={() => (buy_and_sell_show = true)}
					on:focusout={() => (buy_and_sell_show = false)}
				>
					Buy & Sell
					{#if buy_and_sell_show}
						<div class="absolute">
							<div class="header_dropdown_menu">
								{#each BuySellMenuItems as menuItem}
									<a href={menuItem.link}>{menuItem.title}</a>
								{/each}
							</div>
						</div>
					{/if}
				</span>
				<span on:mouseover={() => (explore_show = true)} on:mouseleave={() => (explore_show = false)} on:focus={() => (explore_show = true)} on:focusout={() => (explore_show = false)}>
					Explore EV's
					{#if explore_show}
						<div class="absolute">
							<div class="header_dropdown_menu">
								{#each exploreMenuItems as menuItem}
									<a href={menuItem.link}>{menuItem.title}</a>
								{/each}
							</div>
						</div>
					{/if}
				</span>
				<a href="/new-listing"> Create EV Listing </a>
			</div>
			<a href="/profile" class="flex items-center">
				<img src="/img/Profile.svg" alt="profile" class="cursor-pointer" />
			</a>
		</div>
	</div>
    {#if siteBanner && siteBanner.isActive}
        <SiteBanner
            content={siteBanner.textContent}
            text_color={siteBanner.textColor}
            background_color={siteBanner.backgroundColor}
        />
    {/if}
</header>

<script lang="ts">
    import SiteBanner from "$lib/components/Shared/SiteBanner.svelte";

    export let siteBanner: any;

    let buy_and_sell_show = false;
	let explore_show = false;

	const BuySellMenuItems = [
		{ title: "Quiz", link: "/quiz" },
		{ title: "Browse", link: "/browse" },
	];

	const exploreMenuItems = [
		{ title: "Discussions", link: "/discussions" },
		{ title: "News", link: "/news" },
		{ title: "Research", link: "/research-reviews" },
		{ title: "Partners", link: "/partners" },
		{ title: "About Us", link: "/about-us" },
		{ title: "Contact Us", link: "/contact-us" }
	];
</script>

<style lang="postcss" scoped>
	.header-shadow {
		box-shadow: 0px 0px 20px #00000029;
	}

	.header_dropdown_menu {
		@apply relative flex flex-col bg-white w-[190px] right-8 rounded-2xl gap-y-3 px-8 py-4;
		a {
			@apply text-left;
			&:first-child {
				padding-top: 9px;
				border-top: solid #00000029 0.5px;
			}
		}
	}
</style>
