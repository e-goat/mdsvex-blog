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

<a href={url} target="_blank" rel="external noopener noreferrer" data-id={cardId} class="block py-2 rounded-xl shadow-lg border-1 border-t-1 border-r-3 hover:border-r-6 hover:border-t-2 cursor-pointer">
    <div class="flex flex-col gap-6 mx-4 my-2">
        <div class="flex justify-center items-center image-wrap">
            <img src={`${assets[0]}`} alt="Project image" class="rounded-xl w-96 h-64 object-cover shadow-sm">
        </div>
        <div id="info-wrap" class="p-2 flex flex-col text-start text-wrap gap-4">
            <p class="text-xl text-center uppercase underline font-bold">{title}</p>
            <p class="text-xs text-start wrap-break-word">{description}</p>
        </div>
    </div>
</a>
