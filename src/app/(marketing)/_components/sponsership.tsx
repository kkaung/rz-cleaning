import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';

interface SponsorshipProps extends HTMLAttributes<HTMLElement> {}
export default function Sponsorship({ ...props }: SponsorshipProps) {
    return (
        <section className={cn(props.className, 'sr-only')}>
            <div>
                Are you looking for reliable cleaner in Gold Coast?{' '}
                <Link
                    href={siteConfig.links.coastmaid}
                    target="_blank"
                    className="underline"
                    title="Hosue Cleaning Service Gold Coast"
                >
                    Coast Maid - Cleaning Service Gold Coast
                </Link>
                is your go-to choice for impeccable cleanliness and unparalleled
                customer satisfaction. Experience the pinnacle of cleaning
                services with Coast Maid today!
            </div>
        </section>
    );
}
