import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Style.css";
// import required modules
import { Autoplay } from "swiper";

export default function Slider() {
  const navigate = useNavigate();
  const gameInfo = [
    {
      category: true,
      gameImg:
        "https://cdn.realworld.to/user-files/DBqrgoLAyLAiCL-aMSgv0g/22-12-06-02-18-31_7lf5sNLdLIA.jpg",
      gameTitle: "리얼월드 인기작1",
      gameDesc: "무료",
      id: 1,
    },
    {
      category: false,
      gameImg:
        "https://cdn.realworld.to/user-files/KtkDjeNGuVtRLXJcPGizQg/22-08-26-13-21-36_AfyiKDRnYw0.png",
      gameTitle: "리얼월드 인기작1",
      gameDesc: "무료",
      id: 2,
    },
    {
      gameImg:
        "https://cdn.realworld.to/user-files/KtkDjeNGuVtRLXJcPGizQg/22-08-26-13-21-36_AfyiKDRnYw0.png",
      gameTitle: "리얼월드 인기작1",
      gameDesc: "무료",
      id: 3,
    },
    {
      gameImg:
        "https://cdn.realworld.to/user-files/KtkDjeNGuVtRLXJcPGizQg/22-08-26-13-21-36_AfyiKDRnYw0.png",
      gameTitle: "리얼월드 인기작1",
      gameDesc: "무료",
      id: 4,
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
        autoplay={{ delay: 1000 }}
        disableOnInteraction={false}
        //pauseOnMouseEnter={true}
        className="mySwiper"
      >
        {gameInfo.map((card) => {
          return (
            <SwiperSlide
              style={{ width: "200px", height: "300px" }}
              key={card.id}
              onClick={() => {
                navigate(`/Detail/${card.id}`);
              }}
            >
              <div>
                <img
                  style={{ width: "300px", height: "400px" }}
                  src={card.gameImg}
                  alt={card.gameTitle}
                />
                <h2>{card.gameTitle}</h2>
                <p>{card.gameDesc}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
