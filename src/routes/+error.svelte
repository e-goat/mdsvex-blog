<script lang="ts">
    import { page } from '$app/state';
    import Missing from '$lib/components/Missing.svelte';
    import Error from '$lib/components/Error.svelte';
</script>

<svelte:head>
    <title>{page.status === 404 ? 'Page not found' : 'Something went wrong'} | Martin Duchev</title>
    <meta name="robots" content="noindex" />
</svelte:head>

{#if page.status === 404}
    <Missing />
{:else}
    <Error />
{/if}
