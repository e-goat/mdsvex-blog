import { browser } from '$app/environment';
import { init, locale, register } from 'svelte-i18n';

export const defaultLocale = 'bg';
export type AppLocale = 'en' | 'bg';

register('en', () => import('./locales/en.json'));
register('bg', () => import('./locales/bg.json'));

export function normalizeLocale(value: string | null | undefined): AppLocale {
    return value?.toLowerCase().startsWith('en') ? 'en' : 'bg';
}

function getCookieLocale(): AppLocale {
    const cookie = document.cookie
        .split('; ')
        .find((item) => item.startsWith('locale='))
        ?.split('=')[1];

    return normalizeLocale(cookie);
}

init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? getCookieLocale() : defaultLocale
});

export function setAppLocale(nextLocale: string) {
    const next = normalizeLocale(nextLocale);

    locale.set(next);

    if (browser) {
        document.cookie = `locale=${next}; path=/; max-age=31536000; samesite=lax`;
    }
}
