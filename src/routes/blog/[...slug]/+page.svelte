<script lang="ts">
    import type { PageProps } from './$types';
    import { setContext } from 'svelte';
    import './highlight.css';

    let { data }: PageProps = $props();
    setContext('data', () => data);
</script>

<svelte:head>
    <title>{data.metadata.title} | Martin Duchev</title>
    <meta name="description" content={data.metadata.description} />
    <meta name="robots" content="index,follow" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.metadata.title} />
    <meta property="og:description" content={data.metadata.description} />
    <meta property="og:image" content={`/${data.metadata.thumb}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={data.metadata.title} />
    <meta name="twitter:description" content={data.metadata.description} />
    <meta name="twitter:image" content={`/${data.metadata.thumb}`} />
</svelte:head>

<!-- Check '$lib/layouts/PostLayout.svelte' if you want to edit this component -->
<data.post
    title={data.metadata.title}
    date={data.metadata.date}
    description={data.metadata.description}
/>
