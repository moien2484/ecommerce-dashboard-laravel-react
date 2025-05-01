import React, { useContext, useState } from "react";
import "./tableprocms.css";
import { CartContext } from "../cantext/CartContext";
import Editinfosproduct from "../EditInosProduct/Editinfosproduct";
import { useNavigate } from "react-router-dom";
import { AllProductstype } from "../../type";
export default function Tableprocms() {
  const navigate = useNavigate();
  const context = useContext(CartContext);
  const [productid, setproductid] = useState<number>();
  const [productnewtitle, setproductnewtitle] = useState("");
  const [errors, seterrors] = useState<AllProductstype>();
  const [productnewpriec, setproductnewpriec] = useState<number>();
  const [productnewdescriptions, setproductnewdescriptions] = useState("");
  const [productnewdemo_url, setproductnewdemo_url] = useState<File>();
  const [productnewimg, setproductnewimg] = useState<File>();

  const submitnewinfos = () => {
    const formnewinfos = new FormData();
    formnewinfos.append("title", productnewtitle);
    formnewinfos.append("description", productnewdescriptions);
    formnewinfos.append("price", Number(productnewpriec).toString());
    if (productnewimg) {
      formnewinfos.append("thumbnail_url", productnewimg);
    }
    if (productnewdemo_url) {
      formnewinfos.append("demo_url", productnewdemo_url);
    }

    console.log(productnewimg, productnewdemo_url);
    formnewinfos.append("_method", "PUT");
    const token = localStorage.getItem("token");
    fetch(`http://api.php/api/products/${productid}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formnewinfos,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.errors) {
          seterrors(data.errors);
        }
      });
  };
  const handlerdelete = (id: number) => {
    const token = localStorage.getItem("token");
    fetch(`http://api.php/api/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() =>
        context.setshop((prevshop) => {
          return prevshop.filter((product) => product.id !== id);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <table className="w-100 bg-white rounded mt-5">
        <tr className="text-center fw-semibold">
          <th>عکس</th>
          <th>نام</th>
          <th>قیمت</th>
          <th></th>
        </tr>
        {context.shop.map((pro) => {
          return (
            <tr key={pro.id}>
              <td className="img-pro-cms">
                <img src={`http://api.php//${pro.thumbnail_url}`} alt="" />
              </td>
              <td className="align-middle">{pro.title}</td>
              <td className="align-middle">{pro.price}</td>
              <td className="align-middle btn-pro-cms">
                <button
                  className="rounded"
                  onClick={() => handlerdelete(pro.id)}
                >
                  حذف
                </button>
                <button
                  onClick={() => {
                    context.setisshowEditinfosproduct(true);
                    setproductid(pro.id);
                    setproductnewtitle(pro.title);
                    setproductnewpriec(pro.price);
                    setproductnewdescriptions(pro.description);

                    setproductnewdemo_url(undefined);
                    setproductnewimg(undefined);
                  }}
                  className="rounded"
                >
                  ویرایش
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      {context.isshowEditinfosproduct && (
        <Editinfosproduct onsubmit={submitnewinfos}>
          <ul className="list-input-group">
            <li className="list-item-infos-new">
              {" "}
              <input
                onChange={(e) => setproductnewtitle(e.target.value)}
                value={productnewtitle}
                type="text"
                placeholder="نام جدید محصول را وارد کنید"
              />{" "}
              {errors?.title && <p className="errors mt-2">{errors.title}</p>}
            </li>

            <li className="list-item-infos-new">
              {" "}
              <input
                onChange={(e) => setproductnewpriec(Number(e.target.value))}
                value={productnewpriec}
                type="text"
                placeholder="قیمت جدید محصول را وارد کنید"
              />{" "}
              {errors?.price && <p className="errors mt-2">{errors.price}</p>}
            </li>
            <li className="list-item-infos-new">
              {" "}
              <input
                onChange={(e) => setproductnewdescriptions(e.target.value)}
                value={productnewdescriptions}
                type="text"
                placeholder="مشخصات جدید محصول را وارد کنید"
              />{" "}
              {errors?.description && (
                <p className="errors mt-2">{errors.description}</p>
              )}
            </li>
            <li className="custom-img-upload">
              <label className="upload-button" htmlFor="FileUpload-img">
                {" "}
                انتخاب عکس اصلی
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setproductnewimg(e.target.files[0]);
                  }
                }}
                id="FileUpload-img"
                style={{ display: "none" }}
              />
            </li>
            <li className="custom-img-upload">
              <label className="upload-button" htmlFor="FileUpload-demo_url">
                {" "}
                انتخاب عکس دمو
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setproductnewdemo_url(e.target.files[0]);
                  }
                }}
                id="FileUpload-demo_url"
                style={{ display: "none" }}
              />
            </li>
          </ul>
        </Editinfosproduct>
      )}
    </>
  );
}
