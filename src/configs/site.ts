import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://facebook.com/',
    instagram: 'https://github.com/',
    twitter: 'https://twitter.com/',
    pinterest: 'https://pinterest.com/',
    tiktok: 'https://tiktok.com',
    temblr: 'https://temblr.com',
    linkin: 'https://linkin.com',
    youtube: 'https://youtube.com',
};

export const siteConfig = {
    logo: 'RZCleaning',
    name: 'RZ Cleaning',
    title: `Sydney's Premium House Cleaning Serivce`,
    description: '',
    url: 'https://majormaid.com.au',
    ogImage: 'https://majormaid.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Services',
            items: [{ title: '', href: '/' }],
        },
        {
            title: 'Pricing',
            href: '/pricing',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'House Cleaing',
                    href: '/house-cleaning-sydney',
                },
                {
                    title: 'Regular Cleaing',
                    href: '/regular-cleaning-sydney',
                },
                {
                    title: 'Deep Cleaing',
                    href: '/deep-cleaning-sydney',
                },
            ],
        },
        {
            title: 'Location',
            items: [
                {
                    title: 'Sydney',
                    href: '/house-cleaning-sydney',
                },
                {
                    title: 'Melbourne',
                    href: '/melbourne',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'About Us', href: '/about' },
                { title: 'Blog', href: '/blog' },
                { title: 'Reviews', href: '/reviews' },
                { title: 'Pricing', href: '/pricing' },
                { title: 'Checklist', href: '/checklist' },
                { title: 'FAQs', href: '/frequently-asked-questions' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@majormaid.com.au',
        phone: '1300 245 417',
        address: '7/24-26 Blaxland Road, Ryde, NSW 2112',
        openingHour: 'Mon – Sat: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: '528',
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [
    {
        title: 'House Cleaning',
        slug: 'house-cleaning',
        icon: 'house',
    },
    {
        title: 'Regular Cleaning',
        slug: 'regular-cleaning',
    },
    {
        title: 'Deep Cleaning',
        slug: 'deep-cleaning',
    },
    {
        title: 'End Lease Cleaning',
        slug: 'end-lease-cleaning',
    },
    {
        title: 'Oven Cleaning',
        slug: 'oven-cleaning',
    },
    {
        title: 'Bond Cleaning',
        slug: 'bond-cleaning',
    },
    {
        title: 'Office Cleaning',
        slug: 'office-cleaning',
        icon: 'building',
    },
    {
        title: 'NDIS Cleaning',
        slug: 'ndis-cleaning',
    },
    {
        title: 'Carpet Cleaning',
        slug: 'carpet-cleaning',
        icon: 'carpet',
    },
    {
        title: 'Move In - Move Out',
        slug: 'move-in-move-out-cleaning',
    },
    {
        title: 'Tile Cleaning',
        slug: 'tile-cleaning',
    },
];
