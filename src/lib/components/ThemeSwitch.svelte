<script lang="ts">
    import { onMount } from 'svelte';
    import { themeState } from '$lib/theme.svelte';

    let open = $state(false);
    let root: HTMLDivElement | null = null;

    onMount(() => themeState.init());

    onMount(() => {
        const handlePointerDown = (event: PointerEvent) => {
            if (root && !root.contains(event.target as Node)) {
                open = false;
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                open = false;
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

<div bind:this={root} class="relative">
    <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onclick={() => {
            open = !open;
        }}
        class="header-item flex items-center gap-1 rounded-2xl px-3 py-2 text-sm transition-colors hover:bg-gray-400/10 dark:hover:bg-gray-400/30 sm:px-4 sm:py-3"
    >
        Theme
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={`opacity-50 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            ><path d="m6 9 6 6 6-6" /></svg
        >
    </button>

    <div
        class={`absolute right-0 top-full z-50 w-36 pt-2 transition-all duration-200 ${
            open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
    >
        <div
            class="flex flex-col p-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200 dark:border-gray-600 shadow-xl rounded-2xl"
        >
            <button
                onclick={() => themeState.toggle('light')}
                class="rounded-xl px-4 py-2 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                Light
            </button>
            <button
                onclick={() => themeState.toggle('dark')}
                class="rounded-xl px-4 py-2 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                Dark
            </button>
            <button
                onclick={() => themeState.toggle(themeState.getSysTheme())}
                class="rounded-xl px-4 py-2 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                System
            </button>
        </div>
    </div>
</div>
