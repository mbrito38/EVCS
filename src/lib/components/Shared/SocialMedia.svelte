<div class="flex gap-x-9 social-media-icons {classes}">
    <a href="/">
        <img src="/img/Facebook.svg" alt="Facebook" />
    </a>
    <a href="/">
        <img src="/img/Twitter.svg" alt="Twitter" />
    </a>
    <a href="/">
        <img src="/img/Instagram.svg" alt="Instagram" />
    </a>
    <a href="/">
        <img src="/img/YouTube.svg" alt="YouTube" />
    </a>
</div>

<script lang="ts">
    let classes : string = '';
    export {classes as class};
</script>

<style lang="postcss">
	.social-media-icons {
		a {
			@apply items-center flex;
			img {
				@apply w-9;
			}
		}
	}
</style>