import React from "react";
import PageHeader from "../ui/General/PageHeader";
import SectionTitle from "../ui/General/SectionTitle";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <PageHeader
        title="Certificates"
        subTitle1="Welcome To"
        subTitle2="Daou Cables Manufactoring"
      />
      <div className="mt-16 bg-[#F5F5F5] flex items-start flex-col py-10 px-16 gap-y-16">
        <SectionTitle title="Our Certificates" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          perferendis sint voluptas suscipit odit excepturi qui tempore sed
          veniam, consectetur voluptatem aut voluptate facere animi saepe
          voluptates! Ipsam, cupiditate velit tempora illo minus quam. Labore
          aliquam facere dicta dolore iure saepe error ipsum, molestias,
          assumenda nobis architecto tenetur praesentium alias?
        </p>
      </div>
      
    </div>
  );
};

export default page;
