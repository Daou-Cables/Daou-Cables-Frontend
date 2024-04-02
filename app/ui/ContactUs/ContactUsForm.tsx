"use client";
import React from "react";
import InputField from "./InputField";
import Image from "next/image";
import SendButton from "./SendButton";
import { contactUs } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const initialState = {
  name: "",
  email: "",
  message: "",
}

const ContactUsForm = () => {
  const [state, formAction] = useFormState(contactUs, initialState);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
      <form action={(formData: FormData) => {
        setName("");
        setEmail("");
        setMessage("");
        formAction(formData);
      }} className="space-y-8 w-full md:w-1/2 mt-12 sm:mt-0">
        <InputField icon="/icons/NameField.svg" placeholder="Your Name" name="name" value={name} setValue={setName} />
        <InputField icon="/icons/email.svg" placeholder="Your Email" name="email" value={email} setValue={setEmail}/>
        <InputField
          icon="/icons/YourThoughts.svg"
          customWidth={30}
          placeholder="Tell us about your inquiry"
          wide={true}
          name="message"
          value={message}
          setValue={setMessage}
        />
        <SendButton/>
      </form>
  );
};

export default ContactUsForm;
