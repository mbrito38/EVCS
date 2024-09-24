<div class="card w-full flex flex-col gap-y-8 h-fit">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="flex justify-between cursor-pointer" on:click={() => expandItem()}>
        <p class="font-bold text-base">
            Email Notifications
        </p>
        <img src="/img/down-short-arrow.svg" alt="arrow" />
    </div>

  {#if isExpand}
    {#each emailItems as item }
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="flex gap-x-5 cursor-pointer" on:click={() => selectItem(item.id)}>
        {#if configuredItems.includes(currentItem)}
            <img class="w-5 h-5" src="/img/fill-checkbox.svg" alt="empty" />
        {:else}
            <img class="w-5 h-5" src="/img/empty-checkbox.svg" alt="empty" />
        {/if}
        <p class="font-medium text-sm">
            {item.title}
        </p>
      </div>
    {/each}
  {/if}
</div>

<script lang="ts">
    let isExpand: boolean = false;
    let configuredItems: string[] = [];
    let currentItem: string = "";
    let emailItems = [
        { id: "messages", title: "Messages" },
        { id: "search-updates", title: "Saved Search Updates" },
        { id: "item-updates", title: "Saved Item Updates" },
        { id: "opt-in-news", title: "Opt-in to our news, research and reviews newsletter" },
        { id: "opt-in-member", title: "Opt-in to receive member- only benefits" }
    ];

    const expandItem = (): void => {
        isExpand = !isExpand;
    };

    const selectItem = (id: string): void => {
        if (configuredItems.includes(id)) {
            const removedItems = configuredItems.splice(configuredItems.indexOf(id), 1);
            configuredItems = removedItems;
            currentItem = "";
        } else {
            configuredItems.push(id);
            currentItem = id;
        }
    };
</script>

<style lang="postcss" scoped>
  .card {
    @apply px-8 laptop:px-16 py-5 bg-white border-1 border-solid border-white
  }
</style>