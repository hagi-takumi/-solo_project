import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useRef,
} from "react";
import axios from "axios";
import { FlagContext } from "../../App";

const MakeSlide = () => {
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
  const inputRef = useRef<HTMLInputElement>(null);

  const postImg = async () => {
    const title = String(inputRef.current?.value);
    const body = {
      title: title,
      img_list: imgChoice,
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
      <div className="img_box wrapper">
        {imgChoice.map((e, i) => {
          return (
            <div className="img-wrap">
              <img className="imgViewMini" src={e} alt="" key={i} />
            </div>
          );
        })}
      </div>
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
          setImgChoice([]);
        }}
      >
        これでOKですか？？
      </button>
      <div className="wrapper">
        {imgSelect.map((e, i) => {
          return (
            <img
              className="imgView"
              src={e}
              alt=""
              key={i}
              onClick={() => {
                if (imgChoice.length <= 4) {
                  setImgChoice([...imgChoice, e]);
                }
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default MakeSlide;
