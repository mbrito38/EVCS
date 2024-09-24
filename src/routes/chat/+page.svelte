<div class="w-full flex items-center flex-col bg-site_bg_color">
    <section class="w-full hidden laptop:flex justify-center bg-white">
        <div class="container w-full flex items-center pt-12 pb-8">
            <div class="w-full">
                <Search />
            </div>
            <h1 class="font-bold w-full text-center">
                Chats
            </h1>
            <div class="w-full flex justify-end my-auto">
                <img class="w-9 h-9 cursor-pointer" src="/img/edit.svg" alt="edit" />
            </div>
        </div>
    </section>
    <section class="mt-8 laptop:mt-0 min-w-full flex justify-center bg-site_bg_color laptop:bg-white">
        <div class="laptop:container w-full flex mb-8">
            <div class="flex-[2] bg-white hidden laptop:flex flex-col">
                <ContactItem
                    active={true}
                    user_image="/img/halley.jpeg"
                    user_name="Alina K"
                    chat_date="15:54"
                />
                <ContactItem
                    active={false}
                    user_image="/img/halley.jpeg"
                    user_name="John S"
                    chat_date="Tues"
                />
                <ContactItem
                    active={false}
                    user_image="/img/halley.jpeg"
                    user_name="Mary J"
                    chat_date="Tues"
                />
                <ContactItem
                    active={false}
                    user_image="/img/halley.jpeg"
                    user_name="Alina K"
                    chat_date="Tues"
                />
                <ContactItem
                    active={false}
                    user_image="/img/halley.jpeg"
                    user_name="John S"
                    chat_date="Tues"
                />
                <ContactItem
                    active={false}
                    user_image="/img/halley.jpeg"
                    user_name="Mary J"
                    chat_date="Tues"
                />
                <ContactItem
                    active={false}
                    user_image="/img/halley.jpeg"
                    user_name="John S"
                    chat_date="Tues"
                />
            </div>
            <div class="flex-[3] bg-white laptop:bg-site_bg_color min-h-[680px] flex flex-col justify-between items-center">
                <div class="w-full flex justify-center bg-site_bg_color rounded-tr-[3rem] rounded-bl-[30px] rounded-br-[30px] relative">
                    <div class="container flex-col laptop:min-w-full">
                        <ActiveUser />
                        <TypeItem />
                    </div>
                </div>
                <div class="container justify-center px-7 w-full">
                    <div class="px-7 py-4 mb-7 bg-site_bg_color laptop:bg-white rounded-full w-full flex justify-between gap-x-4">
                        <input
                            type="text"
                            class="w-full focus:outline-none focus-within:outline-none focus-visible:outline-none text-sm font-medium bg-site_bg_color laptop:bg-white"
                        >
                        <img class="h-4 cursor-pointer my-auto" src="/img/Arrow.png" alt="send" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<script lang="ts">
    import Search from "$lib/components/Shared/Search.svelte";
    import ContactItem from "$lib/components/Chat/ContactItem.svelte";
    import TypeItem from "$lib/components/Chat/TypeItem.svelte";
	import ActiveUser from "$lib/components/Chat/ActiveUser.svelte";
</script>