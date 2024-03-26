import React from "react";
import SectionTitle from "../General/SectionTitle";
import Image from "next/image";

type Props = {};

const WhoWeAre = (props: Props) => {
    return (
        <div className="pt-24">
            <div className="flex items-center justify-center">
                <SectionTitle title="Who We Are" />
            </div>
            <div className="pt-20 flex flex-col md:flex-row justify-between items-center md:px-40 space-x-0 md:space-x-20">
                <div className="flex items-center justify-center w-full md:w-1/2">
                    <Image
                        src="/images/WhoWeAre.png"
                        alt="Who We Are"
                        height={750}
                        width={750}
                    />
                </div>
                <div className="mt-8 sm:mt-12 h-full w-full md:w-1/2 md:px-0">
                    <p className="text-xl sm:text-2xl md:text-4xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sint omnis est voluptates ut minima, in blanditiis
                        nulla qui, dignissimos a dicta earum saepe. Quos veniam
                        dolorum fuga rem voluptatibus, fugiat quisquam minima
                        explicabo ipsa iste dignissimos inventore obcaecati, ut
                        numquam.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
