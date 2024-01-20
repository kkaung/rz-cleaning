import { headingVariants } from '@/components/page-header';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';
import Balancer from 'react-wrap-balancer';

interface CommitmentProps extends HTMLAttributes<HTMLElement> {}

export default function Commitment({ ...props }: CommitmentProps) {
    return (
        <section
            id="commitment"
            aria-labelledby="commitment-heading"
            className={cn(
                props.className,
                'p-12 space-y-8 bg-[#EEE6E0] md:text-center'
            )}
            {...props}
        >
            <h3 className={headingVariants({ size: 'sm' })}>
                <Balancer>
                    We’re Committed To 200% Customer Satisfaction <br /> Each
                    And Every Time
                </Balancer>
            </h3>
            <p className="text-lg">
                If you’re not happy with our work, we make it right!
            </p>
            <Link href="">Booking</Link>
        </section>
    );
}
