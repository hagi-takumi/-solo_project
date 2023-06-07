import React, { useRef } from "react";

const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
    // APIのURL
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        ref={inputRef}
        type="text"
        placeholder="目的のタイトルを入力してください"
      />
    </form>
  );
};

export default Form;
