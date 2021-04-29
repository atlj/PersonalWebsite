import * as React from "react";

function Cross(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={26} height={26} fill="currentcolor" {...props}>
            <path
                d="M1 1l24 24M25 1L1 25"
                stroke="currentcolor"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const MemoCross = React.memo(Cross);
export default MemoCross;
