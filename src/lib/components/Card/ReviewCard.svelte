<div class="flex max-w-[440px] h-[356px] w-full flex-col justify-between pb-7 items-start gap-y-4 bg-white rounded-[2rem] border-1 border-[#0026071A] border-solid">
	<img
		class="rounded-t-[2rem] h-[220px] w-full object-cover"
		src={img_url}
		alt={img_alt}
	/>
	<h4 class="px-8">
		{name}
	</h4>
	<div class="flex gap-x-4 pl-8">
		{#each { length: rating } as _}
			<img src="/img/star-filled.svg" alt="star" />
		{/each}
		{#each {length : 5 - rating} as _}
			<img src="/img/star-empty.svg" alt="star" />
		{/each}
	</div>
</div>

<script lang="ts">
	export let name: string = "";
	export let rating: number = 0;
	export let img_url: string = "/img/halley.jpeg";
	export let img_alt: string = "";
</script>
