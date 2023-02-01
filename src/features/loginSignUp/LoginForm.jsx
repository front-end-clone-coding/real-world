import React, { useRef, useState } from "react";
import styled from "styled-components";

import logo from "../../img/logo.svg";
import OauthInput from "../../components/OauthInput";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __postLogin } from "../../reduex/modules/loginSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //Email유효성검사
  const regEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

  //로그인 상태관리
  const emailValue = useRef();
  const passwordValue = useRef();

  //hidden 여부
  const [reg, SetReg] = useState({
    email: true,
    password: true,
  });

  //유효성 이벤트 핸들러
  const onChangeRegHandler = (event) => {
    const { name, value } = event.target;
    //console.log(emailValue.current.value);
    if (name === "email") {
      if (!regEmail.test(value)) {
        SetReg({ ...reg, email: false });
      } else SetReg({ ...reg, email: true });
    } else {
      if (value.length < 8) {
        SetReg({ ...reg, password: false });
      } else SetReg({ ...reg, password: true });
    }
  };

  //회원가입버튼을 눌렀을시 이벤트핸들러
  const onSubmitLoginHandler = (event) => {
    event.preventDefault();
    //console.log(emailValue);
    const email = emailValue.current;
    const password = passwordValue.current;

    //유효성 검사
    //email
    if (email.value.trim() === "") {
      SetReg({ ...reg, email: false });
      email.focus();
      return;
    } else if (!regEmail.test(email.value)) {
      SetReg({ ...reg, email: false });
      email.focus();
      return;
    }

    //password
    if (password.value.trim() === "") {
      SetReg({ ...reg, password: false });
      password.focus();
      return;
    } else if (password.value.length < 8) {
      SetReg({ ...reg, password: false });
      password.focus();
      return;
    }
    const user = { email: email.value, password: password.value };
    dispatch(__postLogin({ user, navigate }));
  };

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
                <a href="/">
                  <img className="logo" src={logo} alt="리얼월드" />
                </a>
              </div>
              <p>
                리얼월드는
                <strong> 리얼월드 통합 계정</strong>을 사용해요
              </p>
            </LoginSloganSection>
            <form>
              <div>
                <OauthInput
                  type="email"
                  placeholder="이메일"
                  name="email"
                  ref={emailValue}
                  onChange={onChangeRegHandler}
                />
              </div>
              <ErrorMessage hidden={reg.email}>
                이메일을 입력해주세요.
              </ErrorMessage>
              <div>
                <OauthInput
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  ref={passwordValue}
                  onChange={onChangeRegHandler}
                />
              </div>
              <ErrorMessage hidden={reg.password}>
                8글자이상 입력 해주세요.
              </ErrorMessage>
              <div>
                <OauthInput
                  type="submit"
                  boxShadow="none"
                  borderColor="none"
                  backgroundColor="#c869ff"
                  borderRadious="22px"
                  color="white"
                  userValue="로그인"
                  onClick={onSubmitLoginHandler}
                />
              </div>
            </form>
            <Button onClick={() => navigate(`/signUp`)}>
              이메일로 회원가입
            </Button>
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

const ErrorMessage = styled.span`
  display: ${(props) => props.hidden && "none"};
  margin-left: 17px;
  color: #c869ff;
  font-size: 14px;
`;
