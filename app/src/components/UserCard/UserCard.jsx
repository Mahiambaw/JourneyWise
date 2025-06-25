import React from "react";

const UseCard = ({ children, Img }) => {
  return (
    <div className="relative w-full h-full min-h-[500px] md:min-h-[600px] rounded-xl overflow-hidden shadow-lg">
      <img 
        src={Img} 
        alt="Archetype background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
        {children}
      </div>
    </div>
  )
}

export default UseCard;