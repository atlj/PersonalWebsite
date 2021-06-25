import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import { LightMode, DarkMode } from "@components/icons";

interface Props {
    appearance: "lang" | "theme";
    className?: string;
    pos?: "A" | "B";
    onClick?: React.MouseEventHandler;
}

export const Switch = ({ appearance, className, onClick }: Props) => {
    const [buttonPos, setButtonPos] = React.useState<"A" | "B">("A");
    React.useEffect(() => {
        if (appearance === "theme") {
            //IF USER DIDNT SET ANY THEME OPTION USE SYSTEM DEFAULT
            if (localStorage.getItem("theme") === null) {
                const darkThemeMq = window.matchMedia(
                    //Definitely didn't steal from stack overflow
                    "(prefers-color-scheme: dark)",
                );
                if (darkThemeMq.matches) {
                    setButtonPos("B");
                } else {
                    setButtonPos("A");
                }
            } else {
                //IF USER SET THEME BEFORE USE THAT VALUE
                if (localStorage.getItem("theme") === "dark") {
                    setButtonPos("B");
                }
            }
        }
    }, []);

    React.useEffect(() => {
        //SET THEME ACCORDING TO BUTTON POSITION
        if (appearance === "theme") {
            if (buttonPos === "A") {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            }
        }
    }, [buttonPos]);

    return (
        <div
            onClick={() => {
                onClick; //TODO MIGHT CAUSE ERROR
                setButtonPos(buttonPos === "A" ? "B" : "A");
            }}
            className={cn(styles.container, className, "dark:bg-dark-800 ")}
        >
            <div
                className={cn(
                    styles.selector,
                    {
                        [styles.selectorA]: buttonPos === "A",
                        [styles.selectorB]: buttonPos === "B",
                    },
                    {
                        [styles.selectorLang]: appearance === "lang",
                        [styles.selectorTheme]: appearance === "theme",
                    },
                )}
            ></div>
            <div
                className={cn(styles.firstItem, {
                    "dark:text-white": buttonPos === "B",
                })}
            >
                {appearance === "lang" ? (
                    "TR"
                ) : (
                    <LightMode className={cn(styles.icon)} />
                )}
            </div>
            <div
                className={cn(styles.secondItem, {
                    "dark:text-white": buttonPos === "A",
                })}
            >
                {appearance === "lang" ? (
                    "EN"
                ) : (
                    <DarkMode className={cn(styles.icon)} />
                )}
            </div>
        </div>
    );
};
