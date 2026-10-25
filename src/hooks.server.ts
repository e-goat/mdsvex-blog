import type { Handle } from '@sveltejs/kit';
import { locale } from 'svelte-i18n';
import { defaultLocale, normalizeLocale } from '$lib/i18n';

export const handle: Handle = async ({ event, resolve }) => {
    const lang = normalizeLocale(event.cookies.get('locale') ?? defaultLocale);
    event.cookies.set('locale', lang, {
        path: '/',
        maxAge: 31536000,
        sameSite: 'lax'
    });
    await locale.set(lang);

    return resolve(event);
};
