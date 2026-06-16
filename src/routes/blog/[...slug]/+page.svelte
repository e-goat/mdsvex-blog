<script lang="ts">
    import type { PageProps } from './$types';
    import { setContext } from 'svelte';
    import './highlight.css';

    let { data }: PageProps = $props();
    setContext('data', () => data);
</script>

<article class="prose dark:prose-invert max-w-5xl mx-auto px-4">
    <nav class="p-6"><h1>{data.metadata.title}</h1></nav>
    <data.post />
</article>
