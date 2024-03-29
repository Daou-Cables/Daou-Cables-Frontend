import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import { Tab } from "@/app/lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
};

const tabs: Tab[] = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About Us",
        link: "/about-us",
    },
    {
        title: "Products",
        link: "/products",
    },
    {
        title: "Contact Us",
        link: "/contact-us",
    },
];

const getCurrentTab = (pathName: string) => {
    const currentTab = tabs.find(tab => tab.link === pathName.toString());
    return currentTab ? currentTab.title : "Home";
}

const Menu = ({ isMenuOpen, setIsMenuOpen }: Props) => {
    const pathName = usePathname();
    const currentTab = getCurrentTab(pathName);

    const [activeTab, setActiveTab] = useState(currentTab);
    
    const [hoveredTab, setHoveredTab] = useState(currentTab);
    
    return (
        <>
            <div className="justify-center items-center space-x-4 py-2 md:flex hidden">
                {tabs.map((tab) => (
                    <div key={tab.title} className="relative h-7">
                        <Link
                            href={tab.link}
                            onClick={() => setActiveTab(tab.title)}
                            className="pb-1 text-black mr-2"
                            onMouseEnter={() => setHoveredTab(tab.title)}
                            onMouseLeave={() => setHoveredTab("")}
                        >
                            {tab.title}
                        </Link>
                        <div
                            className={`absolute bottom-0 w-3/5 bg-black transform -skew-x-12 transition-all duration-200 ${
                                activeTab === tab.title ||
                                hoveredTab === tab.title
                                    ? "h-[2px]"
                                    : "h-[0px]"
                            }`}
                        />
                    </div>
                ))}
                <SearchBar />
            </div>
            <SideBar
                tabs={tabs}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
        </>
    );
};

export default Menu;
