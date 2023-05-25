import { Mousewheel, Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SalaoPrincipal from '../Container/img/Salao-Principal.png';
import Loft from '../Container/img/Loft-e-varanda-externa.png';
import Deck from '../Container/img/Deck-Piscina.png';
import Gastronomia from '../Container/img/Gastronomia_Villa H.png';
import './Modal.css';

const modalGallery = [
  {
    id: 'm-galery-1',
    photo: [SalaoPrincipal, Loft, Deck],
    alt: '',
  },
  {
    id: 'm-galery-2',
    photo: [Gastronomia, Loft, SalaoPrincipal],
    alt: '',
  },
];

const Modal = ({ id, className, title, closeBtn }) => (
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
        {modalGallery.map((m, i) => (
          <>
            {m?.photo.map((mg) => (
              <SwiperSlide key={`modal-photo-${i}`}>
                <img src={mg} alt={m.alt} key={`img-${i}`} />
              </SwiperSlide>
            ))}
          </>
        ))}
      </Swiper>
    </div>
  </div>
);

export default Modal;
