import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const emailIconURL = "/icons/email.svg";

export default function EmailForm() {
    return (
        <div className="w-full">
            <form action="" className="w-full flex">
                <div className="relative flex-grow">
                    <div className="border-[1px] border-black -skew-x-12 w-full p-[13px]">
                        <input
                            type="text"
                            placeholder="Your Email"
                            className="skew-x-12 border-r-0 w-full pl-12 focus:outline-none"
                        />
                    </div>
                    <Image
                        src={emailIconURL}
                        alt="email icon"
                        style={{
                            position: "absolute",
                            left: "20px",
                            top: "50%",
                            transform: "translateY(-50%)",
                        }}
                        width={23}
                        height={23}
                    />
                </div>
                <Link href="/contact-us" passHref>
                    <div className={`inline-block shadow-2xl`}>
                        <button className="py-4 sm:p-3 w-28 sm:w-80 bg-black flex items-center justify-between shadow-2xl sm:px-4 -skew-x-12">
                            <span className="text-white text-sm sm:text-xl font-medium skew-x-12 w-full">
                                Send Inquiry
                            </span>
                            <Image
                                src="/icons/ArrowRight.svg"
                                alt="Arrow right"
                                width={24}
                                height={24}
                                className="transform skew-x-12 hidden sm:block"
                            />
                        </button>
                    </div>
                </Link>
            </form>
        </div>
    );
}
