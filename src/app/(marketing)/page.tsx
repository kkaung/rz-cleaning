import { type Metadata } from 'next';
import React from 'react';

import Content from './_components/content';

export const metadata: Metadata = {
    title: `Sydney's #1 Premium House Cleaning And Maid Service 🥇`,
    description: `Best Cleaning Service in Sydney ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
};

export default function Page() {
    return <Content location="Sydney" />;
}
