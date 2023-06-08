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
  ] = useContext(FlagContext);

  const handleSubmitAuto = async () => {
    const title = String(inputRef.current?.value);

    // APIのURL

    const getFetch = await axios.get(`/auto/${title}/5`).then((e) => e.data);
    setImgSelect(getFetch);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="目的のタイトルを入力してください"
      />
      <button
        type="submit"
        className="button"
        onClick={() => {
          handleSubmitAuto();
          setFlag(6);
        }}
      >
        おまかせ
      </button>
      <button className="button">自分でどうしても選びたい！！</button>
    </div>
  );
};

export default MenuSlide;
