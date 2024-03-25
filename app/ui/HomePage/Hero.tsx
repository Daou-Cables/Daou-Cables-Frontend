import Image from "next/image";
import React from "react";
import { getBillboard } from "@/app/lib/services/MainServices";
import { BillBoardSkeleton } from "@/app/ui/skeletons";

export default async function Hero() {
    const billboard = await getBillboard();

    if (!billboard) {
        return <BillBoardSkeleton />;
    }
    return (
        <div className="w-full h-[550px] relative">
            <Image
                src={billboard}
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
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
