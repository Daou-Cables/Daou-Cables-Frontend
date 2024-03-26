import React from "react";
import Hero from "../ui/AboutUsPage/Hero";
import AtAGlance from "../ui/AboutUsPage/AtAGlance";
import SectionWithText from "../ui/General/SectionWithText";

type Props = {};

export default function AboutUs({}: Props) {
    return (
        <div>
            <Hero />
            <SectionWithText
                title="Who We Are"
                url="/images/WhoWeAre.png"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sint omnis est voluptates ut minima, in blanditiis nulla
                      qui, dignissimos a dicta earum saepe. Quos veniam dolorum
                      fuga rem voluptatibus, fugiat quisquam minima explicabo
                      ipsa iste dignissimos inventore obcaecati, ut numquam."
            />
            <AtAGlance />
            <SectionWithText
                title="How We Work"
                url="/images/HowWeWork.png"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sint omnis est voluptates ut minima, in blanditiis nulla
                qui, dignissimos a dicta earum saepe. Quos veniam dolorum
                fuga rem voluptatibus, fugiat quisquam minima explicabo
                ipsa iste dignissimos inventore obcaecati, ut numquam."
                reversed
            />
        </div>
    );
}
