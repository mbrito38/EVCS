<div class="w-full">
	<div class="flex w-full">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="w-full text-center pb-[10px] pt-[10px] font-semibold cursor-pointer text-[#{currentTab === 'left' ? '2FA304' : '4D6D4D'}] border-b-{currentTab === 'left' ? '2' : '1'} border-solid border-[#{currentTab === 'left' ? '2FA304' : '4D6D4D'}]"
			on:click={() => selectTab('left')}
		>
			Discussions
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="w-full text-center pb-[10px] pt-[10px] font-semibold cursor-pointer text-[#{currentTab === 'right' ? '2FA304' : '4D6D4D'}] border-b-{currentTab === 'right' ? '2' : '1'} border-solid border-[#{currentTab === 'right' ? '2FA304' : '4D6D4D'}]"
			on:click={() => selectTab('right')}
		>
			News
		</div>
	</div>
	<div class="tab-board pt-[50px] px-4 pb-15 laptop:px-28 rounded-bl-[30px] rounded-br-[30px]">
		{#if currentTab === "left"}
			<div class="flex flex-col gap-y-10 items-center">
				<div class="flex flex-wrap gap-8 w-full justify-center">
					<ListingTag title="Electric Cars" />
					<ListingTag title="EV News" />
					<ListingTag title="Audi" />
					<ListingTag title="Tesla" />
					<ListingTag title="Market Trends" />
				</div>
				<SolidButton title="Find more to follow" class="!text-xl" />
			</div>
		{:else}
			<div class="flex flex-col gap-y-10 items-center">
				<div class="flex flex-wrap gap-8 w-full justify-center">
					<ListingTag title="News Cars" />
					<ListingTag title="News EV" />
					<ListingTag title="News Audi" />
					<ListingTag title="News Tesla" />
					<ListingTag title="News Market Trends" />
				</div>
				<SolidButton title="Find more to follow" class="!text-xl" />
			</div>
		{/if}
	</div>
</div>

<script lang="ts">
	import SolidButton from "$lib/components/Button/SolidButton.svelte";
	import ListingTag from "$lib/components/Badge/ListingTag.svelte";

	let currentTab = "left";

	const selectTab = (tab: string) => {
		currentTab = tab;
	};
</script>

<style lang="postcss" scoped>
	.tab-board {
		@apply border-l-1 border-solid border-l-white border-r-1 border-r-white border-b-1 border-b-white;
		background: #F6F7F5 0% 0% no-repeat padding-box;
		box-shadow: 0px 3px 20px #0000001A;
	}
</style>