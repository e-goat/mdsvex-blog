<script lang="ts">
    import { page } from '$app/state';
    import { resolve } from '$app/paths';
    import { goto } from '$app/navigation';

    const errorMessage = page.error?.message || 'Something went wrong on our end...';
</script>

<div class="flex min-h-[60vh] flex-col items-center justify-center gap-8 p-6 text-center">
    <div class="flex flex-col items-center justify-center gap-4">
        <span
            class="text-xl font-mono tracking-widest text-red-500 uppercase bg-red-500/10 px-3 py-1 rounded-full"
        >
            Error {page.status}
        </span>

        <h1 class="text-2xl font-semibold">System Anomaly</h1>

        <p class="text-base max-w-sm balance">
            {errorMessage}
        </p>
    </div>

    <button
        onclick={() => goto(resolve(`/`))}
        type="button"
        class="group relative h-12 min-w-32 px-6 rounded-xl border border-slate-700 bg-slate-900 font-medium text-slate-300 transition-all duration-200 ease-in-out hover:border-slate-500 hover:text-white hover:shadow-lg hover:shadow-slate-500/10 active:scale-95 cursor-pointer"
    >
        Go back
    </button>
</div>
