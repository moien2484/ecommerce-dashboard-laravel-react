import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { CartContext } from "../cantext/CartContext";

export default function Header() {
  const context = useContext(CartContext);
  const nameuser = localStorage.getItem("name");
  return (
    <div className="container-fluid isshow-header">
      <div className="row">
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
          <div className="hed-section-right">
            <div className="hed-logo">
              <img src="img/3.png" alt="" />
            </div>

            <div className="search-hed">
              <input type="search" />
              <div className="icon-search">
                <i className="bx bx-search"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 d-flex align-items-center justify-content-end  ">
          <div className="hed-section-left">
            <Link to="/shopping-cart">
              <div className="shopping-cart">
                <span>{context.UserCart.length}</span>
                <i className="bx bx-shopping-bag"></i>
              </div>
            </Link>
            <Link className="link" to="/register">
              <div className="login-and-sign">
                <span>ورود/ ثبت نام </span>
                <i className="bx bx-user-plus"></i>
              </div>
            </Link>
            <div >
              {nameuser == "admin" ? (
                  <div className="d-flex">
                <div className="login-and-sign">
                  <p> شما ادمین هستید</p>
                </div>
                <Link className="link" to="/dashboard">
                <div className="login-and-sign">
                  <p>ورود به داشبورد</p>
                </div>
                </Link>
                  </div>
                 
              ) : (
                <div className="login-and-sign">
                <p>{localStorage.getItem("name")}</p>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
