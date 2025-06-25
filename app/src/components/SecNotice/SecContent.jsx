import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../Buttons/Buttons';
import SecurityCollage from './SecurityCollage';

const SecContent = ({ closeModal }) => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  }

  const handleClick = () => {
    closeModal();
    navigate("/questionnaire");
  }

  return (
    <section className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="mb-6 flex justify-center">
        <SecurityCollage className="w-full max-w-md" />
      </div>
      
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl md:text-2xl font-bold text-center">
          We're Dedicated To Protecting Your Data
        </h3>

        <p className="text-center mb-6">
          At JourneyWise, your privacy and security are our top priorities. As such, we want to be transparent about how we handle your information.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-bold mb-2">Who are we?</p>
          <p>
            JourneyWise is a tool developed by the Venus Voyagers tech squad as part of the Cherry on Tech Spring Cohort 2024. Our mission is to support underrepresented genders new to the tech world. JourneyWise operates without a backend, meaning we do not collect or store any personal information from you.
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-bold mb-2">How is your information used?</p>
          <p>
            Since no personal data is collected, you can rest assured that your privacy is fully protected. Any information you provide within the tool is used solely to personalize and curate your results, helping you refine your narrative and retell your story. Furthermore, your data is promptly deleted after use to ensure ongoing privacy and security.
          </p>
        </div>
        
        <p className="mt-6">
          Your trust is important to us, and we're committed to maintaining the highest standards of privacy and data protection. If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
        </p>
      </div>
      
      <div className="mt-8 mb-6 flex items-center justify-center">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={handleChange}
            className="w-5 h-5 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label htmlFor="agree" className="ml-3 text-sm md:text-base">
            Yes, I acknowledge and agree to these terms.
          </label>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Buttons 
          onClick={isChecked ? handleClick : undefined}
          primary={isChecked}
          alternate={!isChecked}
          rounded
          className={`w-full max-w-xs py-3 ${isChecked ? 'hover:bg-opacity-90' : 'cursor-not-allowed'}`}
          disabled={!isChecked}
        >
          Begin My Journey
        </Buttons>
      </div>
    </section>
  );
};

export default SecContent;