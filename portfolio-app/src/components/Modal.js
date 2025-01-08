import React from "react";
import "../css/Modal.css";

function Modal({ title, content, actions, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <div className="modal-body">{content}</div>
        <div className="modal-actions">
          {actions.map((action, index) => (
            <button key={index} onClick={action.onClick}>
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
