<script lang="ts">
    import { locale, _ } from 'svelte-i18n';
    import { setAppLocale, type AppLocale } from '$lib/i18n';

    const languages: { code: AppLocale; label: string }[] = [
        { code: 'bg', label: 'BG' },
        { code: 'en', label: 'EN' }
    ];
</script>

<div
    class="flex items-center rounded-2xl border border-gray-200/70 bg-white/30 p-1 dark:border-gray-600/70 dark:bg-gray-800/30"
    aria-label={$_('language.label')}
>
    {#each languages as language (language.code)}
        <button
            type="button"
            class={`rounded-xl px-2 py-1 text-xs font-semibold transition-colors sm:px-2.5 sm:py-1.5 ${
                $locale === language.code
                    ? 'bg-slate-950 text-white dark:bg-cyan-300 dark:text-slate-950'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-pressed={$locale === language.code}
            aria-label={$_(`language.${language.code}`)}
            onclick={() => setAppLocale(language.code)}
        >
            {language.label}
        </button>
    {/each}
</div>
