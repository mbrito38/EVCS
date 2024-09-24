{#if block.type === 'h2'}
    <h2>{blocktext}</h2>
{:else if block.type === 'h3'}
    <h3>{blocktext}</h3>
{:else}
    <p>{blocktext}</p>
{/if}

<script lang="ts" >
    export let block : any;
    const blocktext = block.children[0]?.text;
</script>