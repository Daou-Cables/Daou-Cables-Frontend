import React from "react";
import Hero from "../ui/AboutUsPage/Hero";
import WhoWeAre from "../ui/AboutUsPage/WhoWeAre";

type Props = {};

export default function AboutUs({}: Props) {
    return (
        <div>
            <Hero />
            <WhoWeAre />
        </div>
    );
}
