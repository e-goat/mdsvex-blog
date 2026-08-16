<script lang="ts">
    import { onMount } from 'svelte';
    import { themeState } from '$lib/theme.svelte';

    onMount(() => themeState.init());
</script>

<div class="relative group">
    <button
        class="header-item flex items-center gap-1 hover:bg-gray-400/10 dark:hover:bg-gray-400/30 p-4 rounded-2xl cursor-pointer transition-colors"
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
            class="opacity-50 transition-transform duration-200 group-hover:rotate-180"
            ><path d="m6 9 6 6 6-6" /></svg
        >
    </button>

    <div
        class="absolute right-0 top-full pt-2 w-36 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
    >
        <div
            class="flex flex-col p-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200 dark:border-gray-600 shadow-xl rounded-2xl"
        >
            <button
                onclick={() => themeState.toggle('light')}
                class="px-4 py-2 text-left rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
                Light
            </button>
            <button
                onclick={() => themeState.toggle('dark')}
                class="px-4 py-2 text-left rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
                Dark
            </button>
            <button
                onclick={() => themeState.toggle(themeState.getSysTheme())}
                class="px-4 py-2 text-left rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
                System
            </button>
        </div>
    </div>
</div>
