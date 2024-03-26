import React from "react";
import SectionTitle from "./SectionTitle";
import EmailForm from "../HomePage/EmailForm";

type Props = {};

export default function ContactUs({}: Props) {
    return (
        <div>
            <div className="flex justify-center items-center">
                <SectionTitle title="Contact Us" />
            </div>
            <div>
                <p className="text-center mt-12 text-lg flex items-center justify-center mb-14">
                    Your email here for inquiries and support
                </p>
            </div>
            <div className="mb-52">
                <EmailForm />
            </div>
        </div>
    );
}
