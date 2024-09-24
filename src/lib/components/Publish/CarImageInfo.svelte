<div class="flex flex-col gap-y-5 laptop:flex laptop:flex-row gap-x-5 items-center {classes}">
    <img class="main-image" src="/img/halley.jpeg" alt="car" />
    <div class="flex h-full flex-row gap-x-8 laptop:flex-col gap-y-3">
        <img class="sub-image" src="/img/halley.jpeg" alt="car" />
        <img class="sub-image" src="/img/halley.jpeg" alt="car" />
        <img class="sub-image" src="/img/halley.jpeg" alt="car" />
    </div>
</div>

<script lang="ts">
    let classes : string = '';
    export {classes as class};
</script>

<style lang="postcss" scoped>
    .main-image {
        @apply w-full laptop:w-[493px] desktop:min-w-[543px] laptop:h-[343px] border-1 border-solid border-[#0D8200] rounded-[30px];
    }
    .sub-image {
        @apply flex-1 w-16 laptop:w-[105px] laptop:border-1 border-solid border-[#0D8200] rounded-[15px];
    }
</style>