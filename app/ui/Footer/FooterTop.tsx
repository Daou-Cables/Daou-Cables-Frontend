import React from "react";
import Link from "next/link";

export default function FooterTop() {
    const aboutUs = [
        {
            title: "Introduction",
            href: "/about",
        },
        {
            title: "Certificates",
            href: "/about",
        },
    ];

    const products = [
        {
            title: "Coaxial Cable",
            href: "/about",
        },
        {
            title: "Coaxial Cable 50 Ohm",
            href: "/about",
        },
        {
            title: "Data/Lan Cable",
            href: "/about",
        },
        {
            title: "Security Alarm Cable",
            href: "/about",
        },
        {
            title: "Fire Alarm Cable",
            href: "/about",
        },
        {
            title: "Fibre Optical Cable",
            href: "/about",
        },
        {
            title: "Combine Cable",
            href: "/about",
        },
    ];

    const submitAnInquiry = [
        {
            title: "Send Inquiry",
            href: "/about",
        },
    ];

    const contactUs = [
        {
            key: "Tel",
            value: "+86-571-61078809",
        },
        {
            key: "Fax",
            value: "+86-571-61078809",
        },
        {
            key: "Email",
            value: "daoucables@example.com",
        },
    ];
    return (
        <div className="p-4 md:p-24 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex justify-between w-full sm:pr-48">
                <div>
                    <span className="font-medium text-l sm:text-xl mb-1">
                        About Us
                    </span>
                    <ul className="pl-8 list-disc">
                        {aboutUs.map((item) => (
                            <li
                                key={item.title}
                                className="underline text-sm sm:text-base mb-1"
                            >
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <span className="font-medium text-l sm:text-xl mb-1">
                        Products
                    </span>
                    <ul className="pl-8 list-disc">
                        {products.map((item) => (
                            <li
                                key={item.title}
                                className="underline text-sm sm:text-base mb-1"
                            >
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex justify-between w-full">
                <div>
                    <span className="font-medium text-base sm:text-xl mb-1">
                        Submit an Inquiry
                    </span>
                    <ul className="pl-8 list-disc">
                        {submitAnInquiry.map((item) => (
                            <li
                                key={item.title}
                                className="underline text-xs sm:text-base mb-1"
                            >
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pl-11">
                    <span className="font-medium text-l sm:text-xl mb-8">
                        Contact Us
                    </span>
                    <ul>
                        {contactUs.map((item) => (
                            <li key={item.key} className="text-xs sm:text-base mb-1">
                                <span className="font-medium">
                                    {item.key}:{" "}
                                </span>
                                <span>{item.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
