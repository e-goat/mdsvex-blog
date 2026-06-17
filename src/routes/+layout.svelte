<script lang="ts">
    import './layout.css';
    import favicon from '$lib/assets/favicon.ico';
    import ThemeProvider from '$lib/layouts/ThemeProvider.svelte';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header />
<ThemeProvider>
    {@render children()}
</ThemeProvider>
<Footer />
