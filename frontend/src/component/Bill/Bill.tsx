import React, { useContext, useState } from "react";
import "./Bill.css";
import { CartContext } from "../cantext/CartContext";

export default function Bill() {
  const context = useContext(CartContext);
  // const proshoppingcart = context.UserCart;
  // const postAllProductOfUserCart = () => {
  //   const token = localStorage.getItem("token");

  //   proshoppingcart.forEach((pro) => {
  //     fetch("http://api.php/api/cart", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({
  //         product_id: pro.id,
  //         quantity: context.counter,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   });
  // };


  return (
    <div className="parent-biil-pro rounded">
      <table style={{ width: "100%" }}>
        <tr className="parent-item-bill">
          <td className="subject-bill">قیمت کل</td>
          <td className="price-Transportation">{context.totalprice} تومان</td>
        </tr>
        <tr className="parent-item-bill">
          <td className="subject-bill">حمل و نقل</td>
          <td className="price-Transportation">
            <p>نرخ ثابت: 20.000 تومان</p>
            <p className="mt-1">حمل و نقل به آذربایجان شرقی.</p>
          </td>
        </tr>
        <tr className="">
          <td className="subject-bill">مجموع</td>
          <td className="price-Transportation">{context.totalprice + 20000}تومان</td>
        </tr>
      </table>
      {/* <div
       
        className="btn-bill mt-2 rounded"
      >
        تسویه حساب
      </div> */}
      <div
         onClick={context.refreshusercat}
        className="btn-bill mt-2 rounded"
      >
        تسویه حساب
      </div>
    </div>
  );
}
