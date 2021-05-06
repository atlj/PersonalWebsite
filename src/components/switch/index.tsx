import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

interface Props {
    appearance: "lang" | "theme";
    className?: string;
    pos?: "A" | "B";
    onClick?: React.MouseEventHandler;
}

export const Switch = ({ appearance, className, pos, onClick }: Props) => {
    const [buttonPos, setButtonPos] = React.useState<"A" | "B">("A"); //TODO IMPLEMENT DEFAULT
    if (pos === undefined) {
        pos = buttonPos;
    }
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
                        [styles.selectorA]: pos === "A",
                        [styles.selectorB]: pos === "B",
                    },
                    {
                        [styles.selectorLang]: appearance === "lang",
                        [styles.selectorTheme]: appearance === "theme",
                    },
                )}
            ></div>
            <div
                className={cn(styles.firstItem, {
                    "dark:text-white": pos === "B",
                })}
            >
                {appearance === "lang" ? "TR" : "LT"}
            </div>
            <div
                className={cn(styles.secondItem, {
                    "dark:text-white": pos === "A",
                })}
            >
                {appearance === "lang" ? "EN" : "DT"}
            </div>
        </div>
    );
};
