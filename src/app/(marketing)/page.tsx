import { Shell } from '@/components/shell';
import { type Metadata } from 'next';
import React from 'react';
import { WebPageJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from 'next-seo';

import Hero from './_components/hero';
import HowWork from './_components/how-work';
import Services from './_components/services';
import Reviews from './_components/reviews';
import FAQs from './_components/faqs';
import Checklist from './_components/checklist';
import Suburbs from './_components/suburbs';
import Features from './_components/features';
import Gurantee from './_components/gurantee';
import LatestBlog from './_components/latest-blog';
import About from './_components/about';
import Commitment from './_components/commitment';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function Page() {
    return (
        <>
            <Shell>
                <Hero />
                <Reviews />
                <HowWork />
                <Features />
                {/* <Checklist /> */}
                <Gurantee />
                <Services />
                <FAQs />
                <About />
                <LatestBlog />
                <Suburbs />
                <Commitment />
            </Shell>
            <WebPageJsonLd useAppDir id={''} />
            <FAQPageJsonLd useAppDir mainEntity={[]} />
            <BreadcrumbJsonLd useAppDir itemListElements={[]} />
        </>
    );
}
