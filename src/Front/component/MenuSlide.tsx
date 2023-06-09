import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useRef,
} from "react";
import axios from "axios";
import { FlagContext } from "../../App";

const MenuSlide = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [
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
  ] = useContext(FlagContext);

  const handleSubmitAuto = async (num = 5) => {
    const title = String(inputRef.current?.value);

    // APIのURL

    const getFetch = await axios
      .get(`/auto/${title}/${num}`)
      .then((e) => e.data);
    setImgSelect(getFetch);
    return getFetch;
  };

  return (
    <div className="top">
      <h2>Menu画面</h2>

      <input
        className="inputPop"
        ref={inputRef}
        type="text"
        placeholder="目的のタイトルを入力してください"
      />
      <div className="button_div">
        <button
          type="submit"
          className="button"
          onClick={() => {
            handleSubmitAuto(5);
            setFlag(5);
          }}
        >
          おまかせ
        </button>
      </div>
      <div className="button_div">
        <button
          className="button"
          onClick={() => {
            handleSubmitAuto(20);
            setFlag(5);
          }}
        >
          自分でどうしても選びたい！！
        </button>
      </div>
    </div>
  );
};

export default MenuSlide;
