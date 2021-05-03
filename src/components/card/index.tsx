import React from "react";
import cn from "classnames";
import styles from "./index.module.css";
import Image from "next/image";
import { prependOnceListener } from "node:process";

interface Props {
    appearance: "programming" | "graphicdesign" | "modeling";
    className?: string;
}

export const Card = ({ appearance, className }: Props) => {
    return (
        <a
            className={cn(styles.card, className, {
                [styles.programming]: appearance === "programming",
                [styles.graphicdesign]: appearance === "graphicdesign",
                [styles.modeling]: appearance === "modeling",
            })}
        >
            <div className="flex container flex-shrink-0 items-center justify-center ">
                <Image
                    src={cn({
                        "/res/categories/categoryProgramming.png":
                            appearance === "programming",
                        "/res/categories/categoryGraphicDesign.png":
                            appearance === "graphicdesign",
                        "/res/categories/categoryModeling.png":
                            appearance === "modeling",
                    })}
                    width="100%"
                    height="100%"
                />
            </div>
            <h4 className="text-center font-sans ">
                {cn({
                    Programlama: appearance === "programming",
                    "Grafik Tasarım": appearance === "graphicdesign",
                    "3D Modelleme": appearance === "modeling",
                })}
            </h4>
        </a>
    );
};
