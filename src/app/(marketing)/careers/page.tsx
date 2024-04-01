import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { type Metadata } from 'next';
import React from 'react';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'Careers',
    description: `Join Sydney's top cleaning team: great pay, flexibility & local jobs. Apply now for happier house cleaning work near you.`,
    alternates: {
        canonical: '/careers',
    },
};

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Careers', href: '/careers' },
                ]}
                dottable={false}
            />
            <PageHeader>
                <PageHeaderHeading>Careers</PageHeaderHeading>
            </PageHeader>
        </Shell>
    );
}
