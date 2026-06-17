<script lang="ts">
    let { children, title, date, description } = $props();
</script>

<article class="prose antialiased w-full max-w-full overflow-x-hidden md:overflow-x-visible">
    <div class="mb-8">
        <h1 class="mb-2">{title}</h1>
        <div class="text-lg text-gray-600">{description}</div>
        <div class="text-sm italic mt-2">{date}</div>
    </div>

    <div class="prose-content overflow-x-auto w-full">
        {@render children()}
    </div>
</article>
