import React from "react";
import Header from "../../component/Header/Header";
import Navbar from "../../component/Navbars/Navbar";
import "./Home.css";
import Navbar_res from "../../component/Navbars/Navbar-res";
import BodySec1 from "../../component/Body-Sec-1/Body-sec-1";
import Category from "../../component/Category/Category";
import AmazingOffer from "../../component/AmazingOffer/AmazingOffer";
import Baner1 from "../../component/Baner1/Baner1";
import NewProduct from "../../component/NewProduct/NewProduct";
import Footer from "../../component/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar_res />
      <Navbar />
      <BodySec1 />
      <Category />
      <AmazingOffer />
      <Baner1 />
      <NewProduct />
   
      <Footer />
    </>
  );
}
