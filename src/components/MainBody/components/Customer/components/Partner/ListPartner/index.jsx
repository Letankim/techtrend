import React from "react";
import PartnerItem from "../PartnerItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

const ListPartner = ({ partners }) => {
  return (
    <>
      <div className="swipper-mobile">
        <Swiper
          grabCursor={true}
          loop={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
            },
          }}
          pagination={{ el: ".swiper-pagination-custom", clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {partners.map((p) => (
            <SwiperSlide>
              <PartnerItem partner={p} />
            </SwiperSlide>
          ))}
          <div className="slider-controller">
            <div className="swiper-pagination-custom"></div>
          </div>
        </Swiper>
      </div>
      <div className="swiper-on-laptop">
        <div className="swipper-list-laptop">
          {partners.map((p) => (
            <PartnerItem partner={p} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListPartner;
