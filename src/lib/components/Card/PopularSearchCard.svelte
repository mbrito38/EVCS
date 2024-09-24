<div class="flex flex-col gap-y-4 max-w-[438px] bg-white items-center rounded-[2rem] border-1 border-[#0026071A] border-solid">
	<img class="rounded-t-[2rem] h-[220px] w-full" src={img_url} alt={img_alt} />
	<h4 class="px-8 pt-1 pb-6 text-left w-full">
		{heading}
	</h4>
</div>

<script lang="ts">
	export let heading: string = '';
	export let img_url: string = '/img/halley.jpeg';
	export let img_alt: string = '';

	$: minutes_ago = 12;
</script>
