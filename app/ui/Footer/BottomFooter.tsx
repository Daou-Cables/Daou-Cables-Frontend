import React from "react";

type Props = {};

export default function BottomFooter({}: Props) {
    return (
        <div className="border-t-2 border-black border-opacity-25 p-2 w-full flex items-center justify-center">
            <span className="text-black font-light text-base">
                Copyright © 2024 Daou Cables ManufactManufacturing Co.,Ltd
            </span>
        </div>
    );
}
