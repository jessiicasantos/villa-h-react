import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../../styles.css';
// import required modules
import { Mousewheel, Keyboard, Navigation } from 'swiper';
import SlidePre1 from '../img/elop-wedding-happy-couple.png';
import SlidePre2 from '../img/elop-wedding-photography.png';
import SlidePre3 from '../img/elop-wedding-up.png';
import SlidePre4 from '../img/elop-wedding.png';

const slides = [
  {
    img: SlidePre1,
    altText: 'Mesa com paisagem paradisíaca e flores.',
  },
  {
    img: SlidePre2,
    altText: 'Confraternização com paisagem paradisíaca ao pôr do sol.',
  },
  {
    img: SlidePre3,
    altText: 'Paisagem do mar e barco ao pôr do sol.',
  },
  {
    img: SlidePre4,
    altText: 'Sala de visitas.',
  },
];

const SwiperEvent = () => {
  return (
    <>
      <Swiper
        mousewheel={true}
        keyboard={{
          enabled: true,
        }}
        navigation
        modules={[Mousewheel, Keyboard, Navigation]}
        spaceBetween={10}
        slidesPerView={2.4}
        grabCursor={true}
        className="swiper-event"
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

export default SwiperEvent;
