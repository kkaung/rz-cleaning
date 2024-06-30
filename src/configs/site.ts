import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.facebook.com/people/RZ-Cleaning/61555684296875/',
    instagram: 'https://instagram.com/rzcleaning_au',
    twitter: 'https://twitter.com/rzclenaing_au',
    pinterest: 'https://www.pinterest.com.au/rzcleaning_syd',
    linkedin: 'https://www.linkedin.com/company/rz-cleaning',
    youtube: 'https://www.youtube.com/channel/UC3Awh2GdY3eWuAxJx7_NtaQ',
    googlemap: '',

    yelp: 'https://www.yelp.com/biz/rz-cleaning-waterloo',
};

export const siteConfig = {
    logo: 'RZ Cleaning',
    name: 'RZ Cleaning',
    title: `RZ Cleaning`,
    description:
        'RZ Cleaning is a top-rated cleaning company in Sydney, NSW. We offer tailored house cleaning and maid services for your homes, apartments and offices.',
    url: 'https://rzcleaning.com.au',
    domain: 'rzcleaning.com.au',
    ogImage: 'https://rzcleaning.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-sydney',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-sydney',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-sydney',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-sydney',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-sydney',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-sydney',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-sydney',
                },
                {
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning-sydney',
                },
                {
                    title: 'Airbnb Cleaning',
                    href: '/airbnb-cleaning-sydney',
                },
            ],
        },
        {
            title: 'Pricing',
            href: '/house-cleaning-pricing-sydney',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning Sydney',
                    href: '/deep-cleaning-sydney',
                },
                {
                    title: 'Regular Cleaning Sydney',
                    href: '/regular-cleaning-sydney',
                },
                {
                    title: 'End Of Lease Cleaning Sydney',
                    href: '/end-of-lease-cleaning-sydney',
                },
                {
                    title: 'Office Cleaning Sydney',
                    href: '/office-cleaning-sydney',
                },
                {
                    title: 'Oven Cleaning Sydney',
                    href: '/oven-cleaning-sydney',
                },
                {
                    title: 'Carpet Cleaning Sydney',
                    href: '/carpet-cleaning-sydney',
                },
                {
                    title: 'Window Cleaning Sydney',
                    href: '/window-cleaning-sydney',
                },
                {
                    title: 'After Builder Cleaning Sydney',
                    href: '/after-builder-cleaning-sydney',
                },
                {
                    title: 'Airbnb Cleaning Sydney',
                    href: '/airbnb-cleaning-sydney',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'Blog', href: '/blog' },
                {
                    title: 'Pricing',
                    href: '/house-cleaning-pricing-sydney',
                },
                {
                    title: 'Products',
                    href: '/products',
                },
                { title: 'Checklist', href: '/house-cleaning-checklist' },
                { title: 'FAQs', href: '/frequently-asked-questions' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },

        {
            title: 'Company',
            items: [
                { title: 'About Us', href: '/about-us' },
                { title: 'Careers', href: '/careers' },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@rzcleaning.com.au',
        phone: '+61 414076980',
        address: 'Suite 110, Level 1/350 Kent St, Sydney NSW 2000',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
        detailsAddress: {
            streetAddress: 'Suite 110, Level 1/350 Kent St',
            addressLocality: 'Sydney',
            addressRegion: 'NSW',
            postalCode: '2000',
            addressCountry: 'Australia',
        },
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: 1127,
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
