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
    <div>
      <h2>TOP画面</h2>

      <button
        className="button"
        type="submit"
        onClick={() => {
          setFlag(2);
        }}
      >
        スライド作成画面
      </button>
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
  );
};

export default Top;
