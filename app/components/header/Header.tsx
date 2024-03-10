import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import LanguageDropdown from "./LanguageSelect";

const Header = () => {
  return (
    <div className="bg-white h-24 shadow-md flex items-center justify-between px-4">
      <div className="flex items-center relative">
        <Link href="/" passHref>
          <Image
            src="/daouCables.svg"
            alt="Logo"
            width={180}
            height={180}
          />
        </Link>
      </div>

      <div className="flex items-center">
        <div className="text-gray-600 flex flex-row">
          <Navbar />
          <SearchBar />
          <LanguageDropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;
