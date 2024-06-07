
import React from "react";
import PageHeader from "../ui/General/PageHeader";
import SectionTitle from "../ui/General/SectionTitle";
import Image from "next/image";
import ContactUs from "../ui/General/ContactUs";
import { getCertificates } from "../lib/services/CertificateServices";
import { Certificate as CertificateType } from "../lib/definitions";

const CertificatesPage = async () => {
  const certificates: CertificateType[] = await getCertificates();
  return (
    <div>
      <PageHeader
        title="Certificates"
        subTitle1="Welcome To"
        subTitle2="Daou Cables Manufacturing"
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
        {certificates.map((certificate, index) => (
          <Certificate
            key={index}
            name={certificate.name}
            description={certificate.description}
            preview={certificate.preview}
          />
        ))}
      </div>
      <ContactUs />
    </div>
  );
};

type CertificateProps = {
  name: string;
  description: string;
  preview: string;
};

const Certificate = ({ name, description, preview }: CertificateProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="w-[315px] object-contain">
        <Image src={preview} alt="Certificate" width={315} height={400} />
      </div>
      <div className="w-[315px] px-7 h-[100px] overflow-auto">
        <h3 className="text-[#111111] text-xl font-semibold">{name}</h3>
        <p className="text-[#707072]">{description}</p>
      </div>
    </div>
  );
};

export default CertificatesPage;
