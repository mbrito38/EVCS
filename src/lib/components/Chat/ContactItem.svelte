<div class="flex gap-x-5 py-4 pl-2 pr-12 cursor-pointer rounded-tl-full rounded-bl-full bg-{active ? 'site_bg_color' : 'white'}">
    <img class="w-16 h-16 rounded-full" src={user_image} alt="user" />

    <div class="flex flex-col gap-y-2 w-full">
        <div class="flex justify-between">
            <h4 class="font-semibold text-primaryfontcolor">
                {user_name}
            </h4>
            <p class="text-base font-medium text-warm_grey">
                {chat_date}
            </p>
        </div>
        <p class="text-base font-medium text-warm_grey">
            Message placeholder text…
        </p>
    </div>
</div>

<script lang="ts">
    export let active: boolean = false;
    export let user_image: string = "/img/halley.jpeg";
    export let user_name: string = "Alina K";
    export let chat_date: string = "15:54";
</script>