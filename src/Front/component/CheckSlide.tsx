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
  console.log({ imgSelect });
  const inputRef = useRef<HTMLInputElement>(null);

  const postImg = async () => {
    const title = String(inputRef.current?.value);
    console.log({ title });
    const body = {
      title: title,
      img_list: imgSelect,
      make_date: new Date(),
    };
    // APIのURL
    const getFetch = await fetch(`http://localhost:7777/slide`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(getFetch);
  };

  return (
    <>
      <div>
        {imgSelect.map((e, i) => {
          return <img className="imgView" src={e} alt="" key={i} />;
        })}
      </div>{" "}
      <input
        ref={inputRef}
        type="text"
        placeholder="目的のタイトルを入力してください"
      />
      <button
        onClick={() => {
          postImg();
          setFlag(1);
        }}
      >
        これでOKですか？？
      </button>
    </>
  );
};

export default CheckSlide;