import { mdsvex } from 'mdsvex';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { join } from 'node:path';
import type { Root } from 'mdast';
import type { Post } from './src/types';
import path from 'node:path';
import { uniqueString } from './src/lib/helpers';

const layoutPath = join(__dirname, './src/lib/layouts/');

export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit({
            compilerOptions: {},
            adapter: adapter(),
            alias: {
                $lib: './src/lib',
                '$lib/*': './src/lib/*',
                $posts: './src/lib/posts',
                '$posts/*': './src/lib/posts/*'
            },
            preprocess: [
                mdsvex({
                    extensions: ['.md'],
                    smartypants: true,
                    remarkPlugins: [
                        () => (tree: Root, file: any): void => {
                            if (!file.filename) {
                                return
                            }
                            if (!file.filename.includes(path.join('src', 'lib', 'posts'))) {
                                return;
                            } else {
                                const data = file.data.fm as Post;
                                data.id = uniqueString(6);
                                data.slug = file.filename.split('/').pop()?.replace('.md', '') || '';
                                return;
                            }
                        }
                    ],
                    layout: {
                        article: layoutPath + 'PostLayout.svelte'
                    }
                })
            ],
            extensions: ['.svelte', '.md']
        })
    ]
});
