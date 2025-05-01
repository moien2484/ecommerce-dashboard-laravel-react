// import React from 'react'
import { useContext, useState } from "react";
import "../login/login.css";
import { typeeror } from "../type.errors";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CartContext } from "../../component/cantext/CartContext";
export default function Register() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [errors, seterrors] = useState<typeeror>({});
const context = useContext(CartContext)
  const navigate = useNavigate();
  const notifysuccessregister = () =>
    toast.success("ثبت نام با موفقیت همراه بود");
  const handlerlogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("http://api.php/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
        phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          seterrors(data.errors);
        } else {
          notifysuccessregister();
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      })
      .catch(() => {
        context.notifyerror()
      });
  };
  return (
    <>
      <ToastContainer autoClose={3000} closeButton={false} />
      <div className="container-fluid moein">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
            <div className="section-wrapper-right">
              <div className="section-right-bg "></div>
              <div className="section-data-right">
                <div className="body-section-right">
                  <img
                    className="body-section-right-img"
                    src="img/2.png"
                    alt=""
                  />
                  <h2>
                    با ورود شدن به سایت با مشخصات شخصی خود با ما در ارتباط باشید
                  </h2>
                  <p>
                    اکنون با استفاده از اطلاعات شخصی خود وارد شوید تا از اتصال
                    بی‌نظیر و تجربیات شخصی‌شده لذت ببرید.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 position-relative">
            <div className="section-wrapper-left">
              <div className="form-sign-in form-login-in">
                <form onSubmit={handlerlogin} action="">
                  <div className="header-form-sign">
                    <h2>یک حساب کاربری ایجاد کنید</h2>
                    <p>مشخصات شخصی خود را وارد کنید و سفر را با ما آغاز کنید</p>
                  </div>
                  <div className="input-sign">
                    <input
                      value={name}
                      placeholder="نام و نام خانوادگی ..."
                      type="text"
                      onChange={(e) => setname(e.target.value)}
                    />
                    {errors.name && <p className="errors">{errors.name}</p>}
                    <input
                      value={email}
                      placeholder="ایمیل ... "
                      type="text"
                      onChange={(e) => setemail(e.target.value)}
                    />
                    {errors.email && <p className="errors">{errors.email}</p>}
                    <input
                      placeholder="رمز عبور ..."
                      type="text"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                    {errors.password && (
                      <p className="errors">{errors.password}</p>
                    )}

                    <input
                      placeholder="شماره تلفن ..."
                      type="text"
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                    />
                    {errors.phone && <p className="errors">{errors.phone}</p>}
                    <div className="sub-input-sign">
                      <Link className="link" to="/reset-password">
                        <p>رمز عبور را فراموش کرده اید؟</p>
                      </Link>
                      <div className="remember">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <p>مرا به خاطر بسپار</p>
                      </div>
                    </div>
                    <div className="btn-sign rounded">
                      <button>وارد شوید</button>
                    </div>
                  </div>
                </form>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <div className="line-title-icons-sign"></div>
                  <p className="title-icons-sign">ورود با</p>
                  <div className="line-title-icons-sign"></div>
                </div>
                <div className="icons-login">
                  <div>
                    <i className="bx bxl-facebook"></i>
                  </div>
                  <div>
                    <i className="bx bxl-linkedin"></i>
                  </div>
                  <div>
                    <i className="bx bxl-telegram"></i>
                  </div>
                  <div>
                    <i className="bx bxl-google"></i>
                  </div>
                </div>
                <div className="Dont-account">
                  <p>از قبل حساب کاربری دارید؟</p>
                  <Link className="link" to="/login">
                    <p>وارد شوید</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
