import React, { useState } from "react";
import Modal from "../components/Modal/Modal";
import SecContent from "../components/SecNotice/SecContent";

const useShowSecNotice = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const ShowSecNotice = () => (
    isOpen && <Modal onClose={handleClose}><SecContent closeModal={handleClose} /></Modal>
  );

  return [handleOpen, ShowSecNotice];
};

export default useShowSecNotice;