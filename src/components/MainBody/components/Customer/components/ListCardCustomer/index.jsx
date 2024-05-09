import React from "react";
import CardCustomer from "../CardCustomer";

import arrowLeft from "../../../.././../../images/arrow_circle_left.png";
import arrowRight from "../../../.././../../images/arrow_circle_right.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

const ListCardCustomer = ({ customers }) => {
  return (
    <>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 20,
            pagination: {
              el: ".swiper-pagination-custom",
              clickable: true,
            },
          },
          576: {
            slidesPerView: 2,
            pagination: {
              el: ".swiper-pagination-custom",
              clickable: true,
            },
          },
          1199.98: {
            slidesPerView: 3,
            pagination: {
              el: ".swiper-pagination-custom",
              clickable: true,
            },
          },
        }}
        pagination={{ el: ".swiper-pagination-custom", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {customers.map((customer) => (
          <SwiperSlide>
            <CardCustomer card={customer} />
          </SwiperSlide>
        ))}
        <div className="slider-controller">
          <div className="swiper-button-prev-custom slider-arrow">
            <img src={arrowLeft} alt="back" />
          </div>
          <div className="swiper-pagination-custom"></div>
          <div className="swiper-button-next-custom slider-arrow">
            <img src={arrowRight} alt="next" />
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default ListCardCustomer;
