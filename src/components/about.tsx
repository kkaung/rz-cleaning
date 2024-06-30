import { headingVariants } from '@/components/page-header';
import { siteConfig } from '@/configs/site';
import React, { HTMLAttributes } from 'react';

interface AboutProps extends HTMLAttributes<HTMLElement> {}
export default function About({ ...props }: AboutProps) {
    return (
        <section className="py-12 space-y-12">
            <h2 className={headingVariants({})}>
                Not Your Average House Cleaning Company in Sydney
            </h2>
            <p>{siteConfig.description}</p>
        </section>
    );
}
