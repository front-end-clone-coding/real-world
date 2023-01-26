import React from "react";
import styled from "styled-components";
import OauthInput from "../../components/OauthInput";
const LoginForm = () => {
  return (
    <>
      <LoginScreen>
        <Container>
          <HeroSection>
            <p>
              계정 하나로 <strong>리얼월드 앱</strong>과<br />
              <strong>리얼월드 스튜디오</strong>에 로그인하세요!
            </p>
            <img
              src="https://ui.realworld.to/images/ui/login_mockup_image.png "
              alt="img"
            />
          </HeroSection>
          <LoginSection>
            <LoginSloganSection>
              <div>
                <img src="https://ui.realworld.to/images/ui/logo.svg" alt="" />
              </div>
              <p>
                리얼월드는
                <strong> 리얼월드 통합 계정</strong>을 사용해요
              </p>
            </LoginSloganSection>
            <form>
              <div>
                <OauthInput type="text" placeholder="이메일" />
              </div>
              <span>이메일을 입력해주세요</span>
              <div>
                <OauthInput type="password" placeholder="비밀번호" />
              </div>
              <span>8글자 이상</span>
              <div>
                <OauthInput
                  type="submit"
                  boxShadow="none"
                  borderColor="none"
                  backgroundColor="#c869ff"
                  borderRadious="22px"
                  color="white"
                  value="로그인"
                />
              </div>
            </form>
            <a>이메일로 회원가입</a>
          </LoginSection>
        </Container>
      </LoginScreen>
    </>
  );
};

export default LoginForm;

const LoginScreen = styled.div`
  background-color: #f4f4f4;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  color: #0a111e;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  line-height: 1.5;
`;

const Container = styled.div`
  background-color: antiquewhite;
  display: flex;
  max-width: 1024px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroSection = styled.div`
  flex-grow: 1;
  margin-right: 24px;

  p {
    font-size: 26px;
    line-height: 32px;
    font-weight: 500;
    margin-left: 10px;
    margin-bottom: 24px;
  }

  strong {
    font-weight: inherit;
    color: #c869ff;
  }
`;

const LoginSection = styled.div`
  padding: 32px 24px;
  border-radius: 16px;
  border: 1px solid #ededed;
  background-color: white;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  flex: 1 0 auto;
`;
const LoginSloganSection = styled.div`
  text-align: center;

  img {
    width: 141px;
    height: 72.06px;
  }
  p {
    margin: 16px auto;
    font-size: 14px;
    color: #626262;
  }
  strong {
    color: #626262;
  }
  a {
  }
`;
