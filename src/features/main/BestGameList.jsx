import React from "react";
import styled from "styled-components";
import CategoryCards from "../../components/CategoryCards";

const BestGameList = () => {
  return (
    <>
      <div>
        <div>
          <div>카테고리</div>
        </div>
        <div>
          <div>야외형 / 모바일 / 키트형 / 교육용</div>
        </div>
      </div>
      <div>
        <div>
          <Dived />
          <CategoryCards />
        </div>
        <div>
          <Dived />
          <CategoryCards />
        </div>
      </div>
    </>
  );
};

export default BestGameList;
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
