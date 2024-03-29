import React from "react";
import PageHeader from "../ui/General/PageHeader";
import Head from "../ui/ContactUs/Head";
import ContactUsForm from "../ui/ContactUs/ContactUsForm";

type Props = {};

export default function ContactUsPage({}: Props) {
  return (
    <div>
      <div className="space-y-14">
        <PageHeader title="Contact Us" subTitle1="Daou Cables Manufacturing" />
        <Head />
        <ContactUsForm />
      </div>
    </div>
  );
}
