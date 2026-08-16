<script lang="ts">
    import { page } from '$app/state';
    import { resolve } from '$app/paths';

    const status = page.status || 500;
    const isServerError = status >= 500;
    const title = isServerError ? 'Something went wrong.' : 'We could not complete that request.';
    const description = isServerError
        ? 'An unexpected error interrupted this request. Please try again, or return to the home page.'
        : page.error?.message || 'Please check the address and try again.';
</script>

<section
    class="mx-auto flex min-h-[62vh] w-full max-w-3xl items-center px-4 py-10 sm:px-6 lg:px-8"
    aria-labelledby="error-title"
>
    <div
        class="w-full rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-black/20 sm:p-10"
    >
        <p
            class="inline-flex rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-rose-700 uppercase dark:text-rose-300"
        >
            Error {status}
        </p>

        <h1
            id="error-title"
            class="mt-5 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl"
        >
            {title}
        </h1>

        <p class="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
            {description}
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-3">
            <a
                href={resolve('/')}
                class="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200 dark:focus-visible:ring-offset-slate-900"
            >
                Back home
            </a>
            <button
                type="button"
                onclick={() => window.location.reload()}
                class="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-slate-600 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800 dark:focus-visible:ring-offset-slate-900"
            >
                Try again
            </button>
        </div>
    </div>
</section>
