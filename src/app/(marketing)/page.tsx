import { type Metadata } from 'next';
import { Shell } from '@/components/shell';
import React from 'react';

import Hero from './_components/hero';
import HowWork from './_components/how-work';
import Reviews from './_components/reviews';
import FAQs from './_components/faqs';
import Checklist from './_components/checklist';
import Features from './_components/features';
import Gurantee from './_components/gurantee';
import LatestBlog from './_components/latest-blog';
import About from '@/components/about';
import Commitment from '@/components/commitment';

import Featuring from './_components/featuring';
import SocialVideos from '@/components/social-videos';
import Sponsorship from './_components/sponsership';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: `RZ Cleaning Sydney - #1 Cleaning Service in Sydney, AU`,
    description: `Sydney's #1 Rated House Cleaners. We offer professional cleaning services in Sydney. Book online in 60 seconds.`,
};

export default function Page() {
    return (
        <>
            <Shell>
                <Hero />
                <Reviews location="Sydney" />
                <HowWork />
                <Features />
                <Checklist />
                <Gurantee />
                <FAQs />
                <About />
                <LatestBlog />
                <Commitment />
            </Shell>
        </>
    );
}
