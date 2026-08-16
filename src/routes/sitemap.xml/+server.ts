import type { RequestHandler } from './$types';
import type { Post } from '../../types';

const siteUrl = 'https://mduchev.xyz';

const escapeXml = (value: string) =>
    value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

const pages = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/blog', changefreq: 'weekly', priority: '0.9' },
    { path: '/projects', changefreq: 'monthly', priority: '0.8' }
];

const postFiles = import.meta.glob('$posts/*.md', { eager: true });

export const GET: RequestHandler = () => {
    const posts = Object.values(postFiles)
        .map((post) => (post as { metadata: Post }).metadata)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const urls = [
        ...pages.map(
            ({ path, changefreq, priority }) => `
    <url>
        <loc>${siteUrl}${path}</loc>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`
        ),
        ...posts.map(
            ({ slug, date }) => `
    <url>
        <loc>${siteUrl}/blog/${escapeXml(slug)}</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>`
        )
    ].join('');

    return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`,
        {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'max-age=0, s-maxage=3600'
            }
        }
    );
};
