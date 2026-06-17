<script lang="ts">
    import type { PageProps } from './$types';
    import { setContext } from 'svelte';
    import { resolve } from '$app/paths';
    import { goto } from '$app/navigation';

    let { data }: PageProps = $props();
    setContext('data', () => data);
</script>

<section>
    <ul>
        {#each data.posts as post (post.data.id)}
            <li>
                <button
                    onclick={() => goto(resolve(`/blog/${post.data.slug}`))}
                    class="hover:underline hover:cursor-pointer"
                >
                    <span>{post.data.title}</span>
                </button>
            </li>
        {/each}
    </ul>
</section>
