import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroSlider from "./HeroSlider";

const AHero = () => {
  const data = [
    {
      title: "EXPERIENCE THE POWER OF TECH WITH",
      main: "Feb Tech IT",
      para: "FebTech is a leading software development company that offers top-rated Software Development Services.",
    },
    {
      title: "WE UNDERSTAND THAT EVERY BUSINESS IS",
      main: "UNIQUE",
      para: "We are committed to providing you with the best digital solutions to help grow your business online.",
    },
    {
      title: "EMPOWERING YOUR DIGITAL DREAMS WITH",
      main: "FEB TECH IT",
      para: "Contact us today to learn more about our services and how we can help you grow your business online.",
    },
  ];

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper lg:relative  lg:h-screen w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <HeroSlider data={item} />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default AHero;
