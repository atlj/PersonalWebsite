import * as React from "react";

function Mail(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={32} height={26} fill="none" {...props}>
            <path fill="#E5E5E5" d="M0 0h32v26H0z" />
            <g clipPath="url(#prefix__clip0)">
                <g filter="url(#prefix__filter0_d)">
                    <rect
                        x={-171}
                        y={-28}
                        width={643}
                        height={137}
                        rx={12}
                        fill="url(#prefix__paint0_linear)"
                    />
                </g>
                <g filter="url(#prefix__filter1_d)">
                    <rect
                        x={-6}
                        y={-9}
                        width={411}
                        height={44}
                        rx={7}
                        fill="#fff"
                    />
                    <path
                        d="M4 1h24c1.65 0 3 1.35 3 3v18c0 1.65-1.35 3-3 3H4c-1.65 0-3-1.35-3-3V4c0-1.65 1.35-3 3-3z"
                        stroke="#222"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M31 4L16 15 1 4"
                        stroke="#222"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <rect
                    x={-190.5}
                    y={-202.5}
                    width={682}
                    height={333}
                    rx={4.5}
                    stroke="#7B61FF"
                    strokeDasharray="10 5"
                />
            </g>
            <defs>
                <filter
                    id="prefix__filter0_d"
                    x={-179}
                    y={-36}
                    width={663}
                    height={157}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx={2} dy={2} />
                    <feGaussianBlur stdDeviation={5} />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                    />
                </filter>
                <filter
                    id="prefix__filter1_d"
                    x={-9}
                    y={-12}
                    width={421}
                    height={54}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx={2} dy={2} />
                    <feGaussianBlur stdDeviation={2.5} />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                    />
                </filter>
                <linearGradient
                    id="prefix__paint0_linear"
                    x1={150.5}
                    y1={-28}
                    x2={150.5}
                    y2={109}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#654DFF" />
                    <stop offset={1} stopColor="#C955FF" />
                </linearGradient>
                <clipPath id="prefix__clip0">
                    <path
                        fill="#fff"
                        transform="translate(-1225 -210)"
                        d="M0 0h1736v722H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}

const MemoMail = React.memo(Mail);
export default MemoMail;
