import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { X, Menu } from "lucide-react";
import classNames from "classnames";

function Navbar() {

    const [active, setIsActive] = useState("English");
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (language) => {
        setIsActive(language === active ? "English" : language);
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const btnStyle = (language) => {
        return classNames(
            "font-dm-sans lg:text-[14px] tracking-2 font-semibold uppercase lg:px-[3px]",
            { 'bg-black text-white rounded-3xl m-[5px]': active === language }
        );
    };

   const NavLinks = () => {
    return (
        <>
            <li>
                <NavLink className="font-dm-sans text-base tracking-2 font-normal leading-35" to="/About Us">ABOUT US</NavLink>
            </li>
            <li>
                <NavLink className="font-dm-sans text-base tracking-2 font-normal leading-35" to="/">BEGIN JOURNEY</NavLink>
            </li>
        </>
    );
};

return (
    <>
        <nav className="flex">
            {/* Buttons for language selection */}
            <ul className="flex">
                <ul className="gap-[17px] lg:w-[300px] sm:w-[119px] lg:h-[54px] sm:h-[45px] p-2items-center border border-black rounded-full md:flex lg:mt-[-10px] lg:mr-[50px]">
                    <button className={btnStyle("English")} onClick={() => handleClick("English")}>English</button>
                    <button className={btnStyle("Spanish")} onClick={() => handleClick("Spanish")}>Español</button>
                    <button className={btnStyle("French")} onClick={() => handleClick("French")}>Français</button>
                </ul>
                {/* Hidden on mobile, visible on larger screens */}
                <div className="hidden flex-grow w-full gap-10 md:flex">
                    <NavLinks />
                </div>
            </ul>
            {/* Button for toggling mobile menu */}
            <div>
                <button className="md:hidden" onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
            </div>
        </nav>

        {/* Render NavLinks in mobile version if isOpen is true */}
        {isOpen && (
            <div className="flex flex-col items-center">
                <ul className="text-center">
                    <NavLinks />
                </ul>
            </div>
        )}
    </>
);
}

export default Navbar;
