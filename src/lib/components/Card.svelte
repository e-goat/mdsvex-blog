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

<a href={url} target="_blank" rel="external noopener noreferrer" data-id={cardId} class="block py-2 rounded-xl cursor-pointer">
    <div class="flex flex-col gap-2 mx-4 my-2">
        <div class="flex justify-center items-center image-wrap">
            <img src={`${assets[0]}`} alt="Project image" class="rounded-xl w-64 h-64 object-center shadow-sm">
        </div>
        <div id="info-wrap" class="p-2 flex flex-col text-start text-wrap gap-4">
            <p class="text-xl text-center uppercase underline font-bold">{title}</p>
            <p class="text-xs text-start wrap-break-word">{description}</p>
        </div>
    </div>
</a>
