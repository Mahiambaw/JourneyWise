import React from "react";
import { X } from "lucide-react";
import useShowClosePopup from "../../Hook/useClosePopup";

const CloseQuestionnaire = () => {
  const [handleClick, ShowClosePopup] = useShowClosePopup();

  return (
    <div className="absolute top-4 right-4 z-10">
      <button 
        onClick={handleClick}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
      >
        <X className="text-gray-600 w-6 h-6" />
        <ShowClosePopup />
      </button>
    </div>
  );
};

export default CloseQuestionnaire;