import Image from "next/image";
import styles from "./index.module.css";
import cn from "classnames";
import { MouseEventHandler } from "react";

interface Props {
    className: string;
    appearance: "default" | "contact";
    onClick?: MouseEventHandler;
}

export const ContactBox = ({ className, appearance, onClick }: Props) => {
    return (
        <div
            onClick={onClick}
            className={cn(styles.container, className, {
                "dark:bg-dark-800": appearance === "default",
                [styles.contact]: appearance === "contact",
            })}
        >
            <div className="w-16 h-16 md:w-28 md:h-28 flex-shrink-0 dark:text-GraphicDesign-To flex justify-center items-center ">
                <Image
                    width="100%"
                    height="100%"
                    src="/res/profilePicture.png"
                />
            </div>

            <div className="dark:text-white font-sans text-sm md:text-2xl ml-3 text-center container ">
                {appearance === "default"
                    ? "Merhaba ben Burak Güner. Benimle iletişime geçmek için buraya tıklayabilirsiniz."
                    : "//TODO ADD CONTACT ITEMS HERE"}
            </div>
        </div>
    );
};
