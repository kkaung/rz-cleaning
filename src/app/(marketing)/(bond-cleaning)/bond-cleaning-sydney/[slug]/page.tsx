import React from 'react';
import { getCityFromPath } from '@/lib/next';
import { type Metadata } from 'next';

import { getMetadata } from '../../_components/metadata';
import Content from '../../_components/content';
import { toTitleCase, unslugify } from '@/lib/utils';

export const runtime = 'edge';

interface PageProps {
    params: { slug: string };
}

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPath();

    return getMetadata(city);
}

export default function Page({ params }: PageProps) {
    const city = toTitleCase(unslugify(params.slug));

    return (
        <Content
            city={city}
            segments={[
                { title: 'Home', href: '/' },
                {
                    title: 'Bond Cleaning Melbourne',
                    href: '/bond-cleaning-melbourne',
                },
                {
                    title: `${city}`,
                    href: `/bond-cleaning-melbourne/${params.slug}`,
                },
            ]}
        />
    );
}
