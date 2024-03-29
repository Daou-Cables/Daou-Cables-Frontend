import React from "react";
import InputField from "./InputField";
import Image from "next/image";
import SendButton from "./SendButton";

const ContactUsForm = () => {
  return (
      <form action="" className="space-y-8 w-full mt-12 sm:mt-0">
        <InputField icon="/icons/NameField.svg" placeholder="Your Name" />
        <InputField icon="/icons/email.svg" placeholder="Your Email" />
        <InputField
          icon="/icons/YourThoughts.svg"
          customWidth={30}
          placeholder="Tell us about your inquiry"
          wide={true}
        />
        <SendButton />
      </form>
  );
};

export default ContactUsForm;
