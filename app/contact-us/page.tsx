import React from "react";
import PageHeader from "../ui/General/PageHeader";
import Head from "../ui/ContactUs/Head";
import ContactUs from "../ui/ContactUs/ContactUs";
import ReachUs from "../ui/ContactUs/ReachUs";

type Props = {};

export default function ContactUsPage({}: Props) {
  return (
    <div>
      <div className="space-y-14 flex flex-col md:px-52">
        <PageHeader title="Contact Us" subTitle1="Daou Cables Manufacturing" />
        <Head
          title="Let's Talk About Your Inquiry"
          body="Please submit your purchasing inquiry so we can provide detailed product information and pricing"
        />
        <div className="flex w-full flex-col justify-center">
          <ContactUs />
          <ReachUs />
        </div>
      </div>
    </div>
  );
}
