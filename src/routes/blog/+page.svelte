<script lang="ts">
    import type { PageProps } from './$types';
    import { setContext } from 'svelte';
    import { resolve } from '$app/paths';
    import { goto } from '$app/navigation';

    let { data }: PageProps = $props();
    setContext('data', () => data);
</script>

<section>
    {#each data.posts as post (post.data.id)}
        {const item = post.data}
        {const destructoredDate = item.date.split('-')}
            <button onclick={() => goto(resolve(`/blog/${item.slug}`))} class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl hover:cursor-pointer hover:bg-gray-500/10">

                <div class="w-full max-w-48 overflow-hidden rounded-lg shadow-md">
                    <img class="w-full h-48 object-contain" src={item.thumb} alt={item.slug} />
                </div>
                <div class="flex flex-col gap-2 items-center md:items-start">
                    <span class="text-center md:text-start text-2xl font-medium">{item.title}</span>
                    <span class="text-center md:text-start">{item.description}</span>
                    <span class="flex gap-2 font-thin italic text-gray-600 dark:text-gray-400">
                        <span>{destructoredDate[destructoredDate.length - 1]}</span><!-- day -->
                        <span>·</span>
                        <span>{destructoredDate[1]}</span> <!-- month -->
                        <span>·</span>
                        <span>{destructoredDate[0]}</span> <!-- year -->
                    </span>
                </div>
            </button>
    {/each}
</section>
