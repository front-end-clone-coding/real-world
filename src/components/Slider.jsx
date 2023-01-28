import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./Style.css";

// import required modules
import { Autoplay } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Autoplay]}
        autoplay={{ delay: 1000 }}
        disableOnInteraction={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://cdn.realworld.to/user-files/Tginio2cOCaT3J0bF1rvpg/22-11-09-08-54-52_j0kaDx6mXG4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.realworld.to/user-files/ZhZf13RTauX2VVqNtUgVvA/20-10-23-09-24-48_1LU_VoYeHc0.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.realworld.to/user-files/Tginio2cOCaT3J0bF1rvpg/22-11-09-08-54-52_j0kaDx6mXG4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.realworld.to/user-files/jgWcGgj-rzR5YHLxKwsNFA/21-11-02-07-29-32_uCsuZj6AI2Q.png" />
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
