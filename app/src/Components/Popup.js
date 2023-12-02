import React from "react";

const Popup = ({ closePopup }) => {
  return (
    <div className="popup">
        <button className="close-button" onClick={closePopup}>
          Close
        </button>
    </div>
  );
};

export default Popup;
