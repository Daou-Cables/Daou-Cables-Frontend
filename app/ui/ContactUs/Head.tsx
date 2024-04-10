import React from "react";
import SectionTitle from "../General/SectionTitle";

type Props = {
  title: string;
  body: string;
};

const Head = ({ title, body }: Props) => {
  return (
    <div className="">
      <div className="mt-24 flex flex-row justify-start">
        <div className="relative">
          <span className="font-semibold text-xl sm:text-2xl">{title}</span>
          <div
            className="bg-[#1E1E1E] h-[3px] sm:h-[4px] mt-1 transform w-[40%] "
            style={{ transform: "skewX(-45deg)" }}
          />
        </div>
      </div>
      <p className="mt-8 text-base max-w-[60%]">{body}</p>
    </div>
  );
};

export default Head;
