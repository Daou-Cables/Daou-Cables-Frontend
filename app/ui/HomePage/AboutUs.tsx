import React from "react";
import SectionTitle from "../General/SectionTitle";
import Button from "./Button";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      <SectionTitle title="About Us" />

      <div className="mt-20 flex flex-col md:items-stretch  space-y-10 md:space-y-0 md:justify-between  md:flex-row">
        <div className="md:w-[50%]">
          <Image
            className="max-w-[550px] w-full object-contain"
            src="/images/AboutUs.png"
            alt="placeholder"
            width={700}
            height={537}
            objectFit="contain"
          />
        </div>
        <div className="md:w-[50%] md:ml-8 flex flex-col justify-between py-6">
          <div>
            <h4 className="text-3xl">Why Choose Us?</h4>
            <p className="text-base mt-10 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              impedit dolores laborum cumque debitis eos necessitatibus, sint
              assumenda, totam blanditiis recusandae deserunt hic beatae
              quisquam perferendis vitae, accusamus officia soluta facilis
              veritatis odio! Iusto quas, sed harum officiis facere quo minus
              quidem dignissimos ratione assumenda fugiat! Alias voluptatem unde
              temporibus?
            </p>
          </div>
          <div className="flex items-center justify-center sm:block">
            <Button
              className="sm:w-46 p-2"
              title="Learn More"
              url="/about-us"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
