import React from "react";
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
      <div className={`${className} inline-block shadow-2xl`}>
        <button className="p-3 w-52 sm:w-80 bg-black flex items-center justify-between shadow-2xl px-4 -skew-x-12">
          <span className="text-white text-xl font-medium skew-x-12 w-full">
            {title}
          </span>
          <Image
            src="/icons/ArrowRight.svg"
            alt="Arrow right"
            width={24}
            height={24}
            className="transform skew-x-12"
          />
        </button>
      </div>
    </Link>
  );
}
