import React, { HTMLAttributes } from 'react';

interface AffiliateProps extends HTMLAttributes<HTMLElement> {}

export default function Affiliate() {
    return (
        <div className="py-12 prose prose-quoteless">
            Our friend over at Major Maid aslo offer top-rated professional
            house cleaning and maid services in Sydney.
        </div>
    );
}
