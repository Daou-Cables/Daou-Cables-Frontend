import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import LanguageDropdown from "./LanguageSelect";

const Header = () => {
    return (
        <div className="w-full bg-white shadow-md flex items-center justify-between sm:px-12 z-50 px-4 fixed">
            <div className="flex items-center relative">
                <Link href="/" passHref>
                    <Image
                        src="/daouCables.svg"
                        alt="Logo"
                        width={180}
                        height={180}
                        priority
                    />
                </Link>
            </div>

            <div className="flex items-center justify-center">
                <div className="flex flex-row text-gray-600 md:hidden">
                    <LanguageDropdown />
                    <Navbar />
                </div>

                <div className="hidden md:flex flex-row text-gray-600 items-center justify-center">
                    <Navbar />
                    <LanguageDropdown />
                </div>
            </div>
        </div>
    );
};

export default Header;
