import React from 'react';

const ProgressBar = ({ index, total }) => {
  const desktopImage = index === 0 
    ? "/Updated Progress Bar.svg" 
    : "/Updated Progress Bar (1).svg";
  
  const mobileImage = index === 0 
    ? "/journeywise-progress-bar-mobile-1.svg" 
    : "/journeywise-progress-bar-mobile-2.svg";

  return (
    <div className="w-full mb-6 sm:mb-8">
      {/* Desktop Progress Bar */}
      <div className="hidden md:block h-14 sm:h-16 relative">
        <img 
          src={desktopImage}
          alt="Progress Bar" 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Mobile Progress Bar */}
      <div className="md:hidden h-12 relative">
        <img 
          src={mobileImage}
          alt="Progress Bar" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ProgressBar;