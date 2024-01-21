import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.facebook.com/profile.php?id=61555684296875',
    instagram: 'https://instagram.com/',
    twitter: 'https://twitter.com/',
    pinterest: 'https://pinterest.com/',
    linkin: 'https://linkin.com',
    youtube: 'https://youtube.com',
};

export const siteConfig = {
    logo: 'RZCleaning',
    name: 'RZ Cleaning',
    title: `Sydney's Premium House Cleaning Serivce`,
    description: '',
    url: 'https://rzcleaning.com.au',
    ogImage: 'https://rzcleaning.com.au/opengraph-image.png',
    mainNav: [
        // {
        //     title: 'Services',
        //     items: [
        //         { title: 'Vacate Cleaning', href: '/vacate-cleaning-sydney' },
        //         { title: 'Bond Cleaning', href: '/bond-cleaning-sydney' },
        //         {
        //             title: 'Move Out Cleaning',
        //             href: '/move-out-cleaning-sydney',
        //         },
        //     ],
        // },
        {
            title: 'Pricing',
            href: '/pricing',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        // {
        //     title: 'Services',
        //     items: [
        //         {
        //             title: 'Vacate Cleaning',
        //             href: '/vacate-cleaning-sydney',
        //         },
        //         {
        //             title: 'Bond Cleaning',
        //             href: '/bond-cleaning-sydney',
        //         },
        //         {
        //             title: 'Move Out Cleaning',
        //             href: '/move-out-cleaning-sydney',
        //         },
        //     ],
        // },
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
        ratingCount: '727',
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
