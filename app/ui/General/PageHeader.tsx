import React from "react";

type Props = {
  title: string;
  subTitle1: string;
  subTitle2?: string;
};

const PageHeader = ({ title, subTitle1, subTitle2 }: Props) => {
  return (
    <div>
      <span className="flex items-center justify-center font-light italic text-sm sm:text-2xl">
        {title}
      </span>
      <h2 className="mt-2 flex items-center justify-center font-bold text-xl sm:text-4xl md:text-5xl">
        {subTitle1}
      </h2>
      {subTitle2 && (
        <h2 className="flex items-center justify-center font-bold text-xl sm:text-4xl md:text-5xl">
          {subTitle2}
        </h2>
      )}
    </div>
  );
};

export default PageHeader;
