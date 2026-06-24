import type { PageServerLoad } from './$types';

interface CompanyDetails {
    name: string;
    url: string;
    assets: string[];
    description: string;
}

export const load: PageServerLoad = async () => {
    const assetsPrefix = 'project-images';
    const data: Record<number, CompanyDetails> = {
        1: {
            name: 'megaparts',
            url: 'https://megaparts.bg/',
            assets: [
                `${assetsPrefix}/megaparts-ss.png`,
                `${assetsPrefix}/megaparts-ss-2.png`,
                `${assetsPrefix}/megaparts-ss-3.png`
            ],
            description: 'Megaparts.bg is one of the leading online platforms in Bulgaria for new and secondhand automotive spare parts. The website offers a vast, well-categorized inventory of parts sourced from disassembled vehicles, catering to car owners and mechanics looking for affordable repair solutions with reliable delivery.'
        },
        2: {
            name: 'megabitak',
            url: 'https://megabitak.bg/',
            assets: [
                `${assetsPrefix}/megabitak-ss.png`
            ],
            description: 'Megabitak.bg is a popular Bulgarian online classifieds platform and marketplace. It connects buyers and sellers nationwide, allowing users to publish free ads for a wide variety of goods and services, including electronics, fashion, home goods, and real estate.'
        },
        3: {
            name: 'Accelerated Answers',
            url: 'https://www.kantar.com/campaigns/accelerated-answers-pf',
            assets: [
                `${assetsPrefix}/accelerated-answers.png`
            ],
            description: 'Accelerated Answers is Kantar Profiles agile, "do-it-together" (D-I-T) and do-it-yourself (DIY) survey solution for custom market research. The platform enables businesses and marketers to build custom templates, launch quick-polling surveys across global markets, and access dynamic, AI-assisted reporting to collect high-quality consumer insights at maximum speed.'
        },
        4: {
            name: 'uvel',
            url: 'https://uvel.bg/',
            assets: [
                `${assetsPrefix}/uvel-ss-1.png`
            ],
            description: 'Uvel.bg is an established e-commerce platform specializing in high-quality jewelry and watches. The site features a curated selection of gold and silver pieces, luxury accessories, and stylish timepieces from renowned brands, focused on premium customer service and certified authenticity.'
        }
    };

    return { projects: data };
};
