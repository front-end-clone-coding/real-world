import React, { useState, useRef } from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import OauthInput from "../../components/OauthInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __signUp } from "../../reduex/modules/SignupSilce";

export const SignUpForm = () => {
  // 유효성 검사
  const regUserName = /^([a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣\-\_]{2,20})$/; // 2~20자, 한글, 영어, -, _의 사용이 가능합니다. 닉네임 확인 정규식
  const regEmail =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/; // 이메일 확인 정규식

  //hidden 조건을 주기위한 state
  const [reg, setReg] = useState({
    userName: true,
    email: true,
    password: true,
    passwordCheck: true,
  });

  //input 아래 메세지 띄우기
  //DOM에 직접 관여하는 ref, 리렌더링이 일어나지 않음
  const userNameValue = useRef();
  const emailValue = useRef();
  const passwordValue = useRef();
  const passwordCheckValue = useRef();

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "userName") {
      if (!regUserName.test(value)) {
        setReg({ ...reg, userName: false });
      } else setReg({ ...reg, userName: true });
    }
    if (name === "email") {
      if (!regEmail.test(value)) {
        setReg({ ...reg, email: false });
      } else setReg({ ...reg, email: true });
    }
    if (name === "password") {
      if (value.length < 8) {
        setReg({ ...reg, password: false, passwordCheck: false });
      } else setReg({ ...reg, password: true });
    }
    if (name === "passwordCheck") {
      console.log("너 뉘기야", passwordValue.current.value);
      if (passwordValue.current.value === value) {
        setReg({ ...reg, passwordCheck: true });
      } else setReg({ ...reg, passwordCheck: false });
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const userName = userNameValue.current;
    const email = emailValue.current;
    const password = passwordValue.current;
    const passwordCheck = passwordCheckValue.current;

    //유효성 검사
    //닉네임
    if (userName.value.trim() === "") {
      setReg({ ...reg, userName: false });
      userName.focus();
      return;
    } else if (!regUserName.test(userName.value)) {
      setReg({ ...reg, userName: false });
      userName.focus();
      return;
    }
    //email
    if (email.value.trim() === "") {
      setReg({ ...reg, email: false });
      email.focus();
      return;
    } else if (!regEmail.test(email.value)) {
      setReg({ ...reg, email: false });
      email.focus();
      return;
    }
    //password
    if (password.value.trim() === "") {
      setReg({ ...reg, password: false });
      password.focus();
      return;
    } else if (password.value.length < 8) {
      setReg({ ...reg, password: false });
      password.focus();
      return;
    } else if (passwordCheck.value !== password.value) {
      setReg({ ...reg, passwordCheck: false });
      passwordCheck.focus();
      return;
    }

    dispatch(
      __signUp({
        userName: userName.value,
        email: email.value,
        password: password.value,
      })
    );
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
                onChange={onChangeHandler}
              />
            </div>
            <ErrorMessage hidden={reg.userName}>
              2~20자, 한글, 영어, -, _의 사용이 가능합니다.
            </ErrorMessage>
            <div>
              <OauthInput
                name="email"
                ref={emailValue} // value 대신 ref로
                type="email"
                placeholder="이메일을 입력해주세요"
                onChange={onChangeHandler}
              />
            </div>
            <ErrorMessage hidden={reg.email}>
              이메일을 입력해주세요.
            </ErrorMessage>
            <div>
              <OauthInput
                name="password"
                ref={passwordValue}
                type="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={onChangeHandler}
              />
            </div>
            <ErrorMessage hidden={reg.password}>
              비밀번호를 입력해주세요.
            </ErrorMessage>
            <div>
              <OauthInput
                name="passwordCheck"
                ref={passwordCheckValue}
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                onChange={onChangeHandler}
              />
            </div>
            <ErrorMessage hidden={reg.passwordCheck}>
              비밀번호가 일치하지 않습니다.
            </ErrorMessage>
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
    margin: 10px 0px 10px 0px;
    padding: 12px 16px;
    height: 40px;
    width: 100%;

    background-color: #f5f5f5;
    border: 1px solid #d5d5d5;
  }
`;
const ErrorMessage = styled.span`
  display: ${(props) => props.hidden && "none"};
  margin-left: 17px;
  color: #c869ff;
  font-size: 14px;
`;
