<script lang="ts">
    import { resolve } from '$app/paths';
    import ErrorLogo from '$lib/assets/404.gif';
    import { _ } from 'svelte-i18n';
</script>

<section
    class="mx-auto flex min-h-[62vh] w-full max-w-5xl items-center px-4 py-10 sm:px-6 lg:px-8"
    aria-labelledby="missing-title"
>
    <div
        class="grid w-full items-center gap-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-black/20 sm:p-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14 lg:p-12"
    >
        <div class="order-2 text-center lg:order-1 lg:text-left">
            <p
                class="text-xs font-semibold tracking-[0.24em] text-cyan-700 uppercase dark:text-cyan-300"
            >
                {$_('errors.notFoundLabel')}
            </p>
            <h1
                id="missing-title"
                class="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl"
            >
                {$_('errors.missingTitle')}
            </h1>
            <p
                class="mx-auto mt-5 max-w-lg text-base leading-8 text-slate-600 dark:text-slate-300 lg:mx-0"
            >
                {$_('errors.missingDescription')}
            </p>
            <div class="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a
                    href={resolve('/')}
                    class="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200 dark:focus-visible:ring-offset-slate-900"
                >
                    {$_('errors.backHome')}
                </a>
                <a
                    href={resolve('/blog')}
                    class="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-slate-600 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800 dark:focus-visible:ring-offset-slate-900"
                >
                    {$_('errors.browseBlog')}
                </a>
            </div>
        </div>
        <img
            class="order-1 mx-auto size-40 rounded-3xl border border-slate-200 object-cover shadow-lg shadow-slate-900/10 dark:border-slate-700 dark:shadow-black/30 sm:size-52 lg:order-2 lg:size-64"
            src={ErrorLogo}
            alt="A small astronaut floating in space"
        />
    </div>
</section>
