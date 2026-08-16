export const themeState = $state({
    type: 'light',

    init() {
        if (typeof window !== 'undefined') {
            if (!("theme" in localStorage)) localStorage.theme = "light";

            const initialThemeLoad = localStorage.theme;
            document.documentElement.dataset.theme = initialThemeLoad;
            this.type = initialThemeLoad;
        }
    },

    toggle() {
        const currentTheme = localStorage?.theme || this.type;
        const themeAfterEvent = currentTheme === "dark" ? "light" : "dark";
        localStorage.theme = themeAfterEvent;
        document.documentElement.dataset.theme = themeAfterEvent;
        this.type = themeAfterEvent;
    }
});
