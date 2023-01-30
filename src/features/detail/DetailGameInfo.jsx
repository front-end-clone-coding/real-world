import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const DetailGameInfo = ({ games }) => {
  return (
    <GameTitleContainer>
      <div className="wrap">
        <InfoCategory>
          <div>{games.playType}</div>
        </InfoCategory>

        <InfoHeader>
          <div className="producTitle">{games.gameTitle}</div>
          <div className="productSaltePrice">무료</div>
        </InfoHeader>
        <ProductCreatorName>
          <ProductImgWrap>
            <img
              src="https://cdn.realworld.to/user-files/vho_wev_E90EUtBMvcGRCg/21-03-04-14-22-00_Y_GCjWCcG3s.jpg"
              alt="리얼월드 로고 이미지"
            />
          </ProductImgWrap>
          <div>{games.createdAt}</div>
          <ProductImgWrap>
            <img
              src="https://realworld.to/images/basic_information/Icon_RealworldBadge.svg"
              alt="리얼월드 로고 이미지"
            />
          </ProductImgWrap>
        </ProductCreatorName>
        <Divider />
        <ProductOptions>
          <ItemWrap>
            <ProductImgWrap>
              <img
                src="https://realworld.to/images/basic_information/Icon_Star_Outlined_Gray.svg"
                alt="별"
              />
            </ProductImgWrap>
            <div>{games.star}</div>
          </ItemWrap>
          <ItemWrap>
            <ProductImgWrap>
              <img
                src="https://realworld.to/images/basic_information/Icon_Puzzle_Outlined_Gray.svg"
                alt="퍼즐조각"
              />
            </ProductImgWrap>
            <div>{games.difficulty}</div>
          </ItemWrap>
          <ItemWrap>
            <ProductImgWrap>
              <img
                src="https://realworld.to/images/basic_information/Icon_Clock_Outlined_Gray.svg"
                alt="시계"
              />
            </ProductImgWrap>
            <div>{games.playTime}</div>
          </ItemWrap>
          <ItemWrap>
            <ProductImgWrap>
              <img
                src="https://realworld.to/images/details/Icon_Kit_Outlined_LightGray.svg"
                alt="별"
              />
            </ProductImgWrap>
            <div>{games.kit}</div>
          </ItemWrap>
        </ProductOptions>
        <Button>댓글 달기</Button>
      </div>
    </GameTitleContainer>
  );
};

export default DetailGameInfo;

const GameTitleContainer = styled.div`
  position: sticky;
  top: 50px;
  padding: 20px;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 8%);
  border: 1px solid #ededed;
  border-radius: 16px;
  border-radius: 16px;
  width: 445px;
  background-color: #ededed;
  box-sizing: border-box;
`;

const InfoCategory = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;
  margin-top: 10px;
  font-weight: bold;
  div {
    color: #282f89;
  }
`;

const InfoHeader = styled.div`
  margin-bottom: 17px;
  width: 100%;
  .producTitle {
    font-size: 28px;
    font-weight: bold;
    text-align: left;
  }
  .productSaltePrice {
    margin-top: 10px;
    font-size: 24px;
    font-weight: 500;
  }
`;

const ProductCreatorName = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-left: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.21;
    color: #626262;
  }
`;

const ProductImgWrap = styled.div`
  width: 24px;
  height: 24px;

  img {
    border-radius: 50%;
    width: 100%;
  }
`;
const Divider = styled.div`
  background-color: #ededed;
  width: 100%;
  margin: 26px auto 26px;
  height: 1px;
`;

const ProductOptions = styled.div`
  //padding-left: 20px;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-around;
  margin-bottom: 24px;
  gap: 20px;
`;
const ItemWrap = styled.div`
  display: flex;
  text-align: center;
  div {
    margin-left: 8px;
    font-size: 16px;
    font-weight: 550;
    line-height: 1.6;
  }
`;
