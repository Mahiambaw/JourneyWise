import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const navigate = useNavigate(); 

  const handleClick = () => navigate("/");

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white shadow-md md:px-8">
      <button onClick={handleClick} className="focus:outline-none">
        <img 
          src="/JourneyWise-Logo-1.svg" 
          alt="JourneyWise logo" 
          className="w-32 h-auto md:w-40"
        /> 
      </button>
      <Navbar />
    </header>
  );
};

export default Header;