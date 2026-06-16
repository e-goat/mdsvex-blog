import { mdsvex } from 'mdsvex';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { join } from 'path';
import type { Root } from 'mdast';
import type { VFile } from 'vfile';
import type { Post } from './src/types';

const layoutPath = join(__dirname, './src/lib/layouts/');

function createID(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

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
                        () => (tree: Root, file: VFile): void => {
                            const data = file.data.fm as Post;
                            data.id = createID(5);
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
