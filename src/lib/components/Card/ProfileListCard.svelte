<div class="flex flex-col max-w-[438px] bg-white items-start rounded-[2rem] border-1 border-[#0026071A] border-solid cursor-pointer {classes}">
	<img class="rounded-t-[2rem] w-full flex-1" src={img_url} alt={img_alt} />
	<div class="px-8 basis-[88px] font-semibold flex flex-col pt-6 pb-10" >
		<h4 class="font-semibold text-xl">
			{car_name}
		</h4>
        <h4 class="font-semibold text-xl">
			${car_price} {car_sold_status}
		</h4>
        <div class="flex gap-5 mt-5">
            <img src="/img/comments.svg" alt="message" />
            <p class="text-vibrant_green font-bold text-base">{related_messages} related messages</p>
        </div>
	</div>
</div>

<script lang="ts">
	export let car_name: string = "";
    export let car_price: string = "";
    export let car_sold_status: string = "";
    export let related_messages: string = "";
	export let img_url: string = "/img/halley.jpeg";
	export let img_alt: string = "";
	let classes : string = "";
	export {classes as class};
</script>
