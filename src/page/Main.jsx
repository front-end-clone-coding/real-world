import React from "react";
import Header from "../components/Header";
import GameList from "../features/main/GameList";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <GameList />
      <Footer />
    </>
  );
};

export default Main;
