import React from "react";

const TopSkillsText = ({ texts, index }) => {
  return (
    <ul className={`space-y-1 md:space-y-3 ${index === 2 ? "text-white" : ""}`}>
      {texts.map((text, idx) => (
        <li key={idx} className="flex items-start">
          {index === 2 ? (
            <img 
              src="/journeywise-checkmark-icon-light.svg" 
              alt="check" 
              className="w-3 h-3 md:w-5 md:h-5 mt-0.5 md:mt-1 mr-2 flex-shrink-0" 
            />
          ) : (
            <span className="mr-2 mt-0.5 md:mt-1 text-lg md:text-xl">•</span>
          )}
          <span className="text-xs md:text-base lg:text-lg">{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default TopSkillsText;