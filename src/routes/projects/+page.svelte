<script lang="ts">
    import Card from "$lib/components/Card.svelte"
    import type { PageData } from './$types';

    const { data }: { data: PageData } = $props();
    const projects = Object.values(data.projects);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each projects as item, index (item)}
        <Card cardId={index} description={item.description} title={item.name} url={item.url} assets={item.assets}/>
    {/each}
</div>
