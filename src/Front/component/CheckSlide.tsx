import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useRef,
} from "react";
import { FlagContext } from "../../App";
const CheckSlide = () => {
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
  const inputRef = useRef<HTMLInputElement>(null);

  const postImg = async () => {
    const title = String(inputRef.current?.value);
    const body = {
      title: title,
      img_list: imgSelect,
      make_date: new Date(),
    };
    // APIのURL
    await fetch(`/slide`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <>
      <input
        className="inputPop"
        ref={inputRef}
        type="text"
        placeholder="目的のタイトルを入力してください"
      />
      <button
        className="button"
        onClick={() => {
          postImg();
          setFlag(1);
          setImgSelect([]);
        }}
      >
        これでOKですか？？
      </button>
      <div className="wrapper">
        {imgSelect.map((e, i) => {
          return <img className="imgView" src={e} alt="" key={i} />;
        })}
      </div>
    </>
  );
};

export default CheckSlide;
