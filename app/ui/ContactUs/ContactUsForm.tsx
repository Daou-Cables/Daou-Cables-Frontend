import React from "react";
import InputField from "./InputField";

const ContactUsForm = () => {
  return (
    <div>
      <form action="" className="space-y-8">
        <InputField icon="/icons/NameField.svg" placeholder="Your Name"/>
        <InputField icon="/icons/email.svg" placeholder="Your Email"/>
      </form>
    </div>
  );
};

export default ContactUsForm;
