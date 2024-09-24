<div class="flex justify-center items-center tablet:w-[374px] p-4
laptop:w-[685px] desktop:w-[900px] laptop:h-[293px] desktop:h-[385px] laptop:p-6 desktop:p-12 bg-transparent plate-container {classes}">
    <div class="plate h-full flex justify-center items-center py-9 p-6 laptop:py-0 laptop:p-12 w-full bg-transparent" >
        <input class="h-full w-full bg-transparent" placeholder="XXXXXX" >
    </div>
</div>

<script lang="ts">
    let classes : string = '';
    export {classes as class};
</script>

<style lang="postcss" scoped>
    .plate-container {
        border: #2FA304 solid 5px;
        border-radius: 2rem;
    }

    input {
        @apply text-center font-bold laptop:pb-6 text-[50px] tablet:text-[66px] laptop:text-[121px] desktop:text-[158px];
        color: #2FA304;
        border-bottom: rgba(2,47,2, 0.45) solid 2px;
        &::placeholder {
            color: rgba(2,47,2, 0.45);
        }
    }

    .plate {
        position: relative;

        &:before, &:after {
            content: "";
            position: absolute;
            height: 100%;
            width: 20px;
            top: 0px;
            background-image: radial-gradient(circle at center, #2FA304 6px, transparent 6px), radial-gradient(circle at center, #2FA304 6px, transparent 6px);
            background-size: 20px 20px;
            background-position: top center, bottom center;
            background-repeat: no-repeat;
            @screen laptop {
                background-image: radial-gradient(circle at center, #2FA304 8px, transparent 8px), radial-gradient(circle at center, #2FA304 8px, transparent 8px);
            }
        }

        &:before {
            left: 0px;
        }
        &:after {
            right: 0px;
        }
    }


</style>