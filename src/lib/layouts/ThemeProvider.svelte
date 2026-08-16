<script lang="ts">
    let { children } = $props();
</script>

<main class="dark:bg-gray-700">
    <section
        class="mx-auto flex w-full min-w-0 max-w-5xl items-center justify-center px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28"
    >
        {@render children()}
    </section>
</main>
