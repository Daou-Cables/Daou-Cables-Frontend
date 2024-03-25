import React from "react";
import SectionTitle from "./SectionTitle";
import EmailForm from "./EmailForm";

type Props = {};

export default function ContactUs({}: Props) {
  return (
    <div>
      <div className="flex justify-center items-center">
        <SectionTitle title="Contact Us" />
      </div>
      <div>
        <p className="mt-12 text-lg flex items-center justify-center">Your email here for inquiries and support</p>
      </div>
      <EmailForm />
    </div>
  );
}