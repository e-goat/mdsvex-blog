<script lang="ts">
    let { children, title, date, description } = $props();
</script>

<article class="prose dark:prose-invert antialiased">
    <div>
        <h1>{title}</h1>
        <div>{description}</div>
        <div class="text-sm italic">{date}</div>
    </div>

    {@render children()}
</article>
