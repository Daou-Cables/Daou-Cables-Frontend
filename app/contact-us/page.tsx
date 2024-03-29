import React from "react";
import PageHeader from "../ui/General/PageHeader";
import Head from "../ui/ContactUs/Head";

type Props = {};

export default function ContactUsPage({}: Props) {
    return <div>
        <PageHeader title="Contact Us" subTitle1="Daou Cables Manufacturing" />
        <div className="pt-20">
            <Head />
        </div>
    </div>;
}
