import React from "react";
import SectionTitle from "../General/SectionTitle";
import Image from "next/image";
import ImageWithText from "../General/ImageWithText";

type Props = {};

const WhoWeAre = (props: Props) => {
    return (
        <div className="pt-24">
            <div className="flex items-center justify-center">
                <SectionTitle title="Who We Are" />
            </div>
            <ImageWithText
                url="/images/WhoWeAre.png"
                alt="Who We Are"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sint omnis est voluptates ut minima, in blanditiis nulla
                      qui, dignissimos a dicta earum saepe. Quos veniam dolorum
                      fuga rem voluptatibus, fugiat quisquam minima explicabo
                      ipsa iste dignissimos inventore obcaecati, ut numquam."
            />
        </div>
    );
};

export default WhoWeAre;
