import Header from "../../component/Header/Header";
import Navbar from "../../component/Navbars/Navbar";
import Navbar_res from "../../component/Navbars/Navbar-res";
import TableProducts from "../../component/TableProducts/TableProducts";
import Bill from "../../component/Bill/Bill";
import Footer from "../../component/Footer/Footer";

export default function ShoppingCart() {
  return (
    <>
      <Header />
      <Navbar_res />
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="section-title">
            <p>
              <span>دسته</span> بندی
            </p>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 mt-3">
            <TableProducts />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-3">
            <Bill />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </>
  );
}
