import React, { useState, useEffect, useContext, createContext } from "react";
import "./component.css";
import ContentArea from "./ContentArea";
import Top from "./Top";
import MenuSlide from "./MenuSlide";
import SlideList from "./SlideList";
import MakeSlide from "./MakeSlide";
import Slide from "./Slide";
import { FlagContext } from "../../App";
import CheckSlide from "./CheckSlide";

const Main = () => {
  console.log("Main====================");

  const [flag, setFlag] = useContext(FlagContext);

  return (
    <>
      {flag === 1 && <Top />}
      {flag === 2 && <MenuSlide />}
      {flag === 3 && <SlideList />}
      {flag === 4 && <Slide />}
      {flag === 5 && <MakeSlide />}
      {flag === 6 && <CheckSlide />}
    </>
  );
};

export default Main;
