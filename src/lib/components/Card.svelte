<script lang="ts">
    let {
        cardId,
        title,
        url,
        description,
        assets
    } : {
        cardId: number,
        title: string,
        url: string,
        description: string,
        assets: string[]
    } = $props();
</script>

<a href={url} target="_blank" rel="external noopener noreferrer" data-id={cardId} class="block p-4 rounded-xl shadow-lg border-1 cursor-pointer group hover:scale-102 transition-transform">
    <div class="flex flex-col gap-4">
        <div class="image-wrap w-full p-2">
            <img src={`${assets[0]}`} alt="Project image" class="rounded-xl w-96 h-64 object-center shadow-sm transition-transform">
        </div>
        <div id="info-wrap" class="p-2 flex flex-col text-start text-wrap gap-4">
            <p class="text-xl text-center capitalize font-bold">{title}</p>
            <p class="text-sm text-start wrap-break-word">{description}</p>
        </div>
    </div>
</a>
