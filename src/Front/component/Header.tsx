import React, { useState, useEffect, useContext } from "react";
import "./component.css";
import { FlagContext } from "../../App";

const Header = () => {
  const [
    flag,
    setFlag,
    slideList,
    setSlideList,
    slideSelect,
    setSlideSelect,
    imgSelect,
    setImgSelect,
  ] = useContext(FlagContext);

  return (
    <header className="headArea">
      <h2 className="headTitle">🎤〜PP カラオケAPI〜🤖</h2>
      <button
        className="TopButton"
        type="submit"
        onClick={() => {
          setFlag(1);
          setImgSelect([]);
        }}
      >
        TOPに戻る
      </button>
    </header>
  );
};

export default Header;
