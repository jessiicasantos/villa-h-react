import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
// import required modules
import { Navigation } from 'swiper';
import Slide1 from '../img/Decoracao-Vila-H-1.png';
import Slide2 from '../img/Paisagem-Villa-H.png';

const slides = [
  {
    img: Slide1,
    altText: 'Mesa com paisagem paradisíaca e flores.',
  },
  {
    img: Slide2,
    altText: 'Confraternização com paisagem paradisíaca ao pôr do sol.',
  },
];

const SwiperGallery = () => {
  return (
    <>
      <Swiper
        navigation
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={'auto'}
        grabCursor={true}
        className="mySwiper"
      >
        {slides.map((s, index) => (
          <SwiperSlide key={`${s}`[index]}>
            <img src={s.img} alt={s.altText} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperGallery;
