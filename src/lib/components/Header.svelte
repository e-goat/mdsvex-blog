<script lang="ts">
    import { onMount } from 'svelte';
    import { resolve } from '$app/paths';
    import ThemeSwitch from './ThemeSwitch.svelte';
    import LanguageSwitch from './LanguageSwitch.svelte';
    import { _ } from 'svelte-i18n';

    let mobileMenuOpen = $state(false);
    let root: HTMLElement | null = null;

    onMount(() => {
        const handlePointerDown = (event: PointerEvent) => {
            if (root && !root.contains(event.target as Node)) {
                mobileMenuOpen = false;
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                mobileMenuOpen = false;
            }
        };

        document.addEventListener('pointerdown', handlePointerDown, true);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown, true);
            document.removeEventListener('keydown', handleKeyDown);
        };
    });
</script>

<header
    class="fixed top-0 inset-x-0 z-20 overflow-x-clip border-b-2 border-gray-200 bg-white/20 py-2 text-sm backdrop-blur-2xl dark:border-gray-400 dark:text-amber-50"
>
    <div bind:this={root} class="mx-auto max-w-5xl px-3 sm:px-4">
        <div class="flex items-center justify-between gap-3">
            <a
                class="header-item flex size-11 items-center justify-center rounded-full bg-indigo-950"
                href={resolve('/')}
            >
                <img class="size-9 object-contain" src="/logo.gif" alt="Logo" />
            </a>

            <div class="flex items-center gap-2 sm:hidden">
                <ThemeSwitch />
                <LanguageSwitch />
                <button
                    type="button"
                    aria-expanded={mobileMenuOpen}
                    aria-label={$_('nav.toggle')}
                    onclick={() => {
                        mobileMenuOpen = !mobileMenuOpen;
                    }}
                    class="header-item flex h-11 w-11 items-center justify-center rounded-2xl transition-colors hover:bg-gray-400/10 dark:hover:bg-gray-400/30"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class={`transition-transform duration-200 ${
                            mobileMenuOpen ? 'rotate-90' : ''
                        }`}
                    >
                        <path d="M4 6h16" />
                        <path d="M4 12h16" />
                        <path d="M4 18h16" />
                    </svg>
                </button>
            </div>

            <div class="hidden items-center gap-2 sm:flex">
                <a
                    class="header-item whitespace-nowrap rounded-2xl px-4 py-3 transition-colors hover:bg-gray-400/10 dark:hover:bg-gray-400/30"
                    href={resolve('/blog')}
                >
                    {$_('nav.blog')}
                </a>
                <a
                    class="header-item whitespace-nowrap rounded-2xl px-4 py-3 transition-colors hover:bg-gray-400/10 dark:hover:bg-gray-400/30"
                    href={resolve('/projects')}
                >
                    {$_('nav.projects')}
                </a>
                <ThemeSwitch />
                <LanguageSwitch />
            </div>
        </div>

        {#if mobileMenuOpen}
            <div class="relative sm:hidden">
                <div
                    class="absolute right-0 top-3 z-50 w-44 overflow-hidden rounded-3xl border border-gray-200 bg-white/95 p-2 shadow-2xl backdrop-blur-xl dark:border-gray-600 dark:bg-gray-900/95"
                >
                    <a
                        class="block rounded-2xl px-4 py-3 transition-colors hover:bg-gray-400/10 dark:hover:bg-gray-400/30"
                        href={resolve('/blog')}
                        onclick={() => {
                            mobileMenuOpen = false;
                        }}
                    >
                        {$_('nav.blog')}
                    </a>
                    <a
                        class="block rounded-2xl px-4 py-3 transition-colors hover:bg-gray-400/10 dark:hover:bg-gray-400/30"
                        href={resolve('/projects')}
                        onclick={() => {
                            mobileMenuOpen = false;
                        }}
                    >
                        {$_('nav.projects')}
                    </a>
                </div>
            </div>
        {/if}
    </div>
</header>
