import styled from "styled-components";
import { DefaultTheme } from "@styledinterfaces";
import Image from "next/image";

export const Base = styled.div`
    display: flex;
    border-radius: 12px;
    box-shadow: 2px 2px 10px 0px #00000040;
    width: 643px;
    height: 137px;
    &.default {
        background: ${({ theme }: { theme: DefaultTheme }) =>
            theme.colors.backgroundElevated};
        cursor: pointer;
    }
    &.contact {
        background: ${({ theme }: { theme: DefaultTheme }) =>
            theme.colors.gradientContactBox};
    }
`;

export const ProfilePic = styled.div`
    flex: 1;
    padding-left: 22px;
    align-self: center;
`;
export const Text = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    padding-right: 44px;
    justify-content: center;
    font-family: Work Sans;
    width: 439px;
    height: 101px;
    text-align: center;
    font-style: normal;
    font-size: 26px;
    line-height: 30px;
    &.default {
        color: ${({ theme }: { theme: DefaultTheme }) =>
            theme.colors.textColor};
    }
    &.contact {
        color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.gray};
    }
`;

export const Box = styled.a`
    color: inherit;
    text-decoration: none;
    flex: 1;
    display: flex;
    cursor: pointer;
    border-radius: 7px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.white};
    &.square {
        max-width: 44px;
        width: 44px;
        max-height: 44px;
        height: 44px;
        align-items: center;
        justify-content: center;
    }
    &.rectangle {
        max-width: 411px;
        width: 411px;
        max-height: 44px;
        height: 44px;
    }
`;
