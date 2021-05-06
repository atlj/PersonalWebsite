import React from "react";
import cn from "classnames";
import styles from "./index.module.css";
import Image from "next/image";

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
            <div className=" w-20 h-20 md:w-36 md:h-36 mx-2 mt-2 md:mx-5 md:mt-5 flex  flex-shrink-0  self-center ">
                <Image
                    src={cn({
                        "/res/categories/categoryProgramming.png":
                            appearance === "programming",
                        "/res/categories/categoryGraphicDesign.png":
                            appearance === "graphicdesign",
                        "/res/categories/categoryModeling.png":
                            appearance === "modeling",
                    })}
                    className="  rounded-full "
                    width="150px"
                    height="150px"
                />
            </div>
            <h4 className="mt-4 mb-5 md:mt-6 md:mb-7 self-center justify-center text-center font-sans text-xs md:text-xl ">
                {cn({
                    Programlama: appearance === "programming",
                    "Grafik Tasarım": appearance === "graphicdesign",
                    "3D Modelleme": appearance === "modeling",
                })}
            </h4>
        </a>
    );
};
