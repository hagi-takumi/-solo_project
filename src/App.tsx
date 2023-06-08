import React, { useState, useRef, createContext } from "react";
import "./App.css";
import Header from "./Front/component/Header";
import Footer from "./Front/component/Footer";
import Main from "./Front/component/Main";

type props = [
  flag: number,
  setFlag: Function,
  slideList: any[],
  setSlideList: Function,
  slideSelect: any,
  setSlideSelect: Function,
  imgSelect: string[],
  setImgSelect: Function,
  imgChoice: string[],
  setImgChoice: Function
];
export const FlagContext = createContext<props>([
  1,
  () => {},
  [],
  () => {},
  [],
  () => {},
  [],
  () => {},
  [],
  () => {},
]);

function App() {
  // 画面遷移フラグ
  const [flag, setFlag] = useState(1);
  // 閲覧時のDB内全リスト格納
  const [slideList, setSlideList] = useState([]);
  // 閲覧時に選択されたスライド格納
  const [slideSelect, setSlideSelect] = useState([]);
  // 自動算出された画像を格納
  const [imgSelect, setImgSelect] = useState([]);
  // 選択された画像を格納
  const [imgChoice, setImgChoice] = useState([]);

  return (
    <FlagContext.Provider
      value={[
        flag,
        setFlag,
        slideList,
        setSlideList,
        slideSelect,
        setSlideSelect,
        imgSelect,
        setImgSelect,
        imgChoice,
        setImgChoice,
      ]}
    >
      <>
        <Header />
        <main className="mainContent">
          <Main />
        </main>
        <Footer />
      </>
    </FlagContext.Provider>
  );
}

export default App;
