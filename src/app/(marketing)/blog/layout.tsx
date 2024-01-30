import { siteConfig } from '@/configs/site';
import { type Metadata } from 'next';
import React, { type PropsWithChildren } from 'react';

export const metadata: Metadata = {
    // title: {
    //     default: siteConfig.title,
    //     template: `%s - ${siteConfig.name}`,
    // },
};

export default function Layout({ children }: PropsWithChildren) {
    return <>{children}</>;
}
