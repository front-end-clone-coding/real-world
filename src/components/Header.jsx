import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const { loginCheck } = useSelector((state) => state.loginSlice);
  console.log(loginCheck);
  return (
    <>
      <Nav>
        <Container>
          <div onClick={() => navigate("/")}>
            <LogImg
              className="logo"
              src="https://cdn.rwd.to/logos/logo_color_white_horizontal.png"
              alt="리얼월드"
            />
            <LogImg2
              className="logo"
              src="https://cdn.rwd.to/logos/logo_color_black_horizontal.png"
              alt="리얼월드"
            />
          </div>
          <div>
            <NavbarNav>
              {loginCheck ? (
                <>
                  <NavItem onClick={() => navigate("/")}>게임 목록</NavItem>
                  <NavItem onClick={() => navigate("/login")}>로그아웃</NavItem>
                </>
              ) : (
                <>
                  <NavItem onClick={() => navigate("/")}>게임 목록</NavItem>
                  <NavItem onClick={() => navigate("/login")}>로그인</NavItem>
                  <NavItem onClick={() => navigate("/signUp")}>
                    회원가입
                  </NavItem>
                </>
              )}
            </NavbarNav>
          </div>
        </Container>
      </Nav>
    </>
  );
};

export default Header;

const Nav = styled.nav`
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  width: 100%;
  font-family: "Noto Sans KR", sans-serif;
  .notMove {
    background-color: transparent;
  }
  .move {
    background-color: white;
  }
`;
const Container = styled.nav`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: 1140px;
`;
const LogImg = styled.img`
  width: 162px;
  height: 36px;
`;
const LogImg2 = styled.img`
  display: none;
  width: 162px;
  height: 36px;
`;
const navbarCollapse = styled.div``;
const NavbarNav = styled.ul`
  display: flex;
`;
const NavItem = styled.li`
  font-size: 13px;
  line-height: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 1rem;
  padding-left: 1rem;
  color: black;
  font-weight: 400;
  cursor: pointer;
  :hover {
    background-color: rgba(30, 17, 44, 0.5);
  }
`;
