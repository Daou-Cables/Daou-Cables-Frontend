import React from "react";
import SectionTitle from "../General/SectionTitle";
import SolutionCard from "./SolutionCard";

type Props = {};

const OurSolutions = (props: Props) => {
  return (
    <div className="bg-black w-screen sm:px-14 self-center pb-32">
      <div className="flex items-center justify-center mt-20 pb-12">
        <SectionTitle title="Our Solutions" dark={true} />
      </div>
      <div className=" flex flex-row justify-center">
        <div className="max-w-[1300px] text-white mt-24 pt-12 mb-12 pb-12 w-full border-t border-b border-gray-400 flex items-center justify-center space-y-12 md:space-y-0 md:space-x-24 flex-col md:flex-row">
          <SolutionCard
            title="Av Security"
            description="Our passion for small business customers drives collaboration and creativity, making dreams a reality"
          />
          <SolutionCard
            title="Telecom"
            description="Our passion for small business customers drives collaboration and creativity, making dreams a reality"
          />
          <SolutionCard
            title="Satellite"
            description="Our passion for small business customers drives collaboration and creativity, making dreams a reality"
          />
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;
