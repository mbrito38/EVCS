<section class="w-full flex justify-center">
    <div class="container flex flex-col gap-y-6 items-center pb-12 pt-12">
        <div class="flex flex-col laptop:flex-row justify-between gap-x-5 gap-y-1 tablet:gap-y-5 w-full mb-8">
            <EmailNotificationDropdown />
            <SecurityDropdown />
            <HelpDropdown />
        </div>
    </div>
</section>

<script lang="ts">
    import EmailNotificationDropdown from "$lib/components/Dropdown/EmailNotificationDropdown.svelte";
    import SecurityDropdown from "$lib/components/Dropdown/SecurityDropdown.svelte";
    import HelpDropdown from "$lib/components/Dropdown/HelpDropdown.svelte";
</script>