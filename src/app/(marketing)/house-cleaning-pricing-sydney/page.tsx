import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Metadata } from 'next';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { siteConfig } from '@/configs/site';

import FAQs from '../_components/faqs';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'House Cleaning Prices in Sydney',
    description: `Get crystal clear pricing on Sydney's top-rated house cleaning services. Find the perfect fit for your budget and needs, with options from weekly refreshes to deep dives.`,
    alternates: {
        canonical: '/house-cleaning-pricing-sydney',
    },
};

const pricingList = [
    {
        title: '1 Bedroom, 1 Bathroom',
        price: '$339',
    },
    {
        title: '2 Bedroom, 1 Bathroom',
        price: '$400',
    },
    {
        title: '3 Bedroom, 2 Bathroom',
        price: '$469',
    },
    {
        title: '4 Bedroom, 2 Bathroom',
        price: '$549',
    },
    {
        title: '4 Bedroom, 3 Bathroom',
        price: '$579',
    },
    {
        title: '5 Bedroom, 3 Bathroom',
        price: '$659',
    },
    {
        title: '6 Bedroom, 3 Bathroom',
        price: '$709',
    },
];

export default function Page() {
    return (
        <>
            <Shell as="article">
                <Breadcrumbs
                    segments={[
                        { title: 'Home', href: '/' },
                        { title: 'Pricing', href: '/pricing' },
                    ]}
                    dottable={false}
                />
                <PageHeader className="text-center">
                    <PageHeaderHeading>
                        House Cleaning Pricing in Sydney
                    </PageHeaderHeading>
                    <PageHeaderDescription className="mx-auto">
                        <time
                            dateTime={'2024-01-04T00:00:00.000Z'}
                            className="block text-sm text-muted-foreground mb-2"
                        >
                            Updated on {formatDate('2024-01-04T00:00:00.000Z')}
                        </time>
                    </PageHeaderDescription>
                </PageHeader>
                <div className="mx-auto prose prose-quoteless prose-neutral dark:prose-invert">
                    <p>
                        {siteConfig.name} provides a range of high-quality
                        cleaning services, from house cleaning to{' '}
                        <Link href="/end-of-lease-cleaning-sydney">
                            {' '}
                            office cleaning
                        </Link>
                        ,{' '}
                        <Link href="/bond-cleaning-sydney">
                            end of lease cleaning
                        </Link>
                        and{' '}
                        <Link href="/carpet-cleaning-sydney">
                            carpet cleaning
                        </Link>
                        . We cater to homes throughout Sydney, offering
                        top-notch cleaning solutions at affordable prices,
                        ensuring accessibility to the best cleaners in the city
                        for all.
                    </p>
                    <p>
                        This guide unveils the secrets to sparkling spaces
                        without the shocking bill. From hourly rates to flat
                        fees, discover the perfect cleaning solution for your
                        home and budget. Breathe easy knowing you&apos;re
                        getting expert service without the stress of hidden
                        fees.
                    </p>
                </div>
                <section className="broder max-w-xl mx-auto w-full">
                    <Table>
                        <TableCaption>A list of cleaning prices.</TableCaption>
                        <TableHeader>
                            <TableRow className="text-base">
                                <TableHead className="w-[300px]">
                                    Home / Apartment
                                </TableHead>
                                <TableHead>Pricing</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {pricingList.map(p => (
                                <TableRow key={p.title} className="text-base">
                                    <TableCell className="font-medium">
                                        {p.title}
                                    </TableCell>
                                    <TableCell>{p.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </section>
                <FAQs />
            </Shell>
        </>
    );
}
