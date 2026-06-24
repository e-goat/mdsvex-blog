<script lang="ts">
    import { page } from '$app/state';
    import Missing from '$lib/components/Missing.svelte';
    import Error from '$lib/components/Error.svelte';
</script>

{#if page.status === 404}
    <Missing />
{:else}
    <Error />
{/if}
