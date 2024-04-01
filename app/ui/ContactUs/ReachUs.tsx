import ContactIcon from "./ContactIcon";
import Head from "./Head";
import React from "react";

type Props = {};

const ReachUs = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center pb-44">
      <div className="w-full md:w-1/2">
        <Head
          title="Reach Out to Us"
          body="You can find us at the crossroads of innovation and connectivity. Let's get in touch."
        />
        <div className="pt-12">
          <p>
            <span className="font-bold">Tel:</span>+86-571-20144
          </p>
          <p>
            <span className="font-bold">Fax:</span>+86-124-1515a
          </p>
        </div>
        <div className="pt-12 space-x-4 flex">
          <ContactIcon url="/icons/WeChat.svg" />
          <ContactIcon url="/icons/Instagram.svg" />
          <ContactIcon url="/icons/Facebook.svg" />
          <ContactIcon url="/icons/EmailWhite.svg" />
        </div>
      </div>
      <div className="w-full md:w-1/4 pt-12 relative ml-0 md:ml-8">
        <div style={{ paddingBottom: "100%" }}></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52984.81091727007!2d35.48947769433121!3d33.901223983453036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f16c2c5c430e5%3A0xa97c7dfbc9de573b!2sZaitunay%20Bay!5e0!3m2!1sen!2slb!4v1711991163723!5m2!1sen!2slb"
          className="border-none w-full h-full absolute top-0 left-0 mt-12 md:mt-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ReachUs;
