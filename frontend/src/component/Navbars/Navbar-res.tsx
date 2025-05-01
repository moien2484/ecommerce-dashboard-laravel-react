import React from "react";
import "./Navbar-res.css";
export default function Navbar_res() {
  return (
    <div className="container-fluid isshow-nav-res">
      <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="hed-logo">
              <img src="img/3.png" alt="" />
            </div>
          </a>
          <div className="parent-icon-nav-res">
            <div className="shopping-cart">
              <span>0</span>
              <i className="bx bx-shopping-bag"></i>
            </div>
            <div className="user-icon-res">
              <i className="bx bx-user-plus"></i>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
            <div className="nav-res-logo ">
              <img src="img/3.png" alt="" />
            </div>
            <div className="search-hed mt-3">
              <input type="search" />
              <div className="icon-search">
                <i className="bx bx-search"></i>
              </div>
            </div>
            <div className="offcanvas-body">
              <ul className="parent-list-nav-rew">
                <li>صفحه اصلی</li>
                <li>سبد خرید</li>
                <li>دانستنی</li>
                <li>تکنولوژی</li>
                <li>فروشگاه</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
