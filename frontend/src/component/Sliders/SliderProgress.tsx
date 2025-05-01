import React from "react";
import { Carousel } from "antd";
import "./SliderProgress.css";
import SubmitPro from "./SubmitPro";

const SliderProgress: React.FC = () => (
  <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={3000}>
    <div className="abbs">
      <div className="parent-body-slider-2 rounded">
        <div className="img-slider-2">
          <img src="img/4.jpg" alt="" />
        </div>
        <div className="conntent-slider-2">
          <p>ساعت هوشمند سامسونگ مدل Galaxy Watch3 SM-R840 45mm بند چرمی</p>
          <p>2.000.000 تومان</p>
          <div className="parent-sub rounded">
            <div className="parent-view rounded">
              <p>مشاهده</p>
              <div>
                <i className="bx bxs-arrow-from-bottom bx-rotate-270"></i>
              </div>
            </div>
            <div className="add rounded">
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="abbs">
      <div className="parent-body-slider-2 rounded">
        <div className="img-slider-2">
          <img src="img/5.jpg" alt="" />
        </div>
        <div className="conntent-slider-2">
          <p>ساعت هوشمند سامسونگ مدل Galaxy Watch3 SM-R840 45mm بند چرمی</p>
          <p>2.000.000 تومان</p>
          <div className="parent-sub rounded">
            <div className="parent-view rounded">
              <p>مشاهده</p>
              <div>
                <i className="bx bxs-arrow-from-bottom bx-rotate-270"></i>
              </div>
            </div>
            <div className="add rounded">
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="abbs">
      <div className="parent-body-slider-2 rounded">
        <div className="img-slider-2">
          <img src="img/6.jpg" alt="" />
        </div>
        <div className="conntent-slider-2">
          <p>ساعت هوشمند سامسونگ مدل Galaxy Watch3 SM-R840 45mm بند چرمی</p>
          <p>2.000.000 تومان</p>
          <div className="parent-sub rounded">
            <div className="parent-view rounded">
              <p>مشاهده</p>
              <div>
                <i className="bx bxs-arrow-from-bottom bx-rotate-270"></i>
              </div>
            </div>
            <div className="add rounded">
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Carousel>
);

export default SliderProgress;
