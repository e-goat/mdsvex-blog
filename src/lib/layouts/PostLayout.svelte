<script lang="ts">
    let { children } = $props();
</script>

<article class="max-w-5xl px-4 prose dark:prose-invert">
    {@render children()}
</article>
