import { Shell } from '@/components/shell';
import About from '@/components/about';
import Commitment from '@/components/commitment';

import React, { HTMLAttributes } from 'react';
import Hero from './hero';
import Reviews from './reviews';
import HowWork from './how-work';
import Features from './features';
import Services from './services';

interface ContentProps extends HTMLAttributes<HTMLElement> {
    location: string;
}

export default function Content({ location, ...props }: ContentProps) {
    return (
        <Shell>
            <Hero location={location} />
            <Reviews location={location} />
            <HowWork />
            <Features location={location} />
            <Services location={location} />
            <About />
            <Commitment />
        </Shell>
    );
}
