import React from "react";
import "./NewProduct.css";
import Carouselnewpro from "../Carousel/carousel2";
export default function NewProduct() {
  return (
    <div className="container-fluid mt-5">
      <div className="section-title">
        <p>
          <span>محصولات</span> جدید
        </p>
      </div>
      <div className="row mt-carousel-newpro">
        <div className="parent-newpro mt-5">
          <Carouselnewpro />
        </div>
      </div>
    </div>
  );
}
