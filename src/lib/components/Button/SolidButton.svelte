<!-- svelte-ignore a11y-click-events-have-key-events -->
<button
  class="px-10 py-4 font-semibold text-white text-lg rounded-[3rem] text-center bg-vibrant_green hover:opacity-90 flex items-center cursor-pointer w-fit {classes}"
  on:click={clickBtn}
>
  {title}
</button>

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let title : string = "Button";
  let classes : string = '';
  export {classes as class};

  const dispatch = createEventDispatcher();

  const clickBtn = () => {
    dispatch("click");
  }
</script>