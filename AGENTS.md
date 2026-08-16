# Repository Guidelines

## Project Structure & Module Organization

This is a SvelteKit personal site using mdsvex for Markdown-backed pages. Route files live in `src/routes/`; each route follows SvelteKit conventions such as `+page.svelte`, `+page.ts`, and `+page.server.ts`. Reusable UI belongs in `src/lib/components/`, shared page layouts in `src/lib/layouts/`, and shared utilities/types in `src/lib/helpers.ts` and `src/types/`.

Blog posts are Markdown files in `src/lib/posts/`; static informational content is in `src/lib/docs/`. Place images and other publicly served assets in `static/` (for example, `static/post-images/` and `static/project-images/`). Keep source-only assets under `src/lib/assets/`.

## Build, Check, and Development Commands

Use pnpm for all project commands:

- `pnpm install` installs dependencies.
- `pnpm dev` starts the Vite development server.
- `pnpm check` synchronizes SvelteKit types and runs `svelte-check`.
- `pnpm lint` checks Prettier formatting and ESLint rules.
- `pnpm format` applies Prettier formatting across the repository.
- `pnpm build` creates the production build; `pnpm preview` serves it locally.

Run `pnpm check && pnpm lint` before opening a pull request.

## Coding Style & Naming Conventions

Write TypeScript in Svelte components and route modules. Follow the existing four-space indentation and let Prettier choose spacing, quotes, and Tailwind class ordering; do not hand-format generated style changes. ESLint is configured for JavaScript, TypeScript, and Svelte, with Prettier compatibility enabled.

Use PascalCase for component and layout files (`ThemeSwitch.svelte`, `PostLayout.svelte`). Use SvelteKit’s reserved `+` route names exactly, and use lowercase, descriptive Markdown slugs such as `docker-with-php-hmr.md`.

## Testing Guidelines

There is no separate test runner or coverage target currently configured. Treat `pnpm check` and `pnpm lint` as required validation for every change. For UI or content changes, also run `pnpm dev` and manually verify the affected route, including light/dark theme behavior where relevant.

## Commit

Recent commits use short, imperative-style summaries, e.g. `Introduce theme` or `Fix state warning in projects/+page.svelte`. Keep each commit focused and avoid unrelated formatting churn.

Skip pull-requests.
