<div class="badge font-semibold bg-white text-center w-fit h-fit">
    {title}
</div>

<script lang="ts">
    export let title: string = "";
</script>

<style lang="postcss" scoped>
    .badge {
        @apply py-2.5 px-7;
        border: 2px solid #1D3307;
        border-radius: 27px;
        font-size: 20px;
        background: white;
    }
</style>