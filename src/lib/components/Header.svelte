<script lang="ts">
    import { resolve } from "$app/paths";
</script>

<header class="fixed z-10 top-0 inset-x-0 bg-white border-b border-gray-200">
    <div class="max-w-5xl mx-auto px-4">
        <div class="flex items-center gap-4 w-full">
            <div class="flex-1">
                <a href={resolve('/')}>home</a>
            </div>
            <div>
                <a href={resolve('/blog')}>Blog</a>
            </div>
            <div class="text-gray-300 cursor-not-allowed">Theme</div>
        </div>
    </div>
</header>
