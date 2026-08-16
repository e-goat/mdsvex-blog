<script lang="ts">
    let {
        cardId,
        title,
        url,
        description,
        assets
    }: {
        cardId: number;
        title: string;
        url: string;
        description: string;
        assets: string[];
    } = $props();
</script>

<a
    href={url}
    target="_blank"
    rel="external noopener noreferrer"
    data-id={cardId}
    class="group block h-full rounded-3xl border border-slate-200/80 bg-white/80 p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70"
>
    <div class="flex h-full flex-col gap-4">
        <div class="overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
            <img
                src={`${assets[0]}`}
                alt="Project example"
                class="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
        </div>
        <div id="info-wrap" class="flex flex-1 flex-col gap-3 px-1 pb-1 text-start">
            <p
                class="text-lg font-semibold uppercase tracking-wide text-slate-950 dark:text-slate-50"
            >
                {title}
            </p>
            <p class="text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
        </div>
    </div>
</a>
