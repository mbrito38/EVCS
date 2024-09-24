<div class="card w-full flex flex-col gap-y-8 h-fit">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="flex justify-between cursor-pointer" on:click={() => expandItem()}>
        <p class="font-bold text-base">
            Security
        </p>
        <img src="/img/down-short-arrow.svg" alt="arrow" />
    </div>

    {#if isExpand}
        {#each securityItems as item }
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="cursor-pointer" on:click={() => selectItem(item.id)}>
                <p class="font-bold text-sm text-vibrant_green">
                    {item.title}
                </p>
            </div>
        {/each}
    {/if}
</div>

<script lang="ts">
    let isExpand: boolean = false;
    let securityItems = [
        { id: "change-password", title: "Change password" },
        { id: "join-partner", title: "Join Partner Program" },
        { id: "temp-deactivate", title: "Temporarily deactivate my account" },
        { id: "permanent-delete", title: "Permanently delete my account" }
    ];

    const expandItem = (): void => {
        isExpand = !isExpand;
    };

    const selectItem = (id: string): void => {};
</script>

<style lang="postcss" scoped>
  .card {
    @apply px-8 laptop:px-16 py-5 bg-white border-1 border-solid border-white
  }
</style>