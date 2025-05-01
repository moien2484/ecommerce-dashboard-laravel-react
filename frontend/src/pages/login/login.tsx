import { useContext, useState } from "react";
import "./login.css";
import { typeeror } from "../type.errors";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CartContext } from "../../component/cantext/CartContext";
export default function Login() {
  const context = useContext(CartContext)
  const [errors, seterrors] = useState<typeeror>({});
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const notifysuccesslogin = () => toast.success("ورود با موفقیت همراه بود");
  const handlerlogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("http://api.php/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("name", data.user.name);
          notifysuccesslogin();
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else if (data.errors) {
          seterrors(data.errors);
        }
      }).catch(() =>{
        context.notifyerror()
      })
  };
  return (
    <>
    <ToastContainer
    autoClose={3000}
    closeButton={false}
    />
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
              <div className="form-sign-in">
                <form onSubmit={handlerlogin} action="">
                  <div className="header-form-sign">
                    <h2>وارد شوید</h2>
                    <p>لطفا برای ورود به حساب کاربری خود وارد شوید</p>
                  </div>
                  <div className="input-sign">
                    <input
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      placeholder="ایمیل ... "
                      type="text"
                      name="email"
                    />
                    {errors.email && <p className="errors">{errors.email}</p>}
                    <input
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      placeholder="رمز عبور ..."
                      type="text"
                      name="password"
                    />
                    {errors.password && (
                      <p className="errors">{errors.password}</p>
                    )}
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
                  <p>حساب کاربری ندارید؟</p>
                  <Link className="link" to="/register">
                    <p>اکنون ایجاد کنید</p>
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
