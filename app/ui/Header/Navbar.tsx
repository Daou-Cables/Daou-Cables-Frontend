"use client";
import React, { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="flex md:hidden justify-center items-center mr-8">
                <button
                    onClick={toggleMenu}
                    className={`p-2 menu-button ${isMenuOpen ? "open" : ""}`}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <style jsx>{`
                .menu-button {
                    width: 30px;
                    height: 25px;
                    position: relative;
                    transform: rotate(0deg);
                    transition: 0.5s ease-in-out;
                    cursor: pointer;
                }
                .menu-button span {
                    display: block;
                    position: absolute;
                    height: 2px;
                    width: 100%;
                    background: #000;
                    border-radius: 9px;
                    opacity: 1;
                    left: 0;
                    transform: rotate(0deg);
                    transition: 0.25s ease-in-out;
                }
                .menu-button span:nth-child(1) {
                    top: 0px;
                }
                .menu-button span:nth-child(2),
                .menu-button span:nth-child(3) {
                    top: 9px;
                }
                .menu-button span:nth-child(4) {
                    top: 18px;
                }
                .menu-button.open span:nth-child(1),
                .menu-button.open span:nth-child(4) {
                    top: 9px;
                    width: 0%;
                    left: 50%;
                }
                .menu-button.open span:nth-child(2) {
                    transform: rotate(45deg);
                }
                .menu-button.open span:nth-child(3) {
                    transform: rotate(-45deg);
                }
            `}</style>
        </>
    );
};

export default Navbar;
