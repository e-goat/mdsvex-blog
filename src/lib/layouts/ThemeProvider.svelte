<script lang="ts">
    let { children } = $props();
</script>

<main class="flex items-center justify-center py-20 md:py-44 px-4 max-w-5xl mx-auto w-full min-w-0">
    {@render children()}
</main>
