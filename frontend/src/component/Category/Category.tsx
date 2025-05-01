import React from "react";
import "./Category.css";
import { CategoryproType } from "../../type";
import { CategoryProduct } from "../../data";
export default function Category() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="section-title"><p><span>دسته</span> بندی</p></div>
          {CategoryProduct.map((item: CategoryproType) => (
        <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-5 ">
            <div  className="parent-category-pro rounded">
              <div className="img-category-pro">
                <img src={item.img} alt="" />
              </div>
              <div className="content-text-category-pro">
                <p>{item.title}</p>
                <p>مشاهده »»</p>
              </div>
            </div>
        </div>
          ))}
      </div>
    </div>
  );
}
