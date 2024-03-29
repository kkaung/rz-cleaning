import { Shell } from '@/components/shell';
import { type Metadata } from 'next';
import React from 'react';

import Hero from './_components/hero';
import HowWork from './_components/how-work';
import Reviews from './_components/reviews';
import FAQs from './_components/faqs';
import Checklist from './_components/checklist';
import Features from './_components/features';
import Gurantee from './_components/gurantee';
import LatestBlog from './_components/latest-blog';
import About from './_components/about';
import Commitment from './_components/commitment';
import { absoluteUrl } from '@/lib/utils';
import { siteConfig } from '@/configs/site';
import Featuring from './_components/featuring';
import SocialVideos from '@/components/social-videos';
import Sponsorship from './_components/sponsership';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: `End Of Lease Cleaning Sydney - 72hr Guaranteed Bond Cleaning`,
    description: `Professional End of Lease Cleaning Service in Sydney with 100% Bond Back Guarantee and the Lowest Price Guaranteed. Book online in less than 60 seconds.`,
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
                <Sponsorship />
            </Shell>
        </>
    );
}
