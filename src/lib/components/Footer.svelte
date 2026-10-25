<script lang="ts">
    import { _ } from 'svelte-i18n';
</script>

<div
    class="py-6 border-t border-slate-200 text-sm text-slate-600 dark:text-gray-100 dark:bg-gray-500"
>
    <p class="text-center">
        {$_('footer.availability')}
        <a
            href="mailto:duchevmartin@gmail.com"
            class="text-cyan-800 dark:text-cyan-100 hover:underline">duchevmartin@gmail.com</a
        >
    </p>
</div>
