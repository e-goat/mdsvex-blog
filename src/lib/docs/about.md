---
layout: article
---

<script lang="ts">
    import portrait from '$lib/assets/github-profile.jpeg';
    import Social from '$lib/components/Social.svelte';
</script>

<div
    class="not-prose mb-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-cyan-50 p-6 shadow-sm dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 md:mb-8 md:p-8 lg:-mt-2 lg:mb-10 lg:p-10"
>
    <div class="grid gap-6 md:grid-cols-[auto,1fr] md:items-center lg:gap-8">
        <img
            alt="Martin Duchev portrait"
            src={portrait}
            class="mx-auto size-36 rounded-full border-4 border-white object-cover shadow-lg dark:border-slate-700 md:mx-0 md:size-40 lg:size-44"
        />

        <div class="space-y-4 text-center md:text-left">
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                About
            </p>
            <h1 class="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                Martin Duchev
            </h1>
            <p class="max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300">
                I build reliable, maintainable web applications and care about clean architecture,
                practical trade-offs, and code that another engineer can pick up without friction.
            </p>
            <Social />
        </div>
    </div>

</div>

## Focus

- Clean architecture over accidental complexity.
- Practical implementations that are easy to maintain.
- Interfaces that stay usable on desktop and mobile.

## Stack

- Backend: PHP, Node, Deno, Bun, Python, Laravel, Prisma, Drizzle ORM
- Frontend: JavaScript, React, Svelte/SvelteKit, Tailwind CSS
- AI tools: Copilot CLI, Claude CLI, Cursor, Zed
- Infrastructure: Docker, Jenkins, Vercel, Netlify, Deno Deploy, DigitalOcean

## Experience

- Designed and shipped production applications end to end.
- Built REST APIs and integrated third-party services.
- Improved database performance through query and schema work.
- Refactored legacy codebases without overengineering the fix.
