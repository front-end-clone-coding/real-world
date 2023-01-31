import React from "react";
import SeleteGame from "../features/detail/SeleteGame";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
const Detail = () => {
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
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);
  return (
    <>
      <Header visible={visible} />
      <SeleteGame visible={visible} />
      <Footer />
    </>
  );
};

export default Detail;
