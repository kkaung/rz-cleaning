import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import type { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';

interface PostCardProps extends HTMLAttributes<HTMLElement> {
    post: Post;
}

export default function PostCard({ post, ...props }: PostCardProps) {
    return (
        <section className={cn(props.className, 'relative  space-y-2')}>
            <AspectRatio
                ratio={16 / 9}
                className="overflow-hidden rounded-xl relative"
            >
                <Link href={`/blog/${post.slugAsParams}`}>
                    <Image
                        fill
                        src={post.image}
                        alt={`${post.title}`}
                        className="bg-cover object-cover"
                    />
                </Link>
            </AspectRatio>
            <div>
                <Link
                    className="text-xl font-semibold hover:underline"
                    href={`/blog/${post.slugAsParams}`}
                >
                    {post.title}
                </Link>
            </div>
        </section>
    );
}
