import React from "react";
import Header from "../components/Header";
import GameList from "../features/main/GameList";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
const Main = () => {
  const [position, setPosition] = useState({
    headerPosition: window.pageYOffset,
    tabPosition: window.pageYOffset,
  });
  const [visible, setVisible] = useState({
    headerVisible: false,
    tabVisible: false,
  });
  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;

      if (moving < 100) {
        setVisible({ ...visible, headerVisible: false });
        setPosition({ ...position, headerPosition: moving });
      } else {
        setVisible({ ...visible, headerVisible: true });
        setPosition({ ...position, headerPosition: moving });
      }
      if (moving < 600) {
        setVisible({ ...visible, tabVisible: false });
        setPosition({ ...position, tabPosition: moving });
      } else {
        setVisible({ ...visible, tabVisible: true });
        setPosition({ ...position, tabPosition: moving });
      }
      console.log(moving, moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);
  return (
    <>
      <Header visible={visible} />
      <GameList visible={visible} />
      <Footer />
    </>
  );
};

export default Main;
