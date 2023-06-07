import React, { useState, useRef, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Front/component/Header";
import Footer from "./Front/component/Footer";
import Main from "./Front/component/Main";

console.log(process.env.REACT_APP_TEST);

type props = [
  flag: number,
  setFlag: Function,
  slideList: any[],
  setSlideList: Function,
  slideSelect: any,
  setSlideSelect: Function,
  imgSelect: string[],
  setImgSelect: Function
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
]);

function App() {
  // 画面遷移フラグ
  const [flag, setFlag] = useState(1);
  // 閲覧時のDB内全リスト格納
  const [slideList, setSlideList] = useState([]);
  // 閲覧時に選択されたスライド格納
  const [slideSelect, setSlideSelect] = useState([]);
  // 閲覧時に選択されたスライド格納
  const [imgSelect, setImgSelect] = useState([]);
  console.log("App==========");

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
      ]}
    >
      <>
        <Header />
        <main>
          <Main />
        </main>
        <Footer />
      </>
    </FlagContext.Provider>
  );
}

export default App;
