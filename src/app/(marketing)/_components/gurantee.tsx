import { headingVariants } from '@/components/page-header';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Image from 'next/image';
import FeaturedImage from '/public/assets/images/guarantee.jpeg';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

interface GuranteeProps extends HTMLAttributes<HTMLElement> {}

export default function Gurantee({ ...props }: GuranteeProps) {
    return (
        <section
            id="gurantee"
            aria-labelledby="gurantee-heading"
            className={cn(
                props.className,
                'p-12 bg-secondary flex flex-col max-h-[500px] items-center gap-12 md:flex-row'
            )}
        >
            <Image
                width={500}
                height={500}
                src={FeaturedImage}
                alt=""
                className="rounded-xl hidden md:block"
            />
            <div className="flex-1 space-y-4">
                <h2 className={cn(headingVariants({}))}>
                    72 Hours Bond Back Guarantee
                </h2>
                <p className="text-primary/80">
                    Book your cleaning service with confidence. Knowing that
                    your professional end of lease cleaning service is backed by
                    our 100% Bond Return. Book your bond cleaning Sydney online
                    in 60 seconds.
                </p>
                <Link href="" className={cn(buttonVariants({}))}>
                    Book My Cleaning
                </Link>
            </div>
        </section>
    );
}
