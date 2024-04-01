import React from 'react';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const runtime = 'edge';

export function generateMetadata(): Metadata {
    const pathname = getPathname();

    return {
        title: 'House Cleaning Checklist',
        description: `Relax knowing you haven't missed a thing with our complete checklist.`,
        alternates: {
            canonical: pathname,
        },
    };
}

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Checklist', href: '/house-cleaning-checklist' },
                ]}
                dottable={false}
            />
            <PageHeader className="text-center">
                <PageHeaderHeading>House Cleaning Checklist</PageHeaderHeading>
            </PageHeader>
        </Shell>
    );
}
