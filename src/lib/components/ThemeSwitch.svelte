<script lang="ts">
    import { onMount } from "svelte";
    let themeType = $state('light');
    // localStorage.theme = "light";
    // localStorage.theme = "dark";
    // localStorage.removeItem("theme");
    // window.matchMedia("(prefers-color-scheme: light)").matches
    // window.matchMedia("(prefers-color-scheme: dark)").matches

    const toggleTheme = (): void => {
        const currentTheme = localStorage?.theme;
        if (currentTheme) {
            let themeAfterEvent = currentTheme === "dark" ? localStorage.theme = "light" : localStorage.theme = "dark";

            document.documentElement.dataset.theme = themeAfterEvent;
            themeType = themeAfterEvent;
        }
    }

    onMount(() => {
        if (!("theme" in localStorage)) localStorage.theme = "light";

        const initialThemeLoad = localStorage.theme;
        document.documentElement.dataset.theme = initialThemeLoad;
        themeType = initialThemeLoad;
    });
</script>

<button type="button" onclick={toggleTheme}>{String(themeType).charAt(0).toUpperCase() + String(themeType).slice(1)}</button>
