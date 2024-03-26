import React from "react";
import Image from "next/image";

type Props = {
    title: string;
    text: string;
};

const CultureCard = ({ title, text }: Props) => {
    return (
        <div className="bg-[#F5F5F5] p-8 w-[300px] md:w-[500px]">
            <div className="flex items-center">
                <Image
                    src="/images/CultureCardIcon.png"
                    alt="Our Culture"
                    width={75}
                    height={75}
                />
                <h1 className="ml-4 font-bold text-3xl">{title}</h1>
            </div>
            <p className="mt-8 w-[250px] md:w-[400px] text-sm md:text-base">{text}</p>
        </div>
    );
};

export default CultureCard;
