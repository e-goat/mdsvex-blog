<script lang="ts">
    import { mount, unmount } from 'svelte';
    import Copy from '$lib/components/Copy.svelte';

    let { children, title, date, description } = $props();

    function attachCopyButtons(node: HTMLElement) {
        const buttons = Array.from(node.querySelectorAll('pre')).map((pre) => {
            const code = pre.querySelector('code');
            const parent = pre.parentElement;
            if (!code || !parent) return undefined;

            const shell = document.createElement('div');
            shell.className = 'code-shell';
            const host = document.createElement('div');
            host.className = 'copy-host';
            parent.insertBefore(shell, pre);
            shell.append(pre, host);

            return mount(Copy, {
                target: host,
                props: {
                    text: code.textContent ?? ''
                }
            });
        });

        return {
            destroy() {
                buttons.forEach((instance) => {
                    if (instance) unmount(instance);
                });
            }
        };
    }
</script>

<article class="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <header class="mb-10 border-b border-slate-200/70 pb-8 dark:border-slate-700">
        {#if date}
            <p
                class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300"
            >
                Blog post
            </p>
        {/if}
        <h1
            class="mb-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl"
        >
            {title}
        </h1>
        <p class="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            {description}
        </p>
        {#if date}
            <time
                class="mt-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
                {date}
            </time>
        {/if}
    </header>

    <div
        class="prose max-w-none prose-slate dark:prose-invert prose-pre:bg-transparent prose-pre:p-0 prose-pre:my-0 prose-code:rounded-md prose-code:px-1 prose-code:py-0.5 prose-code:font-normal"
        use:attachCopyButtons
    >
        {@render children()}
    </div>
</article>
