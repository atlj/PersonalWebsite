import React from "react";

import { Wrapper, ContactBox } from "@components";
import GlobalStyle from "@styles/globalStyles";

const Home: React.FC = () => {
    const [variant, useVariant]: [
        variant: "default" | "contact",
        useVariant: React.Dispatch<React.SetStateAction<"default" | "contact">>,
    ] = React.useState("default");
    return (
        <Wrapper style={{ justifyContent: "center", alignItems: "center" }}>
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
