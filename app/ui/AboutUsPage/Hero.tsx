import React from "react";
import Video from "./Video";

type Props = {};

const Hero = (props: Props) => {
    return (
        <div>
            <div className="flex items-center justify-center pt-12">
                <Video />
            </div>
            <div className="mt-12 flex justify-center items-center">
                <p className="text-center text-xl sm:text-4xl md:w-1/2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente nisi aliquam sed quasi enim nemo. Lorem ipsum dolor
                    sit amet.
                </p>
            </div>
        </div>
    );
};

export default Hero;
