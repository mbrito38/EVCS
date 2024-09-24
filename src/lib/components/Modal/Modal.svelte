{#if show}
    <div class="fixed z-10 w-[440px] h-[530px] rounded-3xl bg-white" use:clickOutside={() => show = false} >
        <slot />
    </div>
{/if}

<script lang="ts">
    import { clickOutside } from "svelte-use-click-outside";

    export let show = false;
</script>