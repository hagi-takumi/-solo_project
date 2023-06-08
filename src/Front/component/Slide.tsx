import React, { useEffect, useState, useContext } from "react";
import { FlagContext } from "../../App";

// ###################
// Swiperモジュール
import { Swiper, SwiperSlide } from "swiper/react";

// swiperで用意されているデフォルトののスタイル
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ナビゲーションやページネーションのモジュール
import { Navigation, Pagination } from "swiper";
// ###################

const Slide = () => {
  const [flag, setFlag, slideList, setSlideList, slideSelect, setSlideSelect] =
    useContext(FlagContext);

  const imgArr = [...slideSelect.img_list];
  const lastImg = imgArr.splice(-1);
  return (
    <>
      <>
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <div className="slide">{slideSelect.title}</div>
          </SwiperSlide>
          {imgArr.map((e: any, i) => {
            return (
              <SwiperSlide>
                <img src={e} alt="" key={i} />
              </SwiperSlide>
            );
          })}
          <SwiperSlide>
            <div className="slide">結論</div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={lastImg[0]} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    </>
  );
};

export default Slide;
