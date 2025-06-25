import React from "react";

const ImageTextCard = ({ img, text, title, alt, isActive, archtype }) => {
  const isSelectedArchetype = archtype && archtype.archeType === title;
  const shouldShow = isSelectedArchetype || (!archtype.archeType && isActive);
  
  if (!shouldShow) return null;

  return (
    <div className="w-full max-w-2xl bg-white bg-opacity-90 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col items-center">
        <div className="mb-6 w-48 h-48 flex items-center justify-center">
          <img 
            src={img} 
            alt={alt} 
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageTextCard;