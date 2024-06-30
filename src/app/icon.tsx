import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                tw="flex items-center italic justify-center bg-black text-[20px] leading-8 text-white font-extrabold"
                style={{
                    width: 32,
                    height: 32,
                }}
            >
                R
            </div>
        ),
        {
            ...size,
        }
    );
}
