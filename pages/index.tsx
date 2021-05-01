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
    return (
        <Container>
            <ContactBox className="w-4/5 self-center md:w-3/4 lg:w-2/5" />
        </Container>
    );
};

export default Home;
