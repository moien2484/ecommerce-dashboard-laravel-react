import React, { ReactNode } from "react";
import "./Editinfosproduct.css";
type EditinfosproductType = {
  children: ReactNode;
  onsubmit: () => void;
};
export default function Editinfosproduct({
  children,
  onsubmit,
}: EditinfosproductType) {
  return (
    <div className="modal-parent">
      <div className="edit-modal-form">
        {children}
        <button onClick={onsubmit} className="edit-form-submit">
          ثبت اطلاعات جدید
        </button>
      </div>
    </div>
  );
}
