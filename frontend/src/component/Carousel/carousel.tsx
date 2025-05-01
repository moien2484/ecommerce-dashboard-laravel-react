import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Massage from "../massage/Massage";
import "./carousel.css";
import { CartContext } from "../cantext/CartContext";
import { Pagination, FreeMode } from "swiper/modules";

const Carouselpro: React.FC = () => {
  const context = useContext(CartContext);
  return (
    <>
      <Swiper
        style={{ height: "350px", width: "100%" }}
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
        <SwiperSlide className="parent-carousel-card-first">
          <div className="first-card-carousel-pro">
            <img src="img/19.png" alt="" />
          </div>
        </SwiperSlide>
        {context.shop &&
          context.shop.map((pro) => {
            const isincart = context.UserCart?.some(
              (item) => item.id === pro.id
            );
            return (
              <SwiperSlide key={pro.id}>
                <div className="card-carousel-pro rounded">
                  <div className="header-carousel">
                    <div className="img-carousel-pro">
                      <img
                        src={`http://api.php//${pro.thumbnail_url}`}
                        alt=""
                      />
                    </div>
                    <p>{pro.description}</p>
                  </div>
                  <div className="body-carousel">
                    <p>{pro.price} تومان</p>
                    <div className="parent-sub rounded">
                      <div className="parent-view rounded">
                        <p>مشاهده</p>
                        <div>
                          <i className="bx bxs-arrow-from-bottom bx-rotate-270"></i>
                        </div>
                      </div>
                      <div className="rounded">
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

export default Carouselpro;
