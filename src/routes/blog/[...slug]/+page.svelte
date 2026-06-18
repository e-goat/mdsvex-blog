<script lang="ts">
    import type { PageProps } from './$types';
    import { setContext } from 'svelte';
    import './highlight.css';

    let { data }: PageProps = $props();
    setContext('data', () => data);
</script>

<!-- Check '$lib/layouts/PostLayout.svelte' if you want to edit this component -->
<data.post
    title={data.metadata.title}
    date={data.metadata.date}
    description={data.metadata.description}
/>
