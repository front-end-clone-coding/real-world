import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Tab from "../../components/Tab";
import DetailGameInfo from "./DetailGameInfo";
import {
  GameDetailDescription,
  GameDetailTextDescription,
} from "../../reduex/modules/mainGameInfoSlice";

const SeleteGame = ({ visible }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { GameDetailDescriptionInfo } = useSelector(
    (state) => state.mainGameInfoSlice
  );

  //const [currentIndex, setCurrentIndex] = useState("");

  useEffect(() => {
    dispatch(GameDetailDescription(id));
    dispatch(GameDetailTextDescription(id));
  }, [dispatch, id]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     // GET 되었을때 set
  //     setCurrentIndex(GameDetailDescriptionInfo);
  //   }
  // }, [isSuccess, GameDetailDescriptionInfo]);

  console.log(GameDetailDescriptionInfo);
  const Categorylist = ["게임소개", "게임후기"];

  return (
    <PageWrap>
      <LeftContainer>
        <GameTitleImg
          src={GameDetailDescriptionInfo.titleImg}
          alt={GameDetailDescriptionInfo.gameTitle}
        />
        <MenuTap>
          <Tab Categorylist={Categorylist} visible={visible} />
        </MenuTap>
      </LeftContainer>
      <RightContainer>
        <DetailGameInfo />
      </RightContainer>
    </PageWrap>
  );
};

export default SeleteGame;

const PageWrap = styled.div`
  margin-top: 100px;
  padding-left: 500px;
  padding-right: 500px;
  display: flex;
  justify-content: center;
`;
const LeftContainer = styled.div``;
const GameTitleImg = styled.img`
  /* border: 2px solid black; */

  width: 600px;
  height: 500px;
`;
const MenuTap = styled.div`
  /* border: 2px solid black; */
`;

const RightContainer = styled.div`
  padding-left: 12px;
`;
