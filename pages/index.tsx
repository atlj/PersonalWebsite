import React from "react";

import { Container, Card, ContactBox } from "@components";

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
            <div className="flex container self-center justify-center pt-20  ">
                <Card appearance="programming" />
                <Card appearance="graphicdesign" />
                <Card appearance="modeling" />
            </div>
        </Container>
    );
};

export default Home;
