"use client";

import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

export default function EmailForm() {
  const [email, setEmail] = useState<string>("");
  return (
    <div className="w-full flex flex-row justify-center">
      <form action="" className="w-full flex max-w-[900px]">
        <div className="relative flex flex-1 items-stretch">
          <div className="border-[1px] border-black -skew-x-12 w-full px-6 flex-1 flex items-center">
            <Image
              className="skew-x-12"
              src="/icons/email.svg"
              alt="email icon"
              width={23}
              height={23}
            />
            <input
              type="text"
              placeholder="Your Email"
              className="skew-x-12 border-r-0 w-full pl-4 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <Button
          url={`contact-us?email=${email}`}
          className="sm:w-[240px] -ml-2 pr-6 shadow-none"
          title="Send Inquiry"
        ></Button>
      </form>
    </div>
  );
}
