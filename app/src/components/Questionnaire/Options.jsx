import React from "react";

const Options = ({ answerChoices, handleSelected, selectedId }) => {
  const handleChange = (i, id) => {
    if (selectedId === null) {
      handleSelected(i, id);
    }
  };

  return (
    <div className="space-y-3">
      {answerChoices.map((choice, i) => {
        const isSelected = selectedId === choice.id;
        const isDisabled = selectedId !== null && !isSelected;
        
        return (
          <div 
            key={choice.answer} 
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200
              ${isSelected 
                ? 'border-blue-500 bg-blue-100 shadow-md cursor-pointer' 
                : isDisabled 
                  ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'border-gray-300 hover:border-gray-400 cursor-pointer'}`}
            onClick={() => handleChange(i, choice.id)}
          >
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-6 h-6 rounded-full border-2 mr-3
                ${isSelected 
                  ? 'border-blue-500 bg-blue-500' 
                  : isDisabled 
                    ? 'border-gray-300' 
                    : 'border-gray-500'}`}>
                {isSelected && (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
              </div>
              <label className={`flex-grow ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                {choice.answer}
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Options;