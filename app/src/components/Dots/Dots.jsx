import React from "react"


function Dots({ arch, handleClick, activeIndex, selectedArchetype }) {
  if (selectedArchetype) {
    return null;
  }

  return (
    <div className="flex justify-center mt-8 space-x-3">
      {arch.map((el, index) => (
        <button
          key={el.id}
          className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
            activeIndex === index 
              ? "bg-primary border-2 border-white scale-125" 
              : "bg-gray-300 border border-gray-400"
          }`}
          onClick={() => handleClick(index)}
          aria-label={`Show ${el.title}`}
        />
      ))}
    </div>
  );
}

export default Dots;