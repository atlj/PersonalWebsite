import React from "react";

import {
    Container,
    Header,
    Main,
    Footer,
    Cards,
    ContactBox,
} from "@components";

const Home: React.FC = () => {
    const [variant, useVariant]: [
        "default" | "contact",
        React.Dispatch<React.SetStateAction<"default" | "contact">>,
    ] = React.useState("default");
    return (
        <Container>
            <ContactBox
                onClick={() => {
                    useVariant(variant === "default" ? "contact" : "default");
                }}
                appearance={variant}
                className="w-4/5 self-center md:w-3/4 lg:w-2/5  "
            />
        </Container>
    );
};

export default Home;
