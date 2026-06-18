import type { Post } from '../../types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const postFiles = import.meta.glob('$posts/*.md');

    const postPromises = Object.entries(postFiles).map(async ([_, resolver]) => {
        const resolved: any = await resolver();
        const data: Post = resolved.metadata;

        return data;
    });

    const posts = await Promise.all(postPromises);
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
        posts
    };
};
