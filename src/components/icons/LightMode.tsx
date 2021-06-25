import * as React from "react";

function SvgLightMode(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                clipPath="url(#LightMode_svg__clip0)"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M11.867 16.204c2.584 0 4.68-2.106 4.68-4.704s-2.096-4.704-4.68-4.704c-2.584 0-4.68 2.106-4.68 4.704s2.096 4.704 4.68 4.704zM11.867 1.151v1.882M11.867 19.967v1.882M4.586 4.18l1.329 1.337M17.82 17.483l1.328 1.336M1.572 11.5h1.872M20.29 11.5h1.872M4.586 18.82l1.329-1.337M17.82 5.517l1.328-1.336" />
            </g>
            <defs>
                <clipPath id="LightMode_svg__clip0">
                    <path
                        fill="#fff"
                        transform="translate(.636 .21)"
                        d="M0 0h22.462v22.579H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}

export default SvgLightMode;
