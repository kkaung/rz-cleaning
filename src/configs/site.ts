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

    bondtoclean: 'https://bondtoclean.com.au/bond-cleaning-brisbane',
    bondcleaningsydney:
        'https://end-of-lease-bond-vacate-cleaning-sydney.com.au',
    westmaid: 'https://westmaid.com.au',
    coastmaid: 'https://coastmaid.com.au',
};

export const siteConfig = {
    logo: 'RZCleaning',
    name: 'RZ Cleaning',
    title: `Sydney's Premium House Cleaning Serivce`,
    description: '',
    url: 'https://rzcleaning.com.au',
    ogImage: 'https://rzcleaning.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Location',
            items: [
                { title: 'Sydney', href: '/bond-cleaning-sydney' },
                { title: 'Melbourne', href: '/bond-cleaning-melbourne' },
                { title: 'Brisbane', href: '/bond-cleaning-brisbane' },
                { title: 'Perth', href: '/bond-cleaning-perth' },
                { title: 'Adelaide', href: '/bond-cleaning-adelaide' },
                { title: 'Canberra', href: '/bond-cleaning-canberra' },
                { title: 'Gold Coast', href: '/bond-cleaning-gold-coast' },
            ],
        },
        {
            title: 'Services',
            items: [
                { title: 'Bond Cleaning', href: '/bond-cleaning' },
                { title: 'Carpet Cleaning', href: '/carpet-cleaning' },
                { title: 'Office Cleaning', href: '/office-cleaning' },
            ],
        },
        {
            title: 'Pricing',
            href: '/pricing',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Bond Cleaning',
            items: [
                {
                    title: 'Bond Cleaning Sydney',
                    href: '/bond-cleaning-sydney',
                },
                {
                    title: 'Bond Cleaning Melbourne',
                    href: '/bond-cleaning-melbourne',
                },
                {
                    title: 'Bond Cleaning Brisbane',
                    href: '/bond-cleaning-brisbane',
                },
                {
                    title: 'Bond Cleaning Perth',
                    href: '/bond-cleaning-perth',
                },
                {
                    title: 'Bond Cleaning Canberra',
                    href: '/bond-cleaning-canberra',
                },
                {
                    title: 'Bond Cleaning Gold Coast',
                    href: '/bond-cleaning-gold-coast',
                },
                {
                    title: 'Bond Cleaning Adelaide',
                    href: '/bond-cleaning-adelaide',
                },
            ],
        },
        {
            title: 'Vacate Cleaning',
            items: [
                {
                    title: 'Vacate Cleaning Sydney',
                    href: '/vacate-cleaning-sydney',
                },
                {
                    title: 'Vacate Cleaning Melbourne',
                    href: '/vacate-cleaning-melbourne',
                },
                {
                    title: 'Vacate Cleaning Brisbane',
                    href: '/vacate-cleaning-brisbane',
                },
                {
                    title: 'Vacate Cleaning Canberra',
                    href: '/vacate-cleaning-canberra',
                },
                {
                    title: 'Vacate Cleaning Gold Coast',
                    href: '/vacate-cleaning-gold-coast',
                },
                {
                    title: 'Vacate Cleaning Perth',
                    href: '/vacate-cleaning-perth',
                },
                {
                    title: 'Vacate Cleaning Adelaide',
                    href: '/vacate-cleaning-adelaide',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'About Us', href: '/about' },
                { title: 'Blog', href: '/blog' },
                { title: 'Pricing', href: '/pricing' },
                { title: 'Checklist', href: '/bond-cleaning-checklist' },
                { title: 'FAQs', href: '/frequently-asked-questions' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@rzcleaning.com.au',
        phone: '1302 245 417',
        address: '401/249 George St, 2017 NSW',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
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
