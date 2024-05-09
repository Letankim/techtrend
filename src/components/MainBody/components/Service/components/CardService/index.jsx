import React from "react";
import CardItem from "../CardItem";

import arrowLeft from "../../../.././../../images/arrow_circle_left.png";
import arrowRight from "../../../.././../../images/arrow_circle_right.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";

const CardService = ({ services }) => {
  return (
    <>
      <Swiper
        grabCursor={true}
        loop={true}
        slidesPerView={4}
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
          920: {
            slidesPerView: 3,
            pagination: {
              el: ".swiper-pagination-custom",
              clickable: true,
            },
          },
          1199.98: {
            slidesPerView: 4,
            pagination: {
              el: ".swiper-pagination-custom",
              clickable: true,
            },
          },
        }}
        pagination={{ el: ".swiper-pagination-custom", clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {services.map((service) => (
          <SwiperSlide>
            <CardItem service={service} />
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

export default CardService;
