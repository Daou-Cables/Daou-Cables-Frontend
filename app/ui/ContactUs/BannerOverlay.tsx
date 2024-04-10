import React from "react";

type Props = {};

const BannerOverlay = (props: Props) => {
  return (
    <div className="p-8 bg-black bg-opacity-35 skew-x-1 h-full w-full">
      <div className="bg-black w-[250px] h-[140px] rounded-md p-4">
        <div className="inline-block relative text-center">
          <span className="font-semibold text-white">Our Headquarters</span>
          <div className="bg-white h-[2px] mt-1 transform -skew-x-12 w-[60%]" />
        </div>
        <div className="mt-4 font-thin">
          <p className="text-white text-sm">
            No. 99, Jiangwancheng Road
          </p>
          <p className="text-white text-sm">Yangpu District</p>
          <p className="text-white text-sm">Shanghai 200438</p>
        </div>
      </div>
    </div>
  );
};

export default BannerOverlay;
