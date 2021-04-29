import React from "react";
import { Container } from "./styled";

export const Wrapper: React.FC<{ style?: React.CSSProperties }> = ({
    children,
    style,
}) => {
    return <Container style={style}>{children}</Container>;
};
