<script lang="ts">
    import { page } from '$app/state';
    import Missing from '$lib/components/Missing.svelte';
    import Error from '$lib/components/Error.svelte';
    import { _ } from 'svelte-i18n';
</script>

<svelte:head>
    <title
        >{page.status === 404 ? $_('errors.pageNotFound') : $_('errors.somethingWentWrong')} | Martin
        Duchev</title
    >
    <meta name="robots" content="noindex" />
</svelte:head>

{#if page.status === 404}
    <Missing />
{:else}
    <Error />
{/if}
