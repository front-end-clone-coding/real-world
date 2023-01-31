import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Style.css";
// import required modules
import { Autoplay } from "swiper";

export default function Slider() {
  const navigate = useNavigate();
  const { maingameInfo } = useSelector((state) => state.mainGameInfoSlice);

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={50}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
        autoplay={{ delay: 1000 }}
        // disableOnInteraction={false}
        //pauseOnMouseEnter={true}
        className="mySwiper"
      >
        {maingameInfo?.map((card) => {
          return (
            <SwiperSlide
              style={{ width: "200px", height: "400px" }}
              key={card.id}
              onClick={() => {
                navigate(`/Detail/${card.id}`);
              }}
            >
              <img
                style={{ width: "200px", height: "300px" }}
                src={card.titleImg}
                alt={card.gameTitle}
              />
              <>
                <h2>{card.gameTitle}</h2>
                <p>{card.gameDescShort}</p>
              </>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
