<div class="w-full flex items-center flex-col">
    <section class="w-full flex justify-center bg-white">
        <div class="container flex flex-col gap-y-6 items-center pt-10 pb-[50px] desktop:pt-20 desktop:pb-15">
            <h1 class="font-bold text-center">
                Edit Profile
            </h1>
            <ProfileDropdown on:select={selectProfileItem} />
        </div>
    </section>
    {#if currentProfileItem === "basic-info"}
        <BasicProfile />
    {:else if currentProfileItem === "listings"}
        <ListingsProfile />
    {:else if currentProfileItem === "interests"}
        <InterestsProfile />
    {:else if currentProfileItem === "garage"}
        <GarageProfile />
    {:else if currentProfileItem === "settings"}
        <SettingsProfile />
    {/if}
</div>

<script lang="ts">
	import ProfileDropdown from "$lib/components/Dropdown/ProfileDropdown.svelte";
    import BasicProfile from "$lib/components/Profile/BasicProfile.svelte";
    import ListingsProfile from "$lib/components/Profile/ListingsProfile.svelte";
    import InterestsProfile from "$lib/components/Profile/InterestsProfile.svelte";
    import GarageProfile from "$lib/components/Profile/GarageProfile.svelte";
    import SettingsProfile from "$lib/components/Profile/SettingsProfile.svelte";

    let currentProfileItem: string = "basic-info";

    const selectProfileItem = (event: any): void => {
        currentProfileItem = event.detail.item;
    };
</script>

<style lang="postcss" >
    :global {
        footer {
            display: none !important; /*no footer here*/
        }
    }
</style>