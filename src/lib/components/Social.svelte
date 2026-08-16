<script lang="ts">
    import GitLogo from '$lib/assets/pixel-github.png';
    import GitLogoDark from '$lib/assets/git-pixelart.png';
    import LinkedInLogo from '$lib/assets/pixel-linkedin2.png';
    import LinkedInLogoDark from '$lib/assets/pixel-linkedin.png';
    import xLogo from '$lib/assets/twiterx2.png';
    import xLogoDark from '$lib/assets/twiterx2-dark.png';

    // Import the shared state
    import { themeState } from '$lib/theme.svelte';

    const logoSize = [32, 32];

    // Note: No onMount needed here, because ThemeSwitch handles the initialization!
</script>

<section id="social-links" class="flex items-center gap-6">
    <a target="_blank" href="https://github.com/e-goat">
        <img
            alt="GIT logo"
            class="hover:scale-150 transition-transform"
            src={themeState.type === 'dark' ? GitLogoDark : GitLogo}
            width={logoSize[0]}
            height={logoSize[1]}
        />
    </a>

    <a target="_blank" href="https://www.linkedin.com/in/martin-duchev-666672162/">
        <img
            alt="LinkedIn logo"
            class="hover:scale-150 transition-transform"
            src={themeState.type === 'dark' ? LinkedInLogoDark : LinkedInLogo}
            width={logoSize[0]}
            height={logoSize[1]}
        />
    </a>

    <a target="_blank" href="https://x.com/duchevm">
        <img
            alt="X logo"
            class="hover:scale-150 transition-transform"
            src={themeState.type === 'dark' ? xLogoDark : xLogo}
            width={logoSize[0]}
            height={logoSize[1]}
        />
    </a>
</section>
