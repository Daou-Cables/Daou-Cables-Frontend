import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import { Tab } from "@/app/lib/definitions";
import Link from "next/link";

type Props = {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
};

const Menu = ({ isMenuOpen, setIsMenuOpen }: Props) => {
    const [activeTab, setActiveTab] = useState("Home");
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
    return (
        <>
            <div className="justify-center space-x-4 py-2 md:flex hidden">
                {tabs.map((tab) => (
                    <div key={tab.title} className="relative h-7">
                        <Link
                            href={tab.link}
                            onClick={() => setActiveTab(tab.title)}
                            className="pb-1 text-black mr-2"
                        >
                            {tab.title}
                        </Link>
                        {activeTab === tab.title && (
                            <div className="absolute bottom-0 h-[2px] w-3/5 bg-black transform skew-x-12" />
                        )}
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
