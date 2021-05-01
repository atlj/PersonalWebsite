import Image from "next/image";
import styles from "./index.module.css";
import cn from "classnames";

type Props = { className: string };

export const ContactBox = ({ className }: Props) => {
    return (
        <div className={cn(styles.container, className)}>
            <div className="w-16 h-16 md:w-28 md:h-28  flex-shrink-0">
                <Image
                    width="100%"
                    height="100%"
                    src="/res/profilePicture.png"
                />
            </div>

            <div className="font-sans text-sm md:text-2xl ml-3 text-center ">
                Merhaba ben Burak Güner. Benimle iletişime geçmek için buraya
                tıklayabilirsiniz.
            </div>
        </div>
    );
};
