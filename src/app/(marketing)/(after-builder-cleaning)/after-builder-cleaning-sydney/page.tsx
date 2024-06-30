import React from 'react';
import { getCityFromPath } from '@/lib/next';
import { type Metadata } from 'next';

import Content from '../_component/content';
import { getMetadata } from '../_component/metadata';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPath();

    return getMetadata(city);
}

export default function Page() {
    const city = getCityFromPath();

    return (
        <Content
            city={city}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                {
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning-sydney',
                },
            ]}
        />
    );
}
