import React from "react";
import SidebarTab from "./SidebarTab";
import { Tab } from "@/app/lib/definitions";

type Props = {
  tabs: Tab[];
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

const SideBar = ({ tabs, isMenuOpen, setIsMenuOpen }: Props) => {
  return (
    <div
      className={`fixed top-24 left-0 w-screen h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } border-t border-solid border-gray-300 p-16`}
    >
      {tabs.map((tab) => (
        <div key={tab.title} className="p-4">
          <SidebarTab
            title={tab.title}
            link={tab.link}
            key={tab.title}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
