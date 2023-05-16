import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../../styles.css';
import Suselle from '../img/Suselle.png';
import Leonardo from '../img/Leonardo.png';
import Bianca from '../img/Bianca.png';
import Felipe from '../img/Felipe.svg';

const dataTestimonial = [
  {
    text: 'Falar da Villa H me desperta muitos sentimentos bons. Foi o local escolhido para o grande dia, meu casamento. Não poderia ter escolhido melhor lugar, além de lindo e com uma localização privilegiada, os seus responsáveis são pessoas maravilhosas. Agradeço à laudantium dolore soluta vitae quos eaque molestiae iusto illo.',
    photo: Suselle,
    name: 'Suselle Melo',
    type: 'Festa “Casamento tradicional”',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque velit ipsa explicabo veniam porro optio impedit fuga ducimus, perferendis nulla tempore laudantium dolore soluta vitae quos eaque molestiae iusto illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam rerum ducimus odit corrupti ipsum deleniti? Sunt nihil quibusdam, reiciendis eius, ex eum laudantium recusandae corrupti ut eaque, hic voluptatem. um dolore soluta vitae quos eaque molestiae iusto illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam rerum ducimus odit corrupti ipsum deleniti? Sunt nihil quibusdam, reiciendis eius, ex eum laudantium recusandae corrupti ut eaque, hic voluptatem. ',
    photo: Leonardo,
    name: 'Leonardo Cataldo',
    type: 'Festa “Evento Corporativo”',
  },
  {
    text: 'Perferendis asperiores molestias numquam consequuntur architecto vel animi quia fugiat nobis quidem, voluptatem eius sequi dicta soluta magnam exercitationem sit dolore illum.',
    photo: Bianca,
    name: 'Bianca Freire',
    type: 'Festa “Festa de 15 anos”',
  },
  {
    text: 'Sequi voluptatum modi temporibus deleniti, veritatis rerum consequuntur voluptatem. Debitis, eos recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime corrupti ducimus veniam accusamus odit debitis et neque?',
    photo: <Felipe />,
    name: 'Felipe Bourbon',
    type: 'Festa “Small Wedding”',
  },
];

const SwiperTestimonial = () => (
  <Swiper
    navigation
    modules={[Navigation]}
    spaceBetween={50}
    slidesPerView={3}
    grabCursor={true}
    className="swiper-testimonial"
  >
    {dataTestimonial.map((data, i) => (
      <SwiperSlide key={`${data}`[i]}>
        <div className="info-testimonial">
          <img src={data.photo} alt={`Foto de ${data.name}`} />
          <div>
            <h5>{data.name}</h5>
            <h6>{data.type}</h6>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SwiperTestimonial;