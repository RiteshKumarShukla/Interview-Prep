import React, { useState } from "react";

const ModalPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal-popup">
      <button onClick={openModal}>Open Modal</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modal Popup</h2>
            <p>This is a basic modal popup example.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPopup;
