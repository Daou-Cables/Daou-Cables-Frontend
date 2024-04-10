import React from "react";
import SectionTitle from "../General/SectionTitle";
import GlanceCard from "./GlanceCard";

type Props = {};

enum GlanceCardType {
  PERCENTAGE,
  MILLION_DOLLARS,
}

const AtAGlance = (props: Props) => {
  return (
    <div className="mt-32 mb-32">
      <div className="flex justify-center items-center">
        <SectionTitle title="At A Glance" />
      </div>
      <div className="pt-24 grid gap-x-2 justify-center md:grid-cols-3 md:grid-rows-1">
        <GlanceCard
          number={43}
          type={GlanceCardType.PERCENTAGE}
          title="Lorem ipsum dolor sit amet."
        />

        <GlanceCard
          number={84}
          type={GlanceCardType.PERCENTAGE}
          title="Lorem ipsum dolor sit amet."
        />
        <GlanceCard
          number={97.7}
          type={GlanceCardType.MILLION_DOLLARS}
          title="Lorem ipsum dolor sit amet."
        />
      </div>
    </div>
  );
};

export default AtAGlance;
