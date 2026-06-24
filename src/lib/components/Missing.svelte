<script lang="ts">
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';
    import ErrorLogo from '$lib/assets/404.gif';
</script>

<div class="flex min-h-[60vh] flex-col items-center justify-center gap-12 p-6 text-center">
    <div class="flex flex-col items-center justify-center gap-6">
        <img
            class="size-56 object-cover rounded-full border-4 border-slate-800 shadow-2xl ring-4 ring-slate-500/20"
            src={ErrorLogo}
            alt="404 Cosmic Void"
        />
        <p class="text-xl font-medium max-w-md balance animate-fade-in">
            Whoops! We landed on the wrong place.
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
