import * as React from "react";

function SvgDarkMode(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M20.066 12.243a8.492 8.492 0 01-1.723 4.4 8.426 8.426 0 01-3.802 2.785 8.381 8.381 0 01-4.695.3 8.41 8.41 0 01-4.123-2.277 8.48 8.48 0 01-2.265-4.144 8.51 8.51 0 01.299-4.72 8.465 8.465 0 012.77-3.821 8.398 8.398 0 014.377-1.733 6.61 6.61 0 00.636 8.571 6.527 6.527 0 008.527.64v0z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default SvgDarkMode;
