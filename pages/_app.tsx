import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { StyledThemeProvider } from "@definitions/styled-components";
import { appWithTranslation } from "@i18n";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <StyledThemeProvider>
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
            <Component {...pageProps} />
        </StyledThemeProvider>
    );
}

export default appWithTranslation(MyApp);
