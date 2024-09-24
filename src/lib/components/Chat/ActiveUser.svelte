<div class="flex gap-x-5 px-7 py-[28.5px] bg-site_bg_color rounded-tr-[3rem]">
    <img class="w-10 h-10 rounded-full" src={active_user_image} alt="user" />
    <h4 class="font-semibold my-auto">
        {active_user_name}
    </h4>
</div>

<script lang="ts">
    export let active_user_image: string = "/img/halley.jpeg";
    export let active_user_name: string = "Alina K";
</script>