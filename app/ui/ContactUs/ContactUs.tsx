import React from "react";
import ContactUsImage from "./ContactUsImage";
import ContactUsForm from "./ContactUsForm";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className="md:flex h-full items-start gap-12 mt-12">
      <div className="w-full md:w-0 md:hidden mb-12 md:mb-0">
        <ContactUsImage />
      </div>
      <ContactUsForm />
      <div className="hidden md:block">
        <ContactUsImage />
      </div>
    </div>
  );
};

export default ContactUs;
