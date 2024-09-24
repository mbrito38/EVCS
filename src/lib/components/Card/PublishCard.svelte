<div class="flex flex-col max-w-[438px] bg-white items-start rounded-[2rem] border-1 border-[#0026071A] border-solid cursor-pointer {classes}">
	<img class="rounded-t-[2rem] w-full flex-1" src={img_url} alt={img_alt} />
	<div class="px-8 basis-[88px] font-semibold flex items-center" >
		<h4>
			{header_text}
		</h4>
	</div>
</div>

<script lang="ts">
	export let header_text: string = '';
	export let img_url: string = '/img/halley.jpeg';
	export let img_alt: string = '';
	let classes : string = '';
	export {classes as class};
</script>
