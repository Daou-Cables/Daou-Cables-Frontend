import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import LanguageDropdown from "./LanguageSelect";

const Header = () => {
  return (
    <div className="w-full bg-white shadow-sm flex items-center justify-between sm:px-14 z-50 px-6 fixed py-1">
      <Link href="/" passHref>
        <Image
          src="/daouCables.svg"
          alt="Daou Cables"
          width={120}
          height={120}
          priority
        />
      </Link>

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
