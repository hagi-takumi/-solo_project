import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useRef,
} from "react";
import { FlagContext } from "../../App";
import axios from "axios";

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
    console.log({ title });
    console.log(
      process.env.REACT_APP_TEST
        ? `http://localhost:7777/auto/${title}/5`
        : `/auto/${title}/5`
    );

    // APIのURL
    // const getFetch = await fetch(
    // process.env.REACT_APP_TEST
    //   ? `http://localhost:7777/auto/${title}/5`
    //   : `/auto/${title}/5`
    // ).then((e) => e.json());

    const getFetch = await axios
      .get(
        process.env.REACT_APP_TEST
          ? `http://localhost:7777/auto/${title}/5`
          : `/auto/${title}/5`
      )
      .then((e) => e.data);
    console.log("MenuSlide", { getFetch });

    // setImgSelect(await getFetch.json());
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
