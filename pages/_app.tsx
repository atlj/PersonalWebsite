import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "@styles/global.css";
import { appWithTranslation } from "@i18n";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>Burak Güner</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/res/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/res/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/res/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/res/favicon/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/res/favicon/safari-pinned-tab.svg"
                    color="#9939b2"
                />
                <link rel="shortcut icon" href="/res/favicon/favicon.ico" />
                <meta property="msapplication-TileColor" content="#00aba9" />
                <meta
                    property="msapplication-config"
                    content="/res/favicon/browserconfig.xml"
                />
                <meta property="theme-color" content="#f8f7fa" />
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
        </>
    );
}

export default appWithTranslation(MyApp);
