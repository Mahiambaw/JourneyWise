import React, { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { X, Menu } from "lucide-react";
import Buttons from "../Buttons/Buttons"
import useShowSecNotice from '../../Hook/useShowSecNotice'
import LanguageSelection from "./LanguageSelection";
import './navbar-custom.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [handleSecNotice, ShowSecNotice] = useShowSecNotice();
    const location = useLocation();
    const isResultPage = location.pathname === '/result';

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav id="navigation" className="navbar-custom">
                {!isResultPage && (
                    <div className="md:flex">
                        <Buttons id="navbutton" onClick={handleSecNotice} primary rounded>
                            Begin My Journey
                        </Buttons>
                        <ShowSecNotice />
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;