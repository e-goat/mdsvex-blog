import type { Post } from '../../types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const postFiles = import.meta.glob('$posts/*.md');

    const postPromises = Object.entries(postFiles).map(async ([path, resolver]) => {
        const resolved: any = await resolver();
        const data: Post = resolved.metadata;

        data.slug = path.split('/').pop()?.replace('.md', '') || '';
        data.id = Math.floor(Math.random() * 1000000);

        return {
            data
        };
    });

    const posts = await Promise.all(postPromises);
    posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

    return {
        posts
    };
};
