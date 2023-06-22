import { Mousewheel, Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Modal.css';

const Modal = ({ id, className, title, closeBtn, gallery }) => (
  <div className={`modal ${className}`} id={id}>
    <>{closeBtn}</>
    <div className="modal-wrapper">
      <>{title}</>
      <Swiper
        modules={[Mousewheel, Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={3}
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
    </div>
  </div>
);

export default Modal;
