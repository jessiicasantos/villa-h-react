import { ReactComponent as PreWedding } from '../../../../assets/img/pre-wedding-icon.svg';
import { ReactComponent as Bride } from '../../../../assets/img/bride-icon.svg';
import { ReactComponent as Couple } from '../../../../assets/img/couple-icon.svg';
import { ReactComponent as StreamIcon } from '../../../../assets/img/stream-icon.svg';
import { ReactComponent as CakeHeart } from '../../../../assets/img/cake-heart-icon.svg';
import { ReactComponent as Camera } from '../../../../assets/img/camera-icon.svg';
import { ReactComponent as GlassDrink } from '../../../../assets/img/glass-drink-icon.svg';
import { ReactComponent as BreakFast } from '../../../../assets/img/breakfast-icon.svg';
import { ReactComponent as Handshake } from '../../../../assets/img/handshake-icon.svg';
import { ReactComponent as PartyBuild } from '../../../../assets/img/party-build-icon.svg';
import { ReactComponent as Foot } from '../../../../assets/img/foot-icon.svg';
import { ReactComponent as Ring } from '../../../../assets/img/ring-icon.svg';
import Card from '../../../Card/Card';
import SwiperEvent from '../SwiperEvent/SwiperEvent';
import { useState } from 'react';
import SlidePre1 from '../img/elop-wedding-happy-couple.png';
import SlidePre2 from '../img/elop-wedding-photography.png';
import SlidePre3 from '../img/elop-wedding-up.png';
import SlidePre4 from '../img/elop-wedding.png';

const links = [
  {
    svg: <PreWedding />,
    id: 'preWed',
    title: 'Pré Wedding',
    className: 'active',
    tag: <h5 className="tag"></h5>,
    text: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        nostrum. Officiis eius cupiditate repudiandae distinctio officia
        tempore, perferendis voluptatem magnam, blanditiis magni laboriosam.
        Explicabo incidunt delectus quae nemo, vitae atque!
      </p>
    ),
    gallery: [
      {
        url: SlidePre1,
        alt: 'Mesa com paisagem paradisíaca e flores.',
      },
      {
        url: SlidePre2,
        alt: 'Confraternização com paisagem paradisíaca ao pôr do sol.',
      },
      {
        url: SlidePre3,
        alt: 'Paisagem do mar e barco ao pôr do sol.',
      },
      {
        url: SlidePre4,
        alt: 'Sala de visitas.',
      },
    ],
  },
  {
    svg: <Bride />,
    id: 'elopWed',
    title: 'Elopement Wedding',
    text: (
      <p>
        É realizada uma cerimônia, sendo indicado para os casais que desejam
        viver intensamente o romantismo do momento. O ideal é que seja realizado
        apenas com os noivos, podendo contar com um número máximo de 10 pessoas,
        incluindo celebrante e fotógrafo. Os locais escolhidos para essa
        celebração normalmente conta com um visual de maravilhoso e a Villa H se
        encaixa perfeitamente, contribuindo com fotos incríveis deste dia.
      </p>
    ),
    gallery: [
      {
        url: SlidePre4,
        alt: 'SlidePre4 Alt',
      },
      {
        url: SlidePre2,
        alt: 'SlidePre2 Alt',
      },
      {
        url: SlidePre1,
        alt: 'SlidePre1 Alt',
      },
      {
        url: SlidePre3,
        alt: 'SlidePre3 Alt',
      },
      {
        url: SlidePre2,
        alt: 'SlidePre2 Alt',
      },
    ],
  },
  {
    svg: <Couple />,
    id: 'miniWed',
    title: 'Mini Wedding',
  },
  {
    svg: <StreamIcon />,
    id: 'smallWed',
    title: 'Small Wedding & Streaming',
  },
  {
    svg: <CakeHeart />,
    id: 'casaTrad',
    title: 'Casamento Tradicional',
  },
  {
    svg: <Camera />,
    id: 'sessao',
    title: 'Sessão Fotográfica e Vídeo',
  },
  {
    svg: <GlassDrink />,
    id: 'dayUse',
    title: 'Day Use',
    tag: <h5 className="tag"></h5>,
    text: (
      <p>
        Day use é uma modalidade de hospedagem sem pernoite, podendo-se
        aproveitar a estrutura do local. Além da nossa vista maravilhosa, você
        pode aproveitar um dia de sol na piscina da Villa H. Assim, você pode
        curtir ao máximo tudo o que o nosso espaço tem a oferecer
      </p>
    ),
  },
  {
    svg: <BreakFast />,
    id: 'break',
    title: 'Café da Manhã',
  },
  {
    svg: <Handshake />,
    id: 'eventoCorp',
    title: 'Evento Corporativo',
  },
  {
    svg: <PartyBuild />,
    id: 'aniversario',
    title: 'Aniversário/Festa 15 anos',
  },
  {
    svg: <Foot />,
    id: 'batizado',
    title: 'Batizado',
  },
  {
    svg: <Ring />,
    id: 'noivado',
    title: 'Noivado',
  },
  {
    svg: <Camera />,
    id: 'live',
    title: 'Live',
  },
];

const MenuEvent = () => {
  const [isActive, setIsActive] = useState(links[0].id);

  const handleIsActive = (id) => {
    setIsActive(id, !isActive);
  };

  return (
    <div className="menu-event theme-dark-blue">
      <ul>
        {links.map((l, i) => (
          <li key={`menu-${i}`} className={isActive === l.id ? 'active' : ''}>
            <button
              className="btn-event"
              href={l.id}
              onClick={() => handleIsActive(l.id)}
            >
              {l.svg}
              {l.title}
            </button>
          </li>
        ))}
        <Event cardIsActive={isActive} />
      </ul>
    </div>
  );
};

const Event = ({ cardIsActive }) => {
  return (
    <div className="event">
      {links.map((c, i) => (
        <Card
          className={`card-event theme-gray ${
            cardIsActive === c.id ? 'active' : ''
          }`}
          key={`c-${i}`}
          svg={c.svg}
          tag={c.tag}
          title={<h3>{c.title}</h3>}
          text={c.text}
          btn={
            <a href="#orcamento" className="btn-dark-blue">
              SOLICITAR UM ORÇAMENTO
            </a>
          }
          // slides={c.gallery ? <SwiperEvent gallery={c.gallery} /> : null}
          slides={c.gallery ? <SwiperEvent gallery={c.gallery} /> : null}
        />
      ))}
    </div>
  );
};

export default MenuEvent;
