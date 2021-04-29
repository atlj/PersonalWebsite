import React from "react";
import { Base, ProfilePic, Text, Box } from "./styled";
import Image from "next/image";
import { SVGCross, SVGMail, SVGArtStation, SVGGithub } from "@components/icons";

const Default: React.FC<{
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}> = ({ onClick }) => {
    return (
        <Base onClick={onClick} className="default">
            <ProfilePic>
                <Image
                    src="/res/profilePicture.png"
                    width="114px"
                    height="114px"
                />
            </ProfilePic>

            <Text>
                Merhaba ben Burak Güner. Benimle iletişime geçmek için buraya
                tıklayabilirsiniz.{" "}
            </Text>
        </Base>
    ); //TODO TEXTİ EDİTLE
};

const Contact: React.FC<{
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}> = ({ onClick }) => {
    return (
        <Base className="contact">
            <ProfilePic>
                <Image
                    src="/res/profilePicture.png"
                    width="114px"
                    height="114px"
                />
            </ProfilePic>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Box
                    href="mailto:md.burak.guner@gmail.com"
                    style={{
                        marginRight: 13,
                        marginTop: 19,
                        display: "flex",
                        alignItems: "center",
                    }}
                    className="rectangle"
                >
                    <div
                        style={{
                            display: "flex",
                            marginRight: 11,
                            marginLeft: 7,
                        }}
                    >
                        <SVGMail color="black" />
                    </div>
                    <Text>md.burak.guner@gmail.com</Text>
                </Box>
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        marginTop: 10.9,
                    }}
                >
                    <Box href="https://artstation.com/atlj" className="square">
                        <SVGArtStation />
                    </Box>
                    <Box
                        href="https://github.com/atlj"
                        style={{ marginLeft: 10 }}
                        className="square"
                    >
                        <SVGGithub />
                    </Box>
                </div>
            </div>
            <Box
                href="#"
                onClick={onClick}
                style={{ marginRight: 10, marginTop: 19 }}
                className="square"
            >
                <SVGCross color="black" />
            </Box>
        </Base>
    );
};

export const ContactBox: React.FC<{
    variant: "default" | "contact";
    onClick?: React.MouseEventHandler<HTMLDivElement | HTMLAnchorElement>;
}> = ({ variant, onClick }) => {
    switch (variant) {
        case "default":
            return <Default onClick={onClick} />;
        case "contact":
            return <Contact onClick={onClick} />;
    }
};
