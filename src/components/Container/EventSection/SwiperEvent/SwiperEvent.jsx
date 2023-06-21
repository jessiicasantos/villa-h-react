import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../../styles.css';
import { Mousewheel, Keyboard, Navigation } from 'swiper';

const SwiperEvent = ({ gallery }) => {
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
        gallery={gallery}
      >
        {gallery?.map((g, index) => (
          <SwiperSlide key={`g-${index}`}>
            <img src={g} /* alt={s.listAltText[index]} */ />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperEvent;
