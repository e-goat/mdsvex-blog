<script lang="ts">
    import type { PageProps } from './$types';
    import { setContext } from 'svelte';
    import './highlight.css';
    import { _ } from 'svelte-i18n';

    let { data }: PageProps = $props();
    setContext('data', () => data);
</script>

<svelte:head>
    <title>{$_(`posts.${data.metadata.slug}.title`)} | Martin Duchev</title>
    <meta name="description" content={$_(`posts.${data.metadata.slug}.description`)} />
    <meta name="robots" content="index,follow" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={$_(`posts.${data.metadata.slug}.title`)} />
    <meta property="og:description" content={$_(`posts.${data.metadata.slug}.description`)} />
    <meta property="og:image" content={`/${data.metadata.thumb}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={$_(`posts.${data.metadata.slug}.title`)} />
    <meta name="twitter:description" content={$_(`posts.${data.metadata.slug}.description`)} />
    <meta name="twitter:image" content={`/${data.metadata.thumb}`} />
</svelte:head>

<!-- Check '$lib/layouts/PostLayout.svelte' if you want to edit this component -->
<data.post
    title={$_(`posts.${data.metadata.slug}.title`)}
    date={data.metadata.date}
    description={$_(`posts.${data.metadata.slug}.description`)}
/>
