"use client";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center py-2 px-4 shadow bg-white ml-4 mr-2 rounded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 opacity-60"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
          clipRule="evenodd"
        />
      </svg>

      <input
        className="ml-2 outline-none bg-transparent text-xs"
        type="text"
        placeholder="Search Products"
      />
    </div>
  );
};

export default SearchBar;
