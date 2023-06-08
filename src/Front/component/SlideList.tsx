import React, { useEffect, useState, useContext } from "react";
import { FlagContext } from "../../App";

const SlideList = () => {
  //   const [slideList, setSlideList] = useState([]);
  const [flag, setFlag, slideList, setSlideList, slideSelect, setSlideSelect] =
    useContext(FlagContext);

  console.log(
    "SlideList",
    process.env.REACT_APP_TEST ? "http://localhost:7777/slide" : "/slide"
  );

  useEffect(() => {
    const getList = async () => {
      console.log("setSlideList===============");

      const fetchList = await fetch(
        process.env.REACT_APP_TEST ? "http://localhost:7777/slide" : "/slide"
      ).then((e) => e.json());
      // const jsonList = await fetchList.json();
      console.log(fetchList);

      setSlideList(fetchList);
    };
    getList();
  }, []);

  return (
    <>
      <h2>閲覧画面</h2>
      <div className="container">
        {slideList.map((e: any, index) => {
          // console.table(e);
          return (
            <div className="image" key={index}>
              <p
                onClick={() => {
                  // console.log(e);

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
