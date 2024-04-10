"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const [focus, setFocus] = useState<boolean>(false);
  console.log(focus);

  return (
    <div className="flex items-center h-10 px-4 shadow bg-white ml-6 mr-2 rounded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        // transform x to the left on focus
        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
          focus && "transform -translate-x-1"
        }`}
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
          clipRule="evenodd"
        />
      </svg>

      <input
        onClick={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={`ml-1 transition outline-none bg-transparent text-xs ${
          focus ? "placeholder-white" : "placeholder-gray-400"
        }`}
        type="text"
        placeholder="Search Products"
      />
    </div>
  );
};

export default SearchBar;
