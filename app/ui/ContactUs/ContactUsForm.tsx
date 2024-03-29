import React from "react";
import InputField from "./InputField";
import Image from "next/image";
import SendButton from "./SendButton";

const ContactUsForm = () => {
  return (
    <div>
      <form action="" className="space-y-8">
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
    </div>
  );
};

export default ContactUsForm;
