import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../../styles/GlobalStyle";
import Detail from "./Detail";
import Login from "./Login";
import Main from "./Main";
import SignUp from "./SignUp";
const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route path="/" element={<Main />} />
      <Route path="Login" element={<Login />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="detail/:id" element={<Detail />} />
    </BrowserRouter>
  );
};

export default Router;
