import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';

interface SiteFooterSponsorshipProps extends HTMLAttributes<HTMLElement> {}
export default function SiteFooterSponsorship({ ...props }: SiteFooterSponsorshipProps) {
    return (
        <section className={cn(props.className, 'sr-only')}>
            <div>
                <Link href={siteConfig.links.coastmaid} target="_blank">
                    Coast Maid - Cleaning Service Gold Coast
                </Link>
            </div>
        </section>
    );
}
