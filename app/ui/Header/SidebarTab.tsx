import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  link: string;
  setIsMenuOpen: (isOpen: boolean) => void;
};

const SidebarTab = ({ title, link, setIsMenuOpen }: Props) => {
  return (
    <Link
      href={link}
      onClick={() => setIsMenuOpen(false)}
      className="bg-white w-vw flex justify-between align-items-center"
    >
      <span className="mx-4 font-medium text-2xl text-black">{title}</span>
      <span className="mx-4 font-medium text-2xl text-black">{">"}</span>
    </Link>
  );
};

export default SidebarTab;
