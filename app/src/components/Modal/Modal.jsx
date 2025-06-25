import React from 'react';
import ReactDOM from 'react-dom';
import { X } from 'lucide-react';

const Modal = ({ children, onClose }) => {
  const portalTarget = document.getElementById('modal');
  
  if (!portalTarget) {
    console.error("Modal container not found");
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Close modal"
        >
          <X className="text-gray-600 w-5 h-5" />
        </button>
        <div className="p-4 md:p-8">{children}</div>
      </div>
    </div>,
    portalTarget
  );
};

export default Modal;