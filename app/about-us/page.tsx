import React from "react";
import Hero from "../ui/AboutUsPage/Hero";
import WhoWeAre from "../ui/AboutUsPage/WhoWeAre";
import AtAGlance from "../ui/AboutUsPage/AtAGlance";

type Props = {};

export default function AboutUs({}: Props) {
    return (
        <div>
            <Hero />
            <WhoWeAre />
            <AtAGlance />
        </div>
    );
}
