import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { type Author, allAuthors } from 'contentlayer/generated';

import FAQs from '../_components/faqs';
import { Icons } from '@/components/icons';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'End Of Lease - Bond Cleaning Pricing',
    description:
        'Check our detailed cleaning pricing list. Professional & reliable service, 100% satisfaction guarantee. Book online in 60 seconds.',
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
    const author = allAuthors.find(
        author => author.slugAsParams === 'kaung'
    ) as Author;

    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Pricing', href: '/pricing' },
                ]}
                dottable={false}
            />
            <PageHeader className="text-center">
                <PageHeaderHeading>
                    End Of Lease Cleaning Pricing
                </PageHeaderHeading>
                <time
                    dateTime={'2024-01-04T00:00:00.000Z'}
                    className="block text-sm text-muted-foreground mb-2"
                >
                    Updated on {formatDate('2024-01-04T00:00:00.000Z')}
                </time>
                <PageHeaderDescription className="mx-auto mt-6">
                    <div>
                        You might recognise it as
                        <Link
                            href="/bond-cleaning-melbourne"
                            className="underline mx-1"
                        >
                            bond cleaning
                        </Link>
                        ,
                        <Link href="/" className="underline mx-1">
                            end of lease cleaning
                        </Link>
                        , or
                        <Link
                            href="/vacate-clenaing-sydney"
                            className="underline mx-1"
                        >
                            vacate cleaning
                        </Link>
                        . It’s all one and the same for us. See below a detailed
                        list of our end of cleaning service prices. At RZ
                        Cleaning, our prices are super affordable and will not
                        break the bank.
                    </div>
                </PageHeaderDescription>
            </PageHeader>
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
            <section className="my-8 max-w-xl mx-auto">
                <Card className="border-0 bg-secondary/50 rounded-xl">
                    <CardHeader>
                        <div className="flex gap-4">
                            <CardTitle>
                                <Avatar>
                                    <AvatarImage
                                        src={author.avatar}
                                        alt="Author Avatar"
                                    />
                                    <AvatarFallback>
                                        {author.title.charAt(0).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                            </CardTitle>
                            <div className="font-semibold">
                                <p className="text-xs text-muted-foreground">
                                    Article by
                                </p>
                                <Link href={`/authors/${author.slugAsParams}`}>
                                    <p className="relative text-primary hover:underline">
                                        {author.title}
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground">
                        <p className="text-foreground text-sm">
                            {author.description}
                        </p>
                        <div className="flex gap-4">
                            <Link
                                aria-label="Linkin"
                                target="_blank"
                                href={`https://www.linkedin.com/in/${author.linkin}`}
                            >
                                <Icons.linkin aria-hidden className="h-4 w-4" />
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </Shell>
    );
}
