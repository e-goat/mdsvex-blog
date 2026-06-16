<script lang="ts">
    import type { PageProps } from './$types';
    import { setContext } from 'svelte';
    import { resolve } from '$app/paths';
    import { goto } from '$app/navigation';

    let { data }: PageProps = $props();
    setContext('data', () => data);
</script>

<div class="flex flex-col items-center">
    {#each data.posts as post (post.data.id)}
        <button
            onclick={() => goto(resolve(`/blog/${post.data.slug}`))}
            class="flex flex-col hover:underline hover:cursor-pointer m-2 p-4 bg-amber-500/25 rounded-lg"
        >
            <span>{post.data.title}</span>
        </button>
    {/each}
</div>
