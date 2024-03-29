import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Move Out Cleaning ${location} - 72hr Guaranteed Vacate Cleaning`,
        description: `Professional move out cleaning service in ${location} with 100% Bond Back Guarantee and the Lowest Price Guaranteed. Book online inless than 60 seconds.`,
        alternates: {
            canonical: pathname,
        },
    };
};
