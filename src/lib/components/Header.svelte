<script lang="ts">
    import { resolve } from '$app/paths';
</script>

<header
    class="fixed z-10 top-0 inset-x-0 bg-white/20 backdrop-blur-2xl border-b border-gray-200 py-2 md:py-6"
>
    <div class="max-w-5xl mx-auto px-4">
        <div class="flex items-center w-full relative min-h-12">
            <div class="flex-1">
                <div
                    class="absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-center size-12 rounded-full bg-indigo-950"
                >
                    <a class="header-item home-btn cursor-pointer rounded-full" href={resolve('/')}>
                        <img class="object-contain size-10" src="/logo.gif" alt="Logo" />
                    </a>
                </div>
                <div class="size-12 invisible pointer-events-none"></div>
            </div>

            <div>
                <a
                    class="header-item hover:bg-gray-400/10 p-4 rounded-2xl cursor-pointer"
                    href={resolve('/blog')}>Blog</a
                >
            </div>
            <div
                class="header-item hover:bg-gray-400/10 p-4 rounded-2xl text-gray-300 cursor-not-allowed"
            >
                Theme
            </div>
        </div>
    </div>
</header>
