<script lang="ts">
    import Card from '$lib/components/Card.svelte';
    import type { PageData } from './$types';
    import ProjectsDoc from '$lib/docs/projects.md';
    import { _ } from 'svelte-i18n';

    const { data }: { data: PageData } = $props();
    const projects = $derived(Object.values(data.projects));
</script>

<section class="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="mb-8">
        <ProjectsDoc />
    </div>

    <div class="grid gap-6 sm:grid-cols-2">
        {#each projects as item, index (item)}
            <Card
                cardId={index}
                description={$_(`projects.items.${item.translationKey}`)}
                title={item.name}
                url={item.url}
                assets={item.assets}
            />
        {/each}
    </div>
</section>
