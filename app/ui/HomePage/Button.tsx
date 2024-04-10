import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  url: string;
  className?: string;
};

export default function Button({ title, url, className }: Props) {
  return (
    <Link href={url} passHref>
      <button
        className={`p-3 w-52 sm:w-64 shadow-black duration-300 bg-black flex items-center justify-end px-12 shadow transition -skew-x-12 hover:bg-white group border-[1px] border-transparent hover:border-black hover:shadow-none ${className}`}
      >
        <span className="text-white duration-300 transition group-hover:text-black text-base font-medium skew-x-12 text-nowrap">
          {title}
        </span>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="transform skew-x-12 text-white group-hover:text-black transition duration-300 ml-12"
        >
          <path
            d="M20.3779 12L21.085 11.2929L21.7921 12L21.085 12.7071L20.3779 12ZM5.37793 13C4.82564 13 4.37793 12.5523 4.37793 12C4.37793 11.4477 4.82564 11 5.37793 11V13ZM15.085 5.29289L21.085 11.2929L19.6708 12.7071L13.6708 6.70711L15.085 5.29289ZM21.085 12.7071L15.085 18.7071L13.6708 17.2929L19.6708 11.2929L21.085 12.7071ZM20.3779 13H5.37793V11H20.3779V13Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </Link>
  );
}
