import React from "react";
import Image from "next/image";

type Props = {
    url: string;
    alt: string;
    text: string;
    reversed?: boolean;
};

function ImageWithText({ url, alt, text, reversed = false }: Props) {
    return (
        <div>
            <div className="pt-20 flex flex-col md:flex-row justify-between items-center md:px-40 space-x-0 md:space-x-20">
                <div
                    className={`${
                        reversed ? "md:hidden" : ""
                    } flex items-center justify-center w-full md:w-1/2`}
                >
                    <Image src={url} alt={alt} height={750} width={750} />
                </div>
                <div className="mt-8 sm:mt-12 h-full w-full md:w-1/2 md:px-0">
                    <p className="text-xl sm:text-2xl md:text-4xl">{text}</p>
                </div>
                <div
                    className={`hidden ${
                        reversed ? "md:block" : ""
                    } mt-8 flex items-center justify-center w-full md:w-1/2`}
                >
                    <Image src={url} alt={alt} height={750} width={750} />
                </div>
            </div>
        </div>
    );
}

export default ImageWithText;
