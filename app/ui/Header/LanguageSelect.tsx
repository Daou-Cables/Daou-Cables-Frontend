"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const languages = ["Ar", "Cn", "En", "Es", "Fr", "Jp"];

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("En");

  return (
    <div className="relative inline-block text-left ml-2 z-50">
      <button
        className="rounded inline-flex mr-5 justify-between border-none max-w-24 items-center py-2 px-4 shadow bg-white border-2 border-gray-300 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={`/icons/${selectedLanguage}.svg`}
          alt={selectedLanguage}
          width={20}
          height={20}
        />
        <p className="mx-1 text-xs">{selectedLanguage}</p>
        <div className="w-6 h-6 flex flex-row items-center justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-1 max-w-24 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 mr-5"
          style={{ width: "max-content", minWidth: "6rem" }}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((language) => (
              <Link
                key={language}
                href="#"
                className="text-gray-700 max-w-24 px-4 py-2 text-sm hover:bg-gray-100 flex flex-row"
                role="menuitem"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedLanguage(language);
                  setIsOpen(false);
                }}
              >
                <Image
                  src={`/icons/${language}.svg`}
                  alt={language}
                  width={20}
                  height={20}
                />
                <p className="ml-2">{language}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
