import React, { useContext, useState } from "react";
import "./TableProducts.css";
import { CartContext } from "../cantext/CartContext";
export default function TableProducts() {
  const context = useContext(CartContext);
  console.log(context.UserCart)
  return (
    <ul className="parent-table-pro rounded">
      <>
        {context.UserCart.map((pro) => (
          <li className="item-table-pro">
            <table className="parent-table-data-pro">
              <tr className="data-pro">
                <td onClick={() => context.removeproduct(pro.id)}>
                  <i className="bx bxs-trash"></i>
                </td>
                <td>

                  <img src={`http://api.php//${pro.product.thumbnail_url}`} alt="" />
                </td>
                <td>{pro.product.description}</td>
                <td>
                  <div
                    onClick={() =>
                      context.counter[pro.id] > 1 &&
                      context.updateProductCount(
                        pro.id,
                        context.counter[pro.id] - 1
                      )
                    }
                    className="minus rounded"
                  >
                    <i className="bx bx-minus"></i>
                  </div>
                  <div className="number-pro">
                    {context.counter[pro.id]}
                  </div>
                  <div
                    onClick={() =>
                      context.updateProductCount(
                        pro.id,
                        context.counter[pro.id] + 1
                      )
                    }
                    className="plus rounded"
                  >
                    <i className="bx bx-plus"></i>
                  </div>
                </td>
                <td>{pro.product.price * context.counter[pro.id] || pro.product.price} </td>
              </tr>
            </table>
          </li>
        ))}
      </>
    </ul>
  );
}
