import React, { useState } from "react";
import "./ResetPassword.css";
export default function ResetPassword() {
  const [email, setemail] = useState("");
  const postemail = () => {
    fetch("http://api.php/api/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
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
              <form action="">
                <div className="header-form-sign">
                  <h2>بازیابی رمز عبور</h2>
                  <p>لطفا برای دریافت رمز جدید ایمیل خود را وارد کنید</p>
                </div>
                <div className="input-sign">
                  <input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder="ایمیل ... "
                    type="text"
                    name="email"
                  />
                </div>
              </form>
              <div className="btn-new-Password">
                <button onClick={postemail}>دریافت رمز عبور جدید</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
