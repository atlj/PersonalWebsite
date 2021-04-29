import React from "react";
import Head from "next/head";

import { Wrapper, ContactBox } from "@components";
import GlobalStyle from "@styles/globalStyles";

const Home: React.FC = () => {
    const [variant, useVariant]: [
        variant: "default" | "contact",
        useVariant: React.Dispatch<React.SetStateAction<"default" | "contact">>,
    ] = React.useState("default");
    return (
        <Wrapper style={{ justifyContent: "center", alignItems: "center" }}>
            <Head>
                <title>Burak Güner</title>
                <meta property="og:title" content="Burak Güner" key="title" />
                <meta
                    property="og:description"
                    content="Coder, Designer, 3D Modeller."
                    key="description"
                />
                <meta
                    property="og:image"
                    content="https://burakguner.vercel.app/res/profilePicture.png"
                    key="image"
                />
                <meta
                    property="url"
                    content="burakguner.vercel.app"
                    key="url"
                />
            </Head>
            <GlobalStyle />
            <ContactBox
                onClick={() => {
                    useVariant(variant === "default" ? "contact" : "default");
                }}
                variant={variant}
            />
        </Wrapper>
    );
};
export default Home;
