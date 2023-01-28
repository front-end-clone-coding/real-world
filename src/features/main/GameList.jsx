import Slider from "../../components/Slider";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getCategoryGameInfo } from "../../reduex/modules/mainGameInfoSlice";
import Tab from "../../components/Tab";

const GameList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryGameInfo());
  }, []);

  //Tab
  const Categorylist = ["추천", "무료"];

  return (
    <div>
      <div>
        <Title1>
          <div>리얼월드 추천 게임</div>
        </Title1>
        <SliderContainer>
          <Slider />
        </SliderContainer>
      </div>
      <div>
        <Tab Categorylist={Categorylist} />

      </div>
    </div>
  );
};
export default GameList;

const Title1 = styled.div`
  padding: 30px;
  margin-top: 30px;

  font-size: large;
  font-weight: 800;
`;

const SliderContainer = styled.div`
  border: 2px solid black;
  padding: 20px;
  height: 100%;
`;

const Menubar = styled.div`
  width: 100%;
  height: 50px;

  border: 2px solid black;

  font-size: large;
  font-weight: 700;

  display: flex;

  div {
    padding: 10px;
    border: 2px solid black;
  }
`;

const Dived = styled.div`
  margin-bottom: 48px;
  margin-top: 32px;
  width: 100%;
  height: 16px;
  max-width: 1092px;
  margin-left: auto;
  margin-right: auto;
  background-color: linear-gradient(
    to top,
    rgb(250, 250, 250) 18%,
    rgb(248, 248, 248) 73%,
    rgb(245, 245, 245) 83%
  );
  background-image: linear-gradient(
    to bottom,
    rgb(250, 250, 250) 18%,
    rgb(248, 248, 248) 73%,
    rgb(245, 245, 245) 83%
  );
`;
