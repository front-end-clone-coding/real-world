import React, { useState, useRef } from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import OauthInput from "../../components/OauthInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __signUp } from "../../reduex/modules/SignUpSlice";

export const SignUpForm = () => {
  //DOM에 직접 관여하는 ref, 리렌더링이 일어나지 않음
  const userNameValue = useRef();
  const emailValue = useRef();
  const passwordValue = useRef();
  const passwordCheckValue = useRef();

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userNameValue);

    const userName = userNameValue.current.value;
    const email = emailValue.current.value;
    const password = passwordValue.current.value;
    const passwordCheck = passwordCheckValue.current.value;

    dispatch(__signUp({ userName, email, password, passwordCheck }));
  };

  return (
    <LoginScreen>
      <InputContainer>
        <LoginSection>
          <STlogo>
            <img className="logo" src={logo} alt="리얼월드" />
            <p>리얼월드 회원가입</p>
          </STlogo>
          <LonginForm>
            <div>
              <OauthInput
                name="userName"
                ref={userNameValue}
                type="text"
                placeholder="닉네임을 입력해주세요"
              />
            </div>
            <div>
              <OauthInput
                name="email"
                ref={emailValue} // value 대신 ref로
                type="email"
                placeholder="이메일을 입력해주세요"
              />
            </div>
            <div>
              <OauthInput
                name="password"
                ref={passwordValue}
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </div>
            <div>
              <OauthInput
                name="passwordCheck"
                ref={passwordCheckValue}
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
              />
            </div>
            <OauthInput
              onClick={onSubmitHandler}
              type="submit"
              boxShadow="none"
              borderColor="none"
              backgroundColor="#c869ff"
              borderRadious="22px"
              color="black"
              userValue="이메일로 회원가입"
            >
              이메일로 회원가입
            </OauthInput>
          </LonginForm>
        </LoginSection>
      </InputContainer>
    </LoginScreen>
  );
};

export default SignUpForm;

const LoginScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
`;

const InputContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const LoginSection = styled.div`
  padding: 32px 24px;
  border-radius: 16px;
  border: 1px solid #ededed;
  background: white;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  flex: 1 0 auto;
`;

const STlogo = styled.div`
  text-align: center;
  margin-bottom: 20px;
  img {
    width: 141px;
    margin-bottom: 30px;
  }
`;

const LonginForm = styled.form`
  display: grid;
  text-align: center;

  input {
    margin: 0px 0px 20px 0px;
    padding: 12px 16px;
    height: 40px;
    width: 100%;

    background-color: #f5f5f5;
    border: 1px solid #d5d5d5;
  }
`;
