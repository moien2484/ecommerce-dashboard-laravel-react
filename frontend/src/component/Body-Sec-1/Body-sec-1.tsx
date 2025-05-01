import React from "react";
import SliderProgress from "../Sliders/SliderProgress";
import Slider from "../Sliders/Slider";
import "./Body-sec-1.css"
export default function BodySec1() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 mt-5">
            <Slider></Slider>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-5">
            {<SliderProgress></SliderProgress>}
          </div>

        </div>
        <div className="row mt-5">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
            <div className="parent-Services rounded">
              <div className="item-services">
                <div className="icon-services"><i className='bx bx-timer'></i></div>
                <div className="content-text-services">
                  <p>بازگشت وجه</p>
                  <p>در صورت عدم رضایت</p>
                </div>
              </div>
              <div className="item-services">
                <div className="icon-services"><i className='bx bxs-credit-card'></i></div>
                <div className="content-text-services">
                  <p>بازگشت وجه</p>
                  <p>در صورت عدم رضایت</p>
                </div>
              </div>
              <div className="item-services">
                <div className="icon-services"><i className='bx bxs-truck'></i></div>
                <div className="content-text-services">
                  <p>بازگشت وجه</p>
                  <p>در صورت عدم رضایت</p>
                </div>
              </div>
              <div className="item-services">
                <div className="icon-services"><i className='bx bx-headphone'></i></div>
                <div className="content-text-services">
                  <p>بازگشت وجه</p>
                  <p>در صورت عدم رضایت</p>
                </div>
              </div>
              <div className="item-services">
                <div className="icon-services"><i class='bx bxs-calendar-check'></i></div>
                <div className="content-text-services">
                  <p>بازگشت وجه</p>
                  <p>در صورت عدم رضایت</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
