import React from "react";
import Image from "next/image";
import BannerOverlay from "./BannerOverlay";

type Props = {};

const ContactUsImage = (props: Props) => {
  return (
    <div className="relative w-full">
      <Image
        src="/images/ContactUsImage.png"
        alt="Contact Us Image"
        width={460}
        height={500}
        className="skew-x-2"
      />
      <div className="pl-1 w-[456px] h-[500px] absolute inset-0">
        <BannerOverlay />
      </div>
    </div>
  );
};

export default ContactUsImage;
