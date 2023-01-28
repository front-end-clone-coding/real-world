import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import CategoryCards from "../../components/CategoryCards";
import { getCategoryGameInfo } from "../../reduex/modules/mainGameInfoSlice";
const GameList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryGameInfo());
  }, []);
  return (
    <>
      <Dived />
      <CategoryCards />
    </>
  );
};

export default GameList;
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
