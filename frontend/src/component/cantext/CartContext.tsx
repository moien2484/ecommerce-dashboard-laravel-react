import React, { createContext, useState, useEffect } from "react";
import { AllProductstype } from "../../type";
import { toast } from "react-toastify";
import { UsercartProductstype } from "../../type";
type CartContextProviderprops = {
  children: React.ReactNode;
};
type CartContexttype = {
  totalprice: number;
  shop: AllProductstype[];
  UserCart: UsercartProductstype[];
  counter: { [key: number]: number };
  isshowEditinfosproduct: boolean;
  getAllProduct: () => void;
  refreshusercat: () => void;
  addproduct: (id: number) => void;
  updateProductCount: (id: number, quantity: number) => void;
  removeproduct: (id: number) => void;
  setisshowEditinfosproduct: (isshos: boolean) => void;
  notifyerror: () => void;
  setshop: React.Dispatch<React.SetStateAction<AllProductstype[]>>; // اینو اضافه کن
};
// setcounter: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;

export const CartContext = createContext({} as CartContexttype);

export default function CartContextProvider({
  children,
}: CartContextProviderprops) {
  const [counter, setcounter] = useState<{ [key: number]: number }>({});
  const [UserCart, setUserCart] = useState<UsercartProductstype[]>([]);
  const [shop, setshop] = useState<AllProductstype[]>([]);
  const [totalprice, settotalprice] = useState<number>(Number);
  const [isshowEditinfosproduct, setisshowEditinfosproduct] =
    useState<boolean>(false);
  window.addEventListener("keydown", (e) => {
    if (e.which == 27) {
      setisshowEditinfosproduct(false);
    }
  });
  useEffect(() => {
    getAllProduct();
  }, []);
  const getAllProduct = () => {
    const token = localStorage.getItem("token");
    fetch("http://api.php/api/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((result) => {
        setshop(result.products);
      });
  };
  const notifyerror = () =>
    toast.error("در هنگام ورود سرور با خطا روبرو شده است");

  const refreshusercat = () => {
    const token = localStorage.getItem("token");
    fetch("http://api.php/api/cart", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserCart(data.items);
        settotalprice(data.TotalPrice);
        console.log(data);
        const updatedCounter: { [key: number]: number } = {};
        data.items.forEach((item: any) => {
          updatedCounter[item.id] = item.quantity;
        });
        setcounter(updatedCounter);
      })
      .catch((err) => console.log(err));
  };
  const addproduct = (id: number) => {
    const token = localStorage.getItem("token");
    const isInCart = UserCart.find((product) => product.id === id);
    if (isInCart) return;
    fetch("http://api.php/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ product_id: id, quantity: 1 }),
    })
      .then(() => {
        refreshusercat();
      })
      .catch(() => notifyerror());
  };
  const removeproduct = (id: number) => {
    const token = localStorage.getItem("token");
    fetch(`http://api.php/api/cart/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => refreshusercat());
  };
  const updateProductCount = (id: number, quantity: number) => {
    const token = localStorage.getItem("token");
    fetch(`http://api.php/api/cart/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ quantity }),
    })
      .then(() => refreshusercat())
      .catch((err) => console.log(err));
  };

  return (
    <CartContext.Provider
      value={{
        setshop,
        notifyerror,
        totalprice,
        addproduct,
        removeproduct,
        UserCart,
        shop,
        getAllProduct,
        counter,
        updateProductCount,
        refreshusercat,
        setisshowEditinfosproduct,
        isshowEditinfosproduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
