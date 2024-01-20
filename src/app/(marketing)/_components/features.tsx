import { headingVariants } from '@/components/page-header';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';

interface FeaturesProps extends HTMLAttributes<HTMLElement> {}

const items = [
    {
        title: '100% Bond Back Guarantee',
        content: `Bond Cleaning Sydney uses superior cleaning tools and offers a bond back guarantee for 7 days (Ts and Cs Apply).`,
    },
    {
        title: 'Simple & Easy Booking',
        content: `Bond cleans are booked online with one simple process, using your phone or computer.`,
    },
    {
        title: 'Expert End Of Lease Cleaners',
        content: `You can trust our cleaning teams to do the best job possible so you can get your bond back.`,
    },
    {
        title: 'Cleaning Equipment Provided',
        content: `For your convenience, our team brings their own cleaning equipment for each service.`,
    },
    {
        title: 'Fully Insured Against Damages',
        content: `Our end of lease cleaning service is covered by our $20 million public liability insurance.`,
    },
    {
        title: 'Exceptional Customer Service',
        content: `Count on our expert customer service team for support at every stage of your cleaning journey.`,
    },
    {
        title: 'Across Sydney',
        content: `We’ve got vetted cleaners across Sydney, ready to help get you on the move.`,
    },
    {
        title: 'No Hidden Fees',
        content: `Our prices are final and fully inclusive of fuel and GST, and any other charges. What you see is what you pay.`,
    },
    {
        title: '7 days / week',
        content: `We’ve got teams available at any day of the week, including public holidays and overnight transportation.`,
    },
];

export default function Features({ ...props }: FeaturesProps) {
    return (
        <section
            id="features"
            aria-labelledby="features-heading"
            className={cn(props.className, 'py-12 space-y-12')}
        >
            <div className="space-y-1">
                <p className="text-pink-500 uppercase font-medium">
                    Why {siteConfig.name}
                </p>
                <h2 className={headingVariants({})}>
                    More Than Just A Cleaning Service
                </h2>
            </div>
            <ul className="grid grid-cols-1 gap-y-6 gap-x-12 md:grid-cols-3">
                {items.map((item, idx) => {
                    return (
                        <li key={idx} className="space-y-3 py-6 border-b">
                            <h3 className="font-semibold text-lg">
                                {item.title}
                            </h3>
                            <p className="leading-tight text-muted-foreground">
                                {item.content}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
