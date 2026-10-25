---
layout: article
---

<script lang="ts">
    import portrait from '$lib/assets/github-profile.jpeg';
    import Social from '$lib/components/Social.svelte';
    import { _ } from 'svelte-i18n';
</script>

<div
    class="about-welcome not-prose -mt-4 mb-8 overflow-hidden rounded-3xl border-4 border-slate-600 bg-gradient-to-br from-slate-50 via-white to-cyan-50 p-6 shadow-sm dark:border-mist-400 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 md:-mt-6 md:p-8 lg:-mt-10 lg:mb-12 lg:p-10"
>
    <div class="grid gap-6 md:grid-cols-[auto,1fr] md:items-center lg:grid-cols-[14rem,1fr] lg:gap-10">
        <img
            alt="Martin Duchev portrait"
            src={portrait}
            class="mx-auto size-36 rounded-full border-2 border-slate-600 object-cover shadow-lg dark:border-mist-200 p-2 md:mx-0 md:size-44 lg:size-52"
        />

        <div class="space-y-5 text-center md:text-left">
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                {$_('about.label')}
            </p>
            <h1 class="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 md:text-4xl">
                Martin Duchev
            </h1>
            <p class="max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300 lg:text-lg">
                {$_('about.intro')}
            </p>
            <Social />
        </div>
    </div>

</div>

<style>
    @keyframes about-welcome {
        from {
            opacity: 0;
            transform: translateY(0.75rem);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .about-welcome {
        animation: about-welcome 650ms cubic-bezier(0.22, 1, 0.36, 1) both;
    }

    @media (prefers-reduced-motion: reduce) {
        .about-welcome {
            animation: none;
        }
    }
</style>

<div class="not-prose grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
    <section>
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
            {$_('about.focus')}
        </p>
        <h2 class="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
            {$_('about.focusTitle')}
        </h2>
        <div class="mt-6 space-y-4 border-l border-slate-200 pl-5 dark:border-slate-700">
            <p class="text-sm leading-7 text-slate-700 dark:text-slate-300">
                {$_('about.focusItems.architecture')}
            </p>
            <p class="text-sm leading-7 text-slate-700 dark:text-slate-300">
                {$_('about.focusItems.implementations')}
            </p>
            <p class="text-sm leading-7 text-slate-700 dark:text-slate-300">
                {$_('about.focusItems.interfaces')}
            </p>
        </div>
    </section>

    <div class="grid gap-8">
        <section class="border-t border-slate-200 pt-6 dark:border-slate-700">
            <h2 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                {$_('about.stack')}
            </h2>
            <dl class="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                <div>
                    <dt class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        {$_('about.backend')}
                    </dt>
                    <dd class="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                        PHP, Node, Deno, Bun, Python, Laravel, Prisma, Drizzle ORM
                    </dd>
                </div>
                <div>
                    <dt class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        {$_('about.frontend')}
                    </dt>
                    <dd class="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                        JavaScript, React, Svelte/SvelteKit, Tailwind CSS
                    </dd>
                </div>
                <div>
                    <dt class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        {$_('about.aiTools')}
                    </dt>
                    <dd class="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                        Copilot CLI, Claude CLI, Cursor, Zed
                    </dd>
                </div>
                <div>
                    <dt class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        {$_('about.infrastructure')}
                    </dt>
                    <dd class="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                        Docker, Jenkins, Vercel, Netlify, Deno Deploy, DigitalOcean
                    </dd>
                </div>
            </dl>
        </section>

        <section class="border-t border-slate-200 pt-6 dark:border-slate-700">
            <h2 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                {$_('about.experience')}
            </h2>
            <ul class="mt-5 grid gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300 sm:grid-cols-2">
                <li>{$_('about.experienceItems.production')}</li>
                <li>{$_('about.experienceItems.apis')}</li>
                <li>{$_('about.experienceItems.database')}</li>
                <li>{$_('about.experienceItems.legacy')}</li>
            </ul>
        </section>
    </div>

</div>
