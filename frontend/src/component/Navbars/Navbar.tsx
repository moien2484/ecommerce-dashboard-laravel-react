import React, { useEffect, useState } from "react";
import "./Navbar.css";
export default function Navbar() {
  const [isfixednavbar, setisfixednavbar] = useState<boolean>(false);
  useEffect(() => {
    const hendlerscrollbar = () => {
      if (window.scrollY > 63.2) {
        setisfixednavbar(true);
      } else {
        setisfixednavbar(false);
      }
    };
    window.addEventListener("scroll",hendlerscrollbar);
  }, []);
  return (
    <div className="container isshow-nav">
      <div className="row">
        <div
          className={`parent-nav rounded-pill ${
            isfixednavbar ? "navbar-fixed":""
          }`}
        >
          <ul className="menu-nav">
            <li className="list-item-nav-main rounded-pill">
              <div>
                <i className="bx bx-grid-horizontal"></i>
              </div>
              <p>صفحه اصلی</p>
            </li>
            <li className="list-item-nav">
              <i className="bx bx-basket"></i>
              <span>سبد خرید</span>
            </li>
            <li className="list-item-nav">
              <i className="bx bxs-brain"></i>
              <span>دانستنی</span>
            </li>
            <li className="list-item-nav">
              <i className="bx bxs-meteor"></i>
              <span>تکنولوژی</span>
            </li>
            <li className="list-item-nav">
              <i className="bx bxs-store-alt"></i>
              <span>فروشگاه</span>
            </li>
          </ul>
          <div className="location-parent-nav">
            <div className="icon-location">
              <i className="bx bxs-location-plus"></i>
            </div>
            <div className="location-country">
              <p>ایران</p>
              <p>آدرس خود را انتخاب کنید</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
