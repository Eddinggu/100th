import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import useOrientation from "./hooks/useOrientation";
import useAudio from "./hooks/useAudio";

export default function App() {
  const [imgArr, setImgArr] = useState([]);
  const orientation = useOrientation();
  const [isOn, setOn] = useState(false);
  const [playing, toggle] = useAudio('./lovepoem.mp3');
  const isMobile = /Mobi/i.test(window.navigator.userAgent);

  useEffect(() => {
    const tempArr = [];
    for (let i = 1; i <= 9; i++) {
      tempArr.push(
        `./letter${String(i).padStart(
          2,
          "0"
        )}.png`
      );
    }

    setImgArr(tempArr);

  }, []);

  useEffect(() => {
    if (orientation === 'portrait') {
      // setOn(false);
    }
  }, [orientation])
  return (
    <div id="container" className={isOn? 'on' : ''}>
      <div id="wrapper">
        <Swiper
          pagination={{
            type: "progressbar",
            clickable: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {imgArr.map((url, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={url} alt={`이미지${index + 1}`}></img>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="description">
        <div>
          <img onClick={() => {
            setOn(true);
            toggle();
          }} className="heart" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/130px-Heart_coraz%C3%B3n.svg.png?20110326231420" alt="❤️" />
          <span>{isMobile ? '하트를 누르고 가로모드에서 봐줘 :)' : '하트를 눌러줘 :)' }</span>
        </div>
      </div>
    </div>
  );
}
