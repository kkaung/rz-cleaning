import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Shell } from '@/components/shell';
import { type Metadata } from 'next';
import React from 'react';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'Book Your End Lease Cleaning Service Now',
    description: 'Book online in less than 60 seconds.',
    robots: {
        index: false,
    },
};

export default function Page() {
    return (
        <Shell>
            <PageHeader>
                <PageHeaderHeading>Book Your Cleaning</PageHeaderHeading>
            </PageHeader>
        </Shell>
    );
}
