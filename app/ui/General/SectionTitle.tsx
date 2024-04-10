import React from "react";

type Props = {
  title: string;
  dark?: boolean;
};

export default function SectionTitle({ title, dark = false }: Props) {
  return (
    <div className="inline-block relative text-center">
      <span
        className={`font-semibold text-xl sm:text-3xl ${
          dark ? "text-white" : ""
        }`}
      >
        {title}
      </span>
      <div
        className={`${
          dark ? "bg-white" : "bg-[#1E1E1E]"
        } h-[3px] sm:h-[4px] mt-1 transform w-[60%]`}
        style={{ transform: "skewX(-45deg)" }}
      />
    </div>
  );
}

// Needs flex flex-col items-center justify-center on parent div to function.
