import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.facebook.com/people/RZ-Cleaning/61555684296875/',
    instagram: 'https://instagram.com/rzcleaning_au',
    twitter: 'https://twitter.com/rzclenaing_au',
    pinterest: 'https://www.pinterest.com.au/rzcleaning_syd',
    linkin: 'https://www.linkedin.com/company/rz-cleaning',
    youtube: 'https://www.youtube.com/channel/UC3Awh2GdY3eWuAxJx7_NtaQ',
    googlemap: '',

    buynsw: 'https://buy.nsw.gov.au/supplier/profile/160972',
    yelp: 'https://www.yelp.com/biz/rz-cleaning-waterloo',
};

export const siteConfig = {
    logo: 'RZ Cleaning Sydney',
    name: 'RZ Cleaning Sydney',
    title: `RZ Cleaning Sydney`,
    description:
        'Stressed about getting your security deposit back? We offer thorough end of lease cleaning in Sydney to ensure your rental gets the sparkle it needs to pass inspection. Book a bond clean with us today and get peace of mind!',
    url: 'https://rzcleaning.com.au',
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
                    title: 'End Of Lease Cleaning',
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
        address: '33 Shelley St, Sydney NSW 2000',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: 727,
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
