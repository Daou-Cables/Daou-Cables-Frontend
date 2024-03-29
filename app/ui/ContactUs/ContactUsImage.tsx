import React from "react";
import Image from "next/image";
import BannerOverlay from "./BannerOverlay";

type Props = {};

const ContactUsImage = (props: Props) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/images/ContactUsImage.png"
        alt="Contact Us Image"
        width={460}
        height={500}
        className="skew-x-2"
      />
      <div className="px-1 absolute inset-0 sm:w-[460px]">
        <BannerOverlay />
      </div>
    </div>
  );
};

export default ContactUsImage;
