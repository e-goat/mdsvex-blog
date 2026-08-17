<script lang="ts">
    import { mount, unmount } from 'svelte';
    import Copy from '$lib/components/Copy.svelte';

    let { children, title, date, description } = $props();
    const sectionOffset = 96;

    type Heading = {
        id: string;
        level: number;
        text: string;
    };

    let headings = $state<Heading[]>([]);
    let activeHeading = $state<string | null>(null);

    function slugify(value: string) {
        return value
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    }

    function createTableOfContents(node: HTMLElement) {
        if (!date) {
            return;
        }

        const usedIds: Record<string, number> = {};
        const headingElements = Array.from(node.querySelectorAll<HTMLElement>('h2, h3'));

        headings = headingElements.map((heading) => {
            const text = heading.textContent?.trim() ?? '';
            const baseId = heading.id || slugify(text) || 'section';
            const duplicate = usedIds[baseId] ?? 0;
            const id = duplicate ? `${baseId}-${duplicate + 1}` : baseId;

            usedIds[baseId] = duplicate + 1;
            heading.id = id;
            heading.style.scrollMarginTop = `${sectionOffset}px`;

            return {
                id,
                level: Number(heading.tagName.slice(1)),
                text
            };
        });

        const updateActiveHeading = () => {
            const current = headingElements.filter(
                (heading) => heading.getBoundingClientRect().top <= sectionOffset
            );

            activeHeading = current.at(-1)?.id ?? headingElements[0]?.id ?? null;
        };

        const observer = new IntersectionObserver(updateActiveHeading, {
            rootMargin: `-${sectionOffset}px 0px -75% 0px`
        });

        headingElements.forEach((heading) => observer.observe(heading));
        updateActiveHeading();

        return {
            destroy() {
                observer.disconnect();
            }
        };
    }

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

<article
    class={`mx-auto w-full px-4 py-6 sm:px-6 lg:px-8 lg:py-8 ${date ? 'max-w-5xl' : 'max-w-4xl'}`}
>
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
        class={date
            ? 'lg:grid lg:grid-cols-[minmax(0,1fr)_12rem] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_14rem]'
            : ''}
    >
        <div
            class="prose max-w-none prose-slate dark:prose-invert prose-pre:bg-transparent prose-pre:my-0 prose-pre:p-0 prose-code:rounded-md prose-code:px-1 prose-code:py-0.5 prose-code:font-normal"
            use:createTableOfContents
            use:attachCopyButtons
        >
            {@render children()}
        </div>

        {#if headings.length}
            <aside class="hidden lg:block" aria-label="Table of contents">
                <div class="sticky top-24">
                    <nav aria-label="On this page">
                        <p
                            class="mb-3 text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase dark:text-slate-400"
                        >
                            On this page
                        </p>
                        <ul
                            class="max-h-[calc(100vh-8rem)] overflow-y-auto border-l border-slate-200 pb-1 dark:border-slate-700"
                        >
                            {#each headings as heading (heading.id)}
                                <li>
                                    <a
                                        href={`#${heading.id}`}
                                        aria-current={activeHeading === heading.id
                                            ? 'location'
                                            : undefined}
                                        onclick={() => {
                                            activeHeading = heading.id;
                                        }}
                                        class={`-ml-px block border-l py-1.5 pr-2 text-sm leading-5 transition-colors ${
                                            heading.level === 3 ? 'pl-6' : 'pl-4'
                                        } ${
                                            activeHeading === heading.id
                                                ? 'border-cyan-600 font-medium text-cyan-700 dark:border-cyan-300 dark:text-cyan-300'
                                                : 'border-transparent text-slate-500 hover:border-slate-400 hover:text-slate-800 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-200'
                                        }`}
                                    >
                                        {heading.text}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </nav>
                </div>
            </aside>
        {/if}
    </div>
</article>
