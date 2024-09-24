<div class="max-w-[439px] flex flex-col rounded-[2rem] bg-white border-1 border-[#0026071A]">
	<img src={img_url} class="rounded-t-[2rem] h-[220px] w-full" alt="" />
	<div class="px-6 py-6 flex flex-col gap-y-6">
		<div>
			<h4>
				{car_text}
			</h4>
			<h4>
				{price_text}
			</h4>
		</div>
		<div class="flex gap-2">
			<img src={client_url} class="avatar" alt="" />
			<div class="flex flex-col">
				<p class="font-bold">John S</p>
				<p class="font-normal">Melbourne, VIC</p>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	export let car_text: string;
	export let price_text: string;
	export let img_url: string = '/img/demo.jpg';
	export let client_url: string = '/img/halley.jpeg';
</script>

<style lang="postcss">
	.avatar {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		margin-top: auto;
		margin-bottom: auto;
	}
</style>
