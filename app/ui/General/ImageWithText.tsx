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
    <div className={`mt-20 flex flex-col md:items-stretch  space-y-10 md:space-y-0 md:justify-between  ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div className="md:w-[50%]">
        <Image
          className="max-w-[550px] w-full object-contain"
          src={url}
          alt={alt}
          width={700}
          height={537}
          objectFit="contain"
        />
      </div>
      <div className="md:w-[50%] md:ml-8 flex flex-col justify-between py-6">
        <div>
          <h4 className="text-3xl">We are some title</h4>
          <p className="text-base mt-10 max-w-xl">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageWithText;
