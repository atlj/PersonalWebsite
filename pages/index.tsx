import React from "react";

import { Container, Card, ContactBox, Switch } from "@components";

const Home: React.FC = () => {
    const [variant, useVariant] = React.useState<"default" | "contact">(
        "default",
    );
    return (
        <Container>
            <div className="flex-row flex min-w-full justify-between px-5 pt-4">
                {/* TODO ADD SWITCH FUNCTIONALITY */}
                <Switch appearance="lang" />
                <Switch appearance="theme" />
            </div>
            <ContactBox
                onClick={() => {
                    useVariant(variant === "default" ? "contact" : "default");
                }}
                appearance={variant}
                className="w-4/5 self-center md:w-3/4 lg:w-2/5"
            />
            <div className="flex container space-x-8 md:space-x-20  self-center  justify-center mb-24 md:mb-32 ">
                <Card appearance="programming" />
                <Card appearance="graphicdesign" />
                <Card appearance="modeling" />
            </div>
        </Container>
    );
};

export default Home;
