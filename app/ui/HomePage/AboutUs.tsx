import React from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center">
      <SectionTitle title="About Us" />

      <div className="mt-20 flex flex-col md:items-center space-y-10 md:space-y-0 md:flex-row">
        <Image
          className="flex-1"
          src="/images/AboutUs.png"
          alt="placeholder"
          width={700}
          height={537}
        />
        <div className="flex-1 md:ml-36">
          <div>
            <h4 className="text-3xl">Why Choose Us?</h4>
            <p className="text-xl mt-10 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              impedit dolores laborum cumque debitis eos necessitatibus, sint
              assumenda, totam blanditiis recusandae deserunt hic beatae
              quisquam perferendis vitae, accusamus officia soluta facilis
              veritatis odio! Iusto quas, sed harum officiis facere quo minus
              quidem dignissimos ratione assumenda fugiat! Alias voluptatem unde
              temporibus?
            </p>
          </div>
          <Button title="Learn More" url="/about-us" className="mt-32"/>
        </div>
      </div>
    </div>
  );
}
