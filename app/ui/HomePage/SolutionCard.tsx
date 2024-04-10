import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
};

const SolutionCard = ({ title, description }: Props) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="p-6 bg-white rounded-full">
          <Image
            src="/icons/SolutionIcon.svg"
            alt="Solution"
            width={30}
            height={30}
          />
        </div>
        <p className="pt-4 text-xl font-bold">{title}</p>
        <p className="text-center w-3/4 pt-4 text-sm font-light text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SolutionCard;
