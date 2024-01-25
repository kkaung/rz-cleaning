import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { Metadata } from 'next';
import React from 'react';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'Book Now',
    description: 'Book online in less than 60 seconds.',
};

export default function Page() {
    return (
        <Shell>
            <PageHeader>
                <PageHeaderHeading>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, illum.
                </PageHeaderHeading>
                <PageHeaderDescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consequatur, eum.
                </PageHeaderDescription>
            </PageHeader>
        </Shell>
    );
}
