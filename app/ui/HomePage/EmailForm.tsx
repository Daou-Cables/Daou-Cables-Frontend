import React from "react";
import Button from "./Button";
import Image from "next/image";

const emailIconURL = "/icons/email.svg";

export default function EmailForm() {
    return (
        <div className="w-full">
            <form action="" className="w-full flex">
                <div className="relative flex-grow">
                    <input
                        type="text"
                        placeholder="Your Email"
                        className="border-[1px] border-black p-3 -skew-x-12 w-full pl-16 border-r-0"
                    />
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
                <Button title="Send Inquiry" url="/contact-us"/>
            </form>
        </div>
    );
}
