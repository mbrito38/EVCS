<div class="w-full flex justify-center py-4" style="background-color: {background_color}" >
  <p style="color : {text_color}">
    {content}
  </p>
</div>

<script lang="ts">
  export let content: string;
  export let text_color: string;
  export let background_color: string;
</script>