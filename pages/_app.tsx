import React from "react";
import { AppProps } from "next/app";
import { StyledThemeProvider } from "@definitions/styled-components";
import { appWithTranslation } from "@i18n";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <StyledThemeProvider>
            <Component {...pageProps} />
        </StyledThemeProvider>
    );
}

export default appWithTranslation(MyApp);
