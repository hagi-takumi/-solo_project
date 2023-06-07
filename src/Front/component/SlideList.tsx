import React, { useEffect, useState, useContext } from "react";
import { FlagContext } from "../../App";

const SlideList = () => {
  //   const [slideList, setSlideList] = useState([]);
  const [flag, setFlag, slideList, setSlideList, slideSelect, setSlideSelect] =
    useContext(FlagContext);

  useEffect(() => {
    const getList = async () => {
      const fetchList = await fetch("http://localhost:7777/slide");
      const jsonList = await fetchList.json();

      setSlideList(jsonList);
    };
    getList();
  }, []);

  return (
    <>
      <h2>閲覧画面</h2>
      <div className="container">
        {slideList.map((e: any, index) => {
          console.table(e);
          return (
            <div className="image" key={index}>
              <p
                onClick={() => {
                  console.log(e);

                  setSlideSelect(e);
                  setFlag(4);
                }}
              >
                {e.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SlideList;