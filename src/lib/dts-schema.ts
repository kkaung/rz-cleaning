import { siteConfig } from '@/configs/site';
import type {
    Graph,
    LocalBusiness,
    Organization,
    Product,
    WebSite,
} from 'schema-dts';
import { absoluteUrl } from './utils';

const isBrowser = typeof window !== 'undefined';

export const OrganizationSchema: Organization = {
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    logo: absoluteUrl('/images/logo.png'),
    ...(isBrowser && { url: absoluteUrl(window.location.pathname) }),
    email: siteConfig.business.email,
    telephone: siteConfig.business.phone,
    address: siteConfig.business.address,
    sameAs: [
        siteConfig.links.facebook,
        siteConfig.links.linkedin,
        siteConfig.links.instagram,
        siteConfig.links.pinterest,
        siteConfig.links.youtube,
    ],
};

export const ProductSchema: Product = {
    '@type': 'Product',
    name: siteConfig.name,
    description: siteConfig.description,
    image: absoluteUrl('/images/logo.png'),
    brand: {
        '@type': 'Brand',
        name: siteConfig.name,
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        bestRating: '5',
        worstRating: '1',
        ratingValue: siteConfig.rating.ratingValue,
        ratingCount: siteConfig.rating.ratingCount,
    },
};

export const WebSiteSchema: WebSite = {
    '@type': 'WebSite',
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: 'en-GB',
};

export const LocalBusinessSchema: LocalBusiness = {
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: absoluteUrl('/images/logo.png'),
    email: siteConfig.business.email,
    telephone: siteConfig.business.phone,
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Suite 110, Level 1/350 Kent St',
        postalCode: '2000',
        addressLocality: 'Sydney',
        addressCountry: 'Australia',
    },
};

export const graphSchemas: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
        OrganizationSchema,
        WebSiteSchema,
        ProductSchema,
        LocalBusinessSchema,
    ],
};
