type ThemePreference = 'light' | 'dark' | 'system';
type ThemeColor = Exclude<ThemePreference, 'system'>;

const handleSystemThemeChange = (event: MediaQueryListEvent) => {
    if (themeState.preference === 'system') {
        themeState.apply(event.matches ? 'dark' : 'light');
    }
};

export const themeState = $state({
    type: 'light' as ThemeColor,
    preference: 'system' as ThemePreference,
    mediaQuery: null as MediaQueryList | null,

    init() {
        if (typeof window === 'undefined') return;

        const savedTheme = localStorage.getItem('theme');
        this.preference =
            savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system'
                ? savedTheme
                : 'system';

        this.mediaQuery?.removeEventListener('change', handleSystemThemeChange);
        this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        this.mediaQuery.addEventListener('change', handleSystemThemeChange);
        this.apply();
    },

    apply(resolvedTheme?: ThemeColor) {
        if (typeof window === 'undefined') return;

        const color =
            resolvedTheme || (this.preference === 'system' ? this.getSysTheme() : this.preference);
        document.documentElement.dataset.theme = color;
        this.type = color;
    },

    toggle(preference?: ThemePreference): void {
        if (typeof window === 'undefined') return;

        const nextPreference =
            preference || (this.type === 'dark' ? ('light' as ThemePreference) : 'dark');

        this.preference = nextPreference;
        localStorage.setItem('theme', nextPreference);
        this.apply();
    },

    getSysTheme(): ThemeColor {
        if (typeof window === 'undefined' || !window.matchMedia) {
            return 'light';
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
});
