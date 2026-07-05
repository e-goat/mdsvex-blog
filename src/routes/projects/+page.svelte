<script lang="ts">
    import Card from "$lib/components/Card.svelte"
    import type { PageData } from './$types';
    import ProjectsDoc from '$lib/docs/projects.md';

    const { data }: { data: PageData } = $props();
    const projects = Object.values(data.projects);
</script>

<section class="container">
    <ProjectsDoc />
    <div class="grid md:grid-cols-2 gap-4">
        {#each projects as item, index (item)}
            <Card cardId={index} description={item.description} title={item.name} url={item.url} assets={item.assets}/>
        {/each}
    </div>
</section>
