import React, { useContext, useRef } from "react";
import { FlagContext } from "../../App";

const Top = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [flag, setFlag] = useContext(FlagContext);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // APIのURL
  };
  return (
    <div className="top">
      <h2>TOP画面</h2>
      <div className="button_div">
        <button
          className="button"
          type="submit"
          onClick={() => {
            setFlag(2);
          }}
        >
          スライド作成画面
        </button>
      </div>
      <div className="button_div">
        <button
          className="button"
          type="submit"
          onClick={() => {
            setFlag(3);
          }}
        >
          スライド閲覧画面
        </button>
      </div>
    </div>
  );
};

export default Top;
