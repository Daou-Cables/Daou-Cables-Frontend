import React from "react";

type Props = {};

export default function BottomFooter({}: Props) {
  return (
    <div className="border-t-[1px] border-black border-opacity-20 py-4 w-full flex items-center justify-center">
      <span className="text-black font-light text-sm opacity-60">
        Copyright © 2024 Daou Cables ManufactManufacturing Co.,Ltd
      </span>
    </div>
  );
}
