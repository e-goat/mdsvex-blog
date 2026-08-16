export const themeState = $state({
    type: 'light',

    init() {
        if (typeof window !== 'undefined') {
            if (!('theme' in localStorage)) localStorage.theme = 'light';

            const initialThemeLoad = localStorage.theme;
            document.documentElement.dataset.theme = initialThemeLoad;
            this.type = initialThemeLoad;
        }
    },

    toggle(color: string | undefined = undefined): void {
        const currentTheme = localStorage?.theme || this.type;
        let themeAfterEvent;

        if (color !== undefined) {
            themeAfterEvent = color;
        } else {
            themeAfterEvent = currentTheme === 'dark' ? 'light' : 'dark';
        }

        localStorage.theme = themeAfterEvent;
        document.documentElement.dataset.theme = themeAfterEvent;
        this.type = themeAfterEvent;
    },

    getSysTheme() {
        if (!window.matchMedia) {
            return 'light';
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
});
