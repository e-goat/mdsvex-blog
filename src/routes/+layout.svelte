<script lang="ts">
    import './layout.css';
    import favicon from '$lib/assets/favicon.ico';
    import ThemeProvider from '$lib/layouts/ThemeProvider.svelte';

    let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<ThemeProvider>
    {@render children()}
</ThemeProvider>
