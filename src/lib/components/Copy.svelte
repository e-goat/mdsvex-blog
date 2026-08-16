<script lang="ts">
    import { onDestroy } from 'svelte';

    let { text }: { text: string } = $props();

    let copied = $state(false);
    let resetTimer: ReturnType<typeof setTimeout> | undefined;

    async function copyText() {
        await navigator.clipboard.writeText(text);
        copied = true;

        if (resetTimer) clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
            copied = false;
        }, 1500);
    }

    onDestroy(() => {
        if (resetTimer) clearTimeout(resetTimer);
    });
</script>

<button
    type="button"
    class="rounded-full border border-white/15 bg-slate-950/90 px-3 py-1 text-xs font-semibold text-slate-100 shadow-lg shadow-slate-950/20 transition hover:border-cyan-300/50 hover:text-cyan-100"
    aria-label={copied ? 'Copied code snippet' : 'Copy code snippet'}
    onclick={copyText}
>
    {copied ? 'Copied' : 'Copy'}
</button>
