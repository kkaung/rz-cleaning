import { headingVariants } from '@/components/page-header';
import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

interface AboutPropse extends HTMLAttributes<HTMLElement> {}
export default function About({ ...props }: AboutPropse) {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className={cn(props.className, 'p-12 space-y-12 bg-secondary')}
        >
            <h3 className={cn(headingVariants({}))}>About {siteConfig.name}</h3>
            <div className="space-y-6">
                <p>
                    We are Upmove, Australia’s leading online platform for
                    matching customers up with the best removalists Australia
                    has to offer.
                </p>
                <p>
                    Founded in 2017, Upmove is dedicated to building a better
                    removals experience for Australia, providing customers and
                    removalists with the platform they need to make the process
                    quicker, smoother and simpler.
                </p>
            </div>
        </section>
    );
}
