import React from "react";
import PageHeader from "../ui/General/PageHeader";
import SectionTitle from "../ui/General/SectionTitle";
import Image from "next/image";
import ContactUs from "../ui/General/ContactUs";

type Props = {};

const page = (props: Props) => {

    const certificates = [
        {
            title: "ISO 9001:2015",
            description: "Quality Management System",
            url: "/images/certificates/placeholder.png",
        },
        {
            title: "ISO 14001:2015",
            description: "Environmental Management System",
            url: "/images/certificates/placeholder.png",
        },
        {
            title: "ISO 45001:2018",
            description: "Occupational Health and Safety Management System",
            url: "/images/certificates/placeholder.png",
        },
        {
            title: "ISO 50001:2018",
            description: "Energy Management System",
            url: "/images/certificates/placeholder.png",
        },
        {
            title: "ISO 14001:2015",
            description: "Environmental Management System",
            url: "/images/certificates/placeholder.png",
        },
        {
            title: "ISO 45001:2018",
            description: "Occupational Health and Safety Management System",
            url: "/images/certificates/placeholder.png",
        },
        {
            title: "ISO 50001:2018",
            description: "Energy Management System",
            url: "/images/certificates/placeholder.png",
        },
        {
            title: "ISO 50001:2018",
            description: "Energy Management System",
            url: "/images/certificates/placeholder.png",
        },
    ];

  return (
    <div>
      <PageHeader
        title="Certificates"
        subTitle1="Welcome To"
        subTitle2="Daou Cables Manufactoring"
      />
      <div className="mt-16 bg-[#F5F5F5] flex items-start flex-col py-10 px-16 gap-y-16 mb-36">
        <SectionTitle title="Our Certificates" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          perferendis sint voluptas suscipit odit excepturi qui tempore sed
          veniam, consectetur voluptatem aut voluptate facere animi saepe
          voluptates! Ipsam, cupiditate velit tempora illo minus quam. Labore
          aliquam facere dicta dolore iure saepe error ipsum, molestias,
          assumenda nobis architecto tenetur praesentium alias?
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {
            certificates.map((certificate, index) => (
                <Certificate
                    key={index}
                    title={certificate.title}
                    description={certificate.description}
                    url={certificate.url}
                />
            ))
        }
      </div>
      <ContactUs />
    </div>
  );
};

type CertificateProps = {
  title: string;
  description: string;
    url: string;
};

const Certificate = ({ title, description, url }: CertificateProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <div className="w-[315px] object-contain ">
                <Image
                    src={url}
                    alt="Certificate"
                    width={315}
                    height={400}
                />
            </div>
            <div className="w-[315px] px-7 h-[100px] overflow-auto">
                <h3 className="text-[#111111] text-xl font-semibold">{title}</h3>
                <p className="text-[#707072]">{description}</p>
            </div>
        </div>
    )
};

export default page;
