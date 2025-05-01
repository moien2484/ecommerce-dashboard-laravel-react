import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="bg-footer">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="footer-sec-1">
                  <div className="footer-logo">
                    <img src="img/3.png" alt="" />
                  </div>
                  <p>
                    به آسانی از فروشگاه لوتسه خرید کنید و از تخفیفات ویژه
                    فروشگاه بهره مند شوید. به همین راحتی و مثل آب خوردن
                  </p>
                  <div className="location-footer">
                    <i className="bx bx-location-plus"></i>
                    <p>تبریز - بازار بزرگ تبریز</p>
                  </div>
                  <div className="phone-email-footer">
                    <div>
                      <i className="bx bx-mobile-alt"></i>
                      <p>09141234567</p>
                    </div>
                    <div>
                      <i className="bx bx-envelope"></i>
                      <p>store@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <ul className="Service-guide">
                  <li>راهنمای مشتریان</li>
                  <li>برگه نمونه</li>
                  <li>حساب کاربری من</li>
                  <li>پرداخت</li>
                  <li>سبد خرید</li>
                  <li>فروشگاه</li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                {" "}
                <ul className="Service-guide">
                  <li>راهنمای مشتریان</li>
                  <li>برگه نمونه</li>
                  <li>حساب کاربری من</li>
                  <li>پرداخت</li>
                  <li>سبد خرید</li>
                  <li>فروشگاه</li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                {" "}
                <ul className="Service-guide">
                  <li>راهنمای مشتریان</li>
                  <li>برگه نمونه</li>
                  <li>حساب کاربری من</li>
                  <li>پرداخت</li>
                  <li>سبد خرید</li>
                  <li>فروشگاه</li>
                </ul>
              </div>
              <div className="last-sec-footer mt-3">
                <h2>فروشگاه لوتسه، بررسی ، انتخاب و خرید آنلاین</h2>
                <p>یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی لوتسه سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
