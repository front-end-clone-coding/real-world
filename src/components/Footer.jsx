import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FootContainer>
      <CompanyContainer>
        <div>주식회사 유니크굿 컴퍼니</div>
        <div>
          <div>
            사업자등록번호 524-88-00746 | 통신판매업신고번호
            2018-서울성동-0760호 대표이사 이은영,송인혁 | 서울특별시 성동구
            연무장13길 8, 메리히어 3층 전화 070-8706-1010
          </div>
        </div>
      </CompanyContainer>
      <ContactContainer>
        <div>Contact</div>
        <Socialbtn>
          <button>
            <img src="https://realworld.to/images/twitter_icon.svg" />
          </button>
          <button>
            <img src="https://realworld.to/images/instagram-icon.svg" />
          </button>
          <button>
            <img src="https://realworld.to/images/naver-icon.svg" />
          </button>
          <button>
            <img src="https://realworld.to/images/youtube-icon.svg" />
          </button>
        </Socialbtn>
        <button>문의하기</button>
      </ContactContainer>
      <BusinessContainer>
        <div>Business</div>
        <button>게임 제작 문의하기</button>
      </BusinessContainer>
    </FootContainer>
  );
};

export default Footer;

const FootContainer = styled.footer`
  background-color: #0a111e;

  padding: 20px 100px 60px 400px;

  width: 100%;
  height: 200px;

  display: flex;
`;

const CompanyContainer = styled.div`
  width: 500px;

  div {
    color: white;
    margin-top: 5px;
  }
`;
const ContactContainer = styled.div`
  width: 200px;

  display: grid;
  div {
    color: white;
    margin-top: 5px;
  }
  button {
    color: white;
    background-color: #c869ff;
    border-radius: 20px;
  }
`;
const Socialbtn = styled.div`
  display: flex;

  button {
    color: white;
    border-radius: 20px;
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
`;
const BusinessContainer = styled.div`
  width: 300px;
  display: grid;

  div {
    color: white;
    margin-top: 5px;
  }
  button {
    background-color: #0a111e;
    color: white;
    border-radius: 20px;
    border: 1px solid white;
    height: 35px;
  }
`;
