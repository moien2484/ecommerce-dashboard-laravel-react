// import React, { createContext, useState, useEffect } from "react";
// import { AllProductstype } from "../../type";

// type CartContextProviderprops = {
//   children: React.ReactNode;
// };

// type CartContexttype = {
//   shop: AllProductstype[];
//   userCart: AllProductstype[];
//   counter: { [key: number]: number };
//   getAllProducts: () => void;
//   refreshUserCart: () => void;
//   addProductToCart: (id: number) => void;
//   updateProductCount: (id: number, quantity: number) => void;
//   removeProductFromCart: (id: number) => void;
// };

// export const CartContext = createContext({} as CartContexttype);

// export default function CartContextProvider({
//   children,
// }: CartContextProviderprops) {
//   const [shop, setShop] = useState<AllProductstype[]>([]);
//   const [userCart, setUserCart] = useState<AllProductstype[]>([]);
//   const [counter, setCounter] = useState<{ [key: number]: number }>({});

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     getAllProducts();
//     refreshUserCart();
//   }, []);

//   const getAllProducts = () => {
//     fetch("http://api.php/api/products")
//       .then((res) => res.json())
//       .then((data) => setShop(data.products));
//   };

//   const refreshUserCart = () => {
//     fetch("http://api.php/api/cart", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setUserCart(data.cart);
//         // فرض: هر آیتم در data.cart دارای id و quantity است
//         const updatedCounter: { [key: number]: number } = {};
//         data.cart.forEach((item: any) => {
//           updatedCounter[item.id] = item.quantity;
//         });
//         setCounter(updatedCounter);
//       });
//   };

//   const addproduct = (id: number) => {
//     const token = localStorage.getItem("token");
  
//     const isInCart = UserCart.find((product) => product.id === id);
//     if (isInCart) return; // اگه قبلاً تو سبد بود کاری نکن
  
//     fetch("http://api.php/api/cart", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ product_id: id, quantity: 1 }),
//     })
//       .then(() => {
//         refreshusercat(); // بعد از اضافه کردن، سبد خرید رو آپدیت کن
//       })
//       .catch((err) => console.log("خطا در افزودن محصول:", err));
//   };

//   const updateProductCount = (id: number, quantity: number) => {
//     fetch(`http://api.php/api/cart/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ quantity }),
//     }).then(() => refreshUserCart());
//   };

//   const removeProductFromCart = (id: number) => {
//     fetch(`http://api.php/api/cart/${id}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }).then(() => refreshUserCart());
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         shop,
//         userCart,
//         counter,
//         getAllProducts,
//         refreshUserCart,
//         addProductToCart,
//         updateProductCount,
//         removeProductFromCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }
// import React, { useContext } from "react";
// import "./TableProducts.css";
// import { CartContext } from "./cantext/CartContext";

// export default function TableProducts() {
//   const {
//     userCart,
//     counter,
//     updateProductCount,
//     removeProductFromCart,
//   } = useContext(CartContext);

//   return (
//     <ul className="parent-table-pro rounded">
//       {userCart.map((pro) => (
//         <li className="item-table-pro" key={pro.id}>
//           <table className="parent-table-data-pro">
//             <tr className="data-pro">
//               <td onClick={() => removeProductFromCart(pro.id)}>
//                 <i className="bx bxs-trash"></i>
//               </td>
//               <td>
//                 <img src={`http://api.php//${pro.thumbnail_url}`} alt="" />
//               </td>
//               <td>{pro.description}</td>
//               <td>
//                 <div
//                   onClick={() =>
//                     updateProductCount(pro.id, Math.max((counter[pro.id] || 1) - 1, 1))
//                   }
//                   className="minus rounded"
//                 >
//                   <i className="bx bx-minus"></i>
//                 </div>
//                 <div className="number-pro">{counter[pro.id] || 1}</div>
//                 <div
//                   onClick={() =>
//                     updateProductCount(pro.id, (counter[pro.id] || 1) + 1)
//                   }
//                   className="plus rounded"
//                 >
//                   <i className="bx bx-plus"></i>
//                 </div>
//               </td>
//               <td>{(pro.price * (counter[pro.id] || 1)).toLocaleString()} تومان</td>
//             </tr>
//           </table>
//         </li>
//       ))}
//     </ul>
//   );
// }
<>
<button onClick={() => updateProductCount(product.id, counter[product.id] + 1)}>+</button>
<p>{counter[product.id]}</p>
<button
  onClick={() =>
    counter[product.id] > 1 &&
    updateProductCount(product.id, counter[product.id] - 1)
  }
>
  -
</button>
  </>