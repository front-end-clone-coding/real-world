import styled from "styled-components";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css";
import CategoryMenu from "../CategoryMenu";

const CategoryCards = ({ gameInfo, Gamecategory }) => {
  const navigate = useNavigate();
  const category = gameInfo.filter((item) => item.category === Gamecategory);
  return (
    <>
      <SectionWrap>
        <CategoryMenu>{Gamecategory}</CategoryMenu>

        <SectionList>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
              "--swiper-navigation-size": "50px",
              minWidth: "100px",
            }}
            navigation={true}
            modules={[Navigation]}
            slidesPerView={4}
            className="mySwiper2"
          >
            {category.map((item, idx) => (
              <SwiperSlide key={idx}>
                <SectionGap
                  key={item.id}
                  onClick={() => {
                    navigate(`/Detail/${item.id}`);
                  }}
                >
                  <GameImgBox>
                    <img src={item.titleImg} alt={item.gameTitle} />
                  </GameImgBox>
                  <Information>
                    <h2 className="gameTitle">{item.gameTitle}</h2>
                    <div>
                      <p>{item.gamePrice}</p>
                    </div>
                  </Information>
                </SectionGap>
              </SwiperSlide>
            ))}
          </Swiper>
        </SectionList>
      </SectionWrap>
    </>
  );
};

export default CategoryCards;
const SectionWrap = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  width: 100%;
  max-width: 1140px;
  min-width: 150px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem;
  h2 {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

const SectionList = styled.div`
  display: flex;
  padding-bottom: 24px;
`;

const SectionGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 15px;
  cursor: pointer;
`;

const GameImgBox = styled.div`
  border: 1px solid rgb(237, 237, 237);
  border-radius: 8px;

  img {
    object-fit: fill;
    border-radius: 8px;
    width: 250px;
    height: 168px;
  }
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  float: left;
  h2 {
    font-size: 18px;
    margin-bottom: 0px;
    font-weight: 700;
    line-height: 23px;
    max-height: 46px;
  }
  p {
    font-size: 12px;
    line-height: 20px;
    color: rgb(98, 98, 98);
  }
`;
