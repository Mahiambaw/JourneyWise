// EmailMe.jsx
import React, { useState } from "react";
import Buttons from "../Buttons/Buttons";
import Modal from "../Modal/Modal";
import EmailResult from "./EmailResult";
import './emailMe-custom.css'

const EmailMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="py-10 md:py-16 px-4 text-center bg-[#F5F5F5]">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <img 
            src="/mdi_email-plus.svg" 
            alt="Email icon" 
            className="w-12 h-12 md:w-16 md:h-16"
          />
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3">Want To Save Your Results?</h3>
        <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
          Click the button below to input your email and we'll send you a printable PDF of your results.
        </p>
        <Buttons 
          primary 
          rounded 
          className="w-full max-w-[242px] h-12 md:h-[45px] text-sm md:text-base"
          onClick={handleClick}
        >
          EMAIL ME
        </Buttons>
        {isOpen && (
          <Modal onClose={handleClose}>
            <EmailResult onClose={handleClose} />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default EmailMe;