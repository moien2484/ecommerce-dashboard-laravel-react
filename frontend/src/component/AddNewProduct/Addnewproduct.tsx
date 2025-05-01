import React, { useContext, useState } from "react";
import { CartContext } from "../cantext/CartContext";
import "./Addnewproduct.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AllProductstype } from "../../type";
export default function Addnewproduct() {
  const navigate = useNavigate();
  const context = useContext(CartContext);
  const [newProductTitle, setNewProductTitle] = useState("");
  const [errors, seterrors] = useState<AllProductstype>();
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductdescriptions, setNewProductdescriptions] = useState("");
  const [newProductdemo_url, setNewProductdemo_url] = useState<File | null>(
    null
  );
  const [newProductthumbnail_url, setNewProductthumbnail_url] =
    useState<File | null>(null);
  const [newProductcategoryid, setNewProductcategoryid] = useState("");
  // const [selectedfilename, setselectedfilename] = useState("فایلی انتخاب نشده");

  const addnewproduct = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newProductTitle);
    formData.append("description", newProductdescriptions);
    formData.append("price", newProductPrice);
    formData.append("category_id", Number(newProductcategoryid).toString());
    if (newProductdemo_url) {
      formData.append("demo_url", newProductdemo_url);
    }
    if (newProductthumbnail_url) {
      formData.append("thumbnail_url", newProductthumbnail_url);
    }

    const token = localStorage.getItem("token");
    fetch(`http://api.php/api/products`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.errors) {
          seterrors(data.errors);
        }
      })
      .catch(() => context.notifyerror());
  };
  return (
    <>
      <ToastContainer autoClose={3000} closeButton={false} />
      <div className="products-main">
        <h1 className="products-title">افزودن محصول جدید</h1>
        <Link className="link" to="/">
          <div className="login-and-sign mt-5 text-center">
            <p> بازگشت به صفحه ی اصلی</p>
          </div>
        </Link>
        <form action="#" className="add-products-form">
          <div className="add-products-form-wrap">
            <div className="add-products-form-group">
              <input
                value={newProductTitle}
                onChange={(event) => setNewProductTitle(event.target.value)}
                type="text"
                placeholder="اسم محصول را بنویسید"
                className="add-products-input"
              />
              {errors?.title && <p className="errors">{errors.title}</p>}
            </div>
            <div className="add-products-form-group">
              <input
                value={newProductPrice}
                onChange={(event) => setNewProductPrice(event.target.value)}
                type="text"
                placeholder="قیمت محصول را بنویسید"
                className="add-products-input"
              />
              {errors?.price && <p className="errors">{errors.price}</p>}
            </div>
            <div className="add-products-form-group">
              <input
                value={newProductdescriptions}
                onChange={(event) =>
                  setNewProductdescriptions(event.target.value)
                }
                type="text"
                placeholder="مشخصات محصول را بنویسید"
                className="add-products-input"
              />
              {errors?.description && (
                <p className="errors">{errors.description}</p>
              )}
            </div>
            <div className="add-products-form-group">
              <input
                value={newProductcategoryid}
                onChange={(event) =>
                  setNewProductcategoryid(event.target.value)
                }
                type="text"
                placeholder="آیدی دسته بندی محصول را وارد کنید"
                className="add-products-input"
              />
              {errors?.category_id && (
                <p className="errors">{errors.category_id}</p>
              )}
            </div>

            <div className="custom-img-upload">
              <label className="upload-button" htmlFor="FileUpload-demo_url">
                {" "}
                انتخاب عکس دمو
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setNewProductdemo_url(e.target.files[0]);
                  }
                }}
                id="FileUpload-demo_url"
                style={{ display: "none" }}
              />
                            {
                newProductdemo_url && <p className="submit-ada-new-pro-photo">عکس مورد نظر انتخاب شد</p>
              }
            </div>

            <div className="custom-img-upload">
              <label
                className="upload-button"
                htmlFor="FileUpload-img-thumbnail_url"
              >
                {" "}
                انتخاب عکس اصلی
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setNewProductthumbnail_url(e.target.files[0]);
                  }
                }}
                id="FileUpload-img-thumbnail_url"
                style={{ display: "none" }}
              />
              {
                newProductthumbnail_url && <p className="submit-ada-new-pro-photo">عکس مورد نظر انتخاب شد</p>
              }
            </div>
          </div>
          <button
            onClick={(event) => {
              addnewproduct(event);
              navigate("/dashboard/product");
              context.getAllProduct();
            }}
            className="add-products-submit"
          >
            ثبت محصول
          </button>
        </form>
      </div>
    </>
  );
}
