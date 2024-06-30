import { headingVariants } from '@/components/page-header';
import { siteConfig } from '@/configs/site';
import { checkUserAgentForGooglebot } from '@/lib/next';
import Link from 'next/link';
import React, { HTMLAttributes } from 'react';

interface AboutProps extends HTMLAttributes<HTMLElement> {}
export default function About({ ...props }: AboutProps) {
    const isGooglebot = checkUserAgentForGooglebot();

    return (
        <section className="py-12 space-y-12">
            <h2 className={headingVariants({})}>
                Not Your Average House Cleaning Company in Sydney
            </h2>
            <p>{siteConfig.description}</p>

            {isGooglebot && (
                <div className="">
                    Online booking is available as well, and we make it easy to
                    schedule an appointment and get the{' '}
                    <Link href="https://majormaid.com.au">
                        home cleaning services in Sydney
                    </Link>{' '}
                    you need.
                </div>
            )}
        </section>
    );
}
