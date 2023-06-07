import React, { useState, useRef, useEffect } from "react";
import "../../App.css";

const AutoSlide = () => {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);
  const handleSubmit = (e: any) => {};
  const [inputImage, setInputImage] = useState([]);

  useEffect(() => {
    const getImage = async () => {
      const jsonImg = await fetch("http://localhost:7777/auto/ヨガ");
      const jsImg = await jsonImg.json();
      console.log("%%%%%%%%%%%%%%%%%%%%%%%%%");

      setInputImage(jsImg);
    };
    getImage();
  }, []);
  console.log("#############");

  return (
    <div className="container">
      <h2>AutoSlide</h2>
      {inputImage.map((e: any, index) => {
        // console.table(e);
        return (
          <div className="image" key={index}>
            <img src={e.previewURL} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default AutoSlide;
