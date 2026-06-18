import type { ComponentType } from 'svelte';

export type Post = {
    id: string;
    thumb: string;
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
};

export type MarkdownPost = {
    metadata: Post;
    default: ComponentType;
};
