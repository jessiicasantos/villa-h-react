import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../../styles.css';
// import { useState } from 'react';
import More from './More';

function SwiperTxtTestimonial() {
  const dataTxtTestimonial = [
    {
      text: 'Falar da Villa H me desperta muitos sentimentos bons. Foi o local escolhido para o grande dia, meu casamento. Não poderia ter escolhido melhor lugar, além de lindo e com uma localização privilegiada, os seus responsáveis são pessoas maravilhosas. Agradeço à laudantium dolore soluta vitae quos eaque molestiae iusto illo.',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque velit ipsa explicabo veniam porro optio impedit fuga ducimus, perferendis nulla tempore laudantium dolore soluta vitae quos eaque molestiae iusto illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam rerum ducimus odit corrupti ipsum deleniti? Sunt nihil quibusdam, reiciendis eius, ex eum laudantium recusandae corrupti ut eaque, hic voluptatem. um dolore soluta vitae quos eaque molestiae iusto illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam rerum ducimus odit corrupti ipsum deleniti? Sunt nihil quibusdam, reiciendis eius, ex eum laudantium recusandae corrupti ut eaque, hic voluptatem. ',
    },
    {
      text: 'Perferendis asperiores molestias numquam consequuntur architecto vel animi quia fugiat nobis quidem, voluptatem eius sequi dicta soluta magnam exercitationem sit dolore illum.',
    },
    {
      text: 'Sequi voluptatum modi temporibus deleniti, veritatis rerum consequuntur voluptatem. Debitis, eos recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime corrupti ducimus veniam accusamus odit debitis et neque?',
    },
  ];

  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={1}
      grabCursor={true}
      className="swiper-txt-testimonial"
    >
      {dataTxtTestimonial.map((data, i) => (
        <SwiperSlide key={`${data}`[i]}>
          <More data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperTxtTestimonial;
