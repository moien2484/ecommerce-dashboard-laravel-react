import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SubmitPro from "./SubmitPro";
import Massage from "../massage/Massage";
import "./carousel.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./carousel.css";

import { Pagination, FreeMode } from "swiper/modules";
import { CartContext } from "../cantext/CartContext";

// کامپوننت اصلی
const Carouselnewpro: React.FC = () => {
  const context = useContext(CartContext);
  return (
    <>
      <Swiper
        style={{
          height: "400px",
          width: "99%",
          position: "absolute",
          marginBottom: "200px",
        }}
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {context.shop &&
          context.shop.map((pro) => {
            const isincart = context.UserCart?.some(
              (item) => item.id === pro.id
            );
            return (
              <SwiperSlide key={pro.id}>
                <div className="card-carousel-pro rounded">
                  <div className="header-carousel">
                    <div>
                      <img
                        src={`http://api.php//${pro.thumbnail_url}`}
                        alt=""
                        className="header-carousel"
                      />
                    </div>
                    <p>{pro.description}</p>
                  </div>
                  <div className="body-carousel">
                    <p>{pro.price}</p>
                    <div className="parent-sub rounded">
                      <div className="parent-view rounded">
                        <p>مشاهده</p>
                        <div>
                          <i className="bx bxs-arrow-from-bottom bx-rotate-270"></i>
                        </div>
                      </div>
                      <div
                        
                        className="rounded"
                      >
                        <Massage
                          isincart={isincart}
                          onClick={() => context.addproduct(pro.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default Carouselnewpro;
