import { Shell } from '@/components/shell';
import React from 'react';
import Hero from './hero';
import HowWork from './how-work';
import FAQs from './faqs';
import Features from './features';
import Gurantee from './guarantee';
import Commitment from '../../_components/commitment';
import LatestBlog from '../../_components/latest-blog';
import Reviews from './reviews';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';

import About from '../../_components/about';

interface ContentProps {
    city: string;
    suburb?: string;
    segments: { title: string; href: string }[];
}

export default function Content({ city, suburb, segments }: ContentProps) {
    return (
        <>
            <Shell>
                <Hero location={city} />
                <Reviews location={city} />
                <HowWork />
                <Features />
                <Gurantee location={city} />
                <FAQs />
                <About />
                <LatestBlog />
                <Commitment />
                <Breadcrumbs segments={segments} dottable={false} />
            </Shell>
        </>
    );
}
