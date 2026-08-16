<script lang="ts">
    import { onMount } from "svelte";
    import { themeState } from "$lib/theme.svelte";

    const toggleTheme = (): void => localStorage?.theme ? themeState.toggle() : undefined;
    onMount(() => themeState.init());
</script>

<button type="button" onclick={toggleTheme}>{String(themeState.type).charAt(0).toUpperCase() + String(themeState.type).slice(1)}</button>
