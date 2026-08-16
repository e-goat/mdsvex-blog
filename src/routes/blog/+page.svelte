<script lang="ts">
    import type { PageProps } from './$types';
    import { setContext } from 'svelte';
    import { resolve } from '$app/paths';
    import { goto } from '$app/navigation';

    let { data }: PageProps = $props();
    setContext('data', () => data);
</script>

<section class="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
    <div class="mb-8 max-w-3xl">
        <p
            class="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300"
        >
            Blog
        </p>
        <h1
            class="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl"
        >
            Personal thoughts and field notes
        </h1>
        <p class="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
            This page collects my personal views on frameworks, tooling, architecture, and the
            trade-offs I run into while building software.
        </p>
    </div>

    <div class="space-y-4">
        {#each data.posts as post (post.id)}
            {const item = post}
            {const destructDate = item.date.split('-')}
            <button
                onclick={() => goto(resolve(`/blog/${item.slug}`))}
                class="flex flex-col items-center gap-6 rounded-2xl p-5 text-left transition-colors hover:cursor-pointer hover:bg-gray-500/10 dark:hover:bg-gray-300/30 sm:p-6 md:flex-row md:gap-8"
            >
                <div
                    class="w-full max-w-48 overflow-hidden rounded-xl border border-gray-200 shadow-md dark:border-gray-700 dark:bg-gray-100/30 sm:max-w-52"
                >
                    <img
                        class="h-44 w-full object-contain sm:h-48"
                        src={item.thumb}
                        alt={item.slug}
                    />
                </div>
                <div class="flex flex-col items-center gap-2 md:items-start">
                    <span
                        class="text-center text-2xl font-medium text-slate-950 dark:text-amber-50 md:text-start"
                        >{item.title}</span
                    >
                    <span
                        class="text-center text-sm leading-7 text-slate-600 dark:text-gray-100 md:text-start"
                    >
                        {item.description}
                    </span>
                    <span class="flex text-sm font-bold italic text-gray-600 dark:text-gray-50">
                        <span>{destructDate[destructDate.length - 1]}</span><!-- day -->
                        <span>·</span>
                        <span>{destructDate[1]}</span>
                        <!-- month -->
                        <span>·</span>
                        <span>{destructDate[0]}</span>
                        <!-- year -->
                    </span>
                    <span class="flex flex-wrap gap-2">
                        {#each item.tags as tag, index (tag)}
                            <div
                                class="rounded-lg border border-blue-400/20 bg-blue-400/10 p-1 text-nowrap text-xs shadow-md dark:border-blue-200/20 dark:bg-blue-200/20 dark:text-white"
                                data-tag-id={index}
                            >
                                {tag}
                            </div>
                        {/each}
                    </span>
                </div>
            </button>
        {/each}
    </div>
</section>
