import { getContacts } from "@/app/lib/services/ContactsService";
import ContactIcon from "./ContactIcon";
import Head from "./Head";
import React from "react";
import { ContactUsData } from "@/app/lib/definitions";
import Link from "next/link";

type Props = {};

const ReachUs = async (props: Props) => {
  let contactData: ContactUsData | null = null;
  try {
    contactData = await getContacts();
    console.log(contactData);
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="flex flex-col md:flex-row items-center pb-44 pt-24">
      <div className="w-full md:w-1/2">
        <Head
          title="Reach Out to Us"
          body="You can find us at the crossroads of innovation and connectivity. Let's get in touch."
        />
        <div className="pt-12">
          <p>
            <span className="font-bold">Tel:</span>
            {contactData?.phone[0]}
          </p>
          <p>
            <span className="font-bold">Fax:</span>
            {contactData?.fax[0]}
          </p>
        </div>
        <div className="pt-12 space-x-4 flex">
          <Link href={`${contactData?.wechat[0]}`} passHref>
            <ContactIcon url="/icons/WeChat.svg" />
          </Link>
          <Link href={`${contactData?.instagram}`} passHref>
            <ContactIcon url="/icons/Instagram.svg" />
          </Link>
          <Link href={`${contactData?.facebook}`} passHref>
            <ContactIcon url="/icons/Facebook.svg" />
          </Link>
          <Link href={`mailto:${contactData?.email[0]}`} passHref>
            <ContactIcon url="/icons/EmailWhite.svg" />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/4 ml-0 md:ml-14">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d718574.936391318!2d119.30520821442758!3d30.207410980260228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344b7215119c3f41%3A0xe309a3a43af0b80!2sZhou%20Qing%20Xian%2C%20Hang%20Zhou%20Shi%2C%20China%2C%20311121!5e0!3m2!1sen!2slb!4v1712133806229!5m2!1sen!2slb"
          className="border-none w-full md:w-[452px] h-[500px] mt-12 md:mt-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ReachUs;
