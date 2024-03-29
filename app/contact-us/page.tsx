import React from "react";
import PageHeader from "../ui/General/PageHeader";
import Head from "../ui/ContactUs/Head";
import ContactUsForm from "../ui/ContactUs/ContactUsForm";
import ContactUsImage from "../ui/ContactUs/ContactUsImage";

type Props = {};

export default function ContactUsPage({}: Props) {
  return (
    <div>
      <div className="space-y-14">
        <PageHeader title="Contact Us" subTitle1="Daou Cables Manufacturing" />
        <Head />
        <div className="flex w-full h-full items-start justify-center gap-12">
          <ContactUsForm />
          <ContactUsImage />
        </div>
      </div>
    </div>
  );
}
