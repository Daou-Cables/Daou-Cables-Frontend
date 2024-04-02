import Image from "next/image";
import React from "react";
import { getBillBoard, getMobileBillBoard } from "@/app/lib/services/MediaServices";
import { BillBoardSkeleton } from "@/app/ui/skeletons";

export default async function Hero() {
    let billboard = null;
    let billboardMobile = null;
    try {
        billboard = await getBillBoard();
        billboardMobile = await getMobileBillBoard();
    } catch (error) {
        // TODO: Handle error
    }

    if (!billboard || !billboardMobile) {
        return <BillBoardSkeleton />;
    }
    return (
        <div className="w-full h-[450px] sm:h-[550px] relative">
            <Image
                src={billboard}
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                className="hidden sm:block"
            />
            <Image
                src={billboardMobile}
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                className="sm:hidden"
            />
            <div className="absolute inset-x-0 bottom-[10%] flex flex-col px-5 sm:px-20">
                <h1 className="text-xl sm:text-2xl font-bold mb-1">
                    Daou Cables Manufacturing
                </h1>
                <p className="text-xs sm:text-sm text-[#252424]">
                    Connecting Worlds, Uniting Voices: Your Global Link to
                    Limitless Possibilities
                </p>
            </div>
        </div>
    );
}
