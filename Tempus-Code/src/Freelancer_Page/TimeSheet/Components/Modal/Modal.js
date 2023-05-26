import React from "react";

import "./Modal.css";

function Modal(props) {
  return (
    <div
      className="modal-fTimeSheet"
      onClick={() => (props.onClose ? props.onClose() : "")}
    >
      <div
        className="modal_content-fTimeSheet custom-scroll"
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
