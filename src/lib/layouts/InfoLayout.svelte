<script lang="ts">
    let { children } = $props();
</script>

<section class="prose dark:prose-invert w-full max-w-full my-4 text-start">
    {@render children()}
</section>
