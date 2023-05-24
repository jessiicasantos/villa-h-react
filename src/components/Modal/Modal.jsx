import { Navigation, Pagination, A11y } from 'swiper';
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
  // {
  //   id: 'm-galery-1',
  //   photo: [SalaoPrincipal, Loft, Deck],
  //   alt: '',
  // },
  // {
  //   id: 'm-galery-2',
  //   photo: [Gastronomia, Loft, SalaoPrincipal],
  //   alt: '',
  // },
];

const Modal = ({ id, className, title, /* gallery, */ closeBtn }) => (
  <div className={`modal ${className}`} id={id}>
    <>{closeBtn}</>
    <div className="modal-wrapper">
      <>{title}</>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
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
