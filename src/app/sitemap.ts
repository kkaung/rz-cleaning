import { type MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/utils';
import { allPosts, allPages, allProducts } from 'contentlayer/generated';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pagesRoutes = allPages.map(page => ({
        url: absoluteUrl(`/${page.slugAsParams}`),
        lastModified: new Date().toISOString(),
    }));

    const postsRoutes = allPosts.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const routes = [
        '',
        '/about-us',
        '/careers',
        '/blog',
        '/imprint',
        '/services',
        '/locations',
        '/house-cleaning-pricing-sydney',
        '/deep-cleaning-sydney',
        '/regular-cleaning-sydney',
        '/end-of-lease-cleaning-sydney',
        '/office-cleaning-sydney',
        '/oven-cleaning-sydney',
        '/carpet-cleaning-sydney',
        '/window-cleaning-sydney',
        '/after-builder-cleaning-sydney',
        '/airbnb-cleaning-sydney',
    ].map(route => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString(),
    }));

    const productsRoute = allProducts.map(product => ({
        url: absoluteUrl(`${product.slug}`),
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...pagesRoutes, ...postsRoutes, ...productsRoute];
}
