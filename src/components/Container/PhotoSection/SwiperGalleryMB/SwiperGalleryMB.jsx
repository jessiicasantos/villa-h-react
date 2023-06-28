import { Keyboard, Mousewheel, Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperGalleryMB = ({ gallery }) => (
  <Swiper
    modules={[Keyboard, Mousewheel, Navigation, Pagination, A11y]}
    spaceBetween={20}
    slidesPerView={3}
    keyboard={{
      enabled: true,
    }}
    mousewheel={true}
    grabCursor={true}
    navigation
    pagination={{ clickable: true }}
  >
    {gallery?.map((mg, ind) => (
      <SwiperSlide key={`${mg.id}${ind}`}>
        <img src={mg.url} alt={mg.alt} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SwiperGalleryMB;