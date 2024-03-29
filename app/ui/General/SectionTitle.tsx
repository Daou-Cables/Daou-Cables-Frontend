import React from "react";

type Props = {
    title: string;
};

export default function SectionTitle({ title }: Props) {
    return (
        <div className="inline-block relative text-center">
            <span className="font-semibold text-xl sm:text-3xl">{title}</span>
            <div className="bg-[#1E1E1E] h-[4px] sm:h-[6px] mt-2 transform -skew-x-12 w-[60%]" />
        </div>
    );
}

// Needs flex flex-col items-center justify-center on parent div to function.
