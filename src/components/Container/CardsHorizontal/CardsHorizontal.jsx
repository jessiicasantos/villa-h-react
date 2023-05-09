import CardHorizontal from './CardHorizontal';
import { ReactComponent as CakeIcon } from '../../../assets/img/cake-icon.svg';
import { ReactComponent as PartyIcon } from '../../../assets/img/party-icon.svg';
import { ReactComponent as CookIcon } from '../../../assets/img/cook-icon.svg';
import { ReactComponent as MusicIcon } from '../../../assets/img/music-icon.svg';

const cards = [
  {
    svg: <CakeIcon />,
    title: 'Eventos',
    text: 'Com espaços aconchegantes, sofisticados e versáteis para a realização do seu evento, a Villa H conta com ambientes cobertos e climatizados. Se preferir, você também pode celebrar ao ar livre. Todos os espaços oferecem a vista maravilhosa da Baía de Guanabara!',
  },
  {
    svg: <PartyIcon />,
    title: 'Entretenimento',
    text: 'A Villa H está sempre antenada para trazer o melhor para sua diversão, com uma agenda repleta de shows, apresentações, workshops, palestras e aulas. Nosso objetivo é proporcionar momentos especiais e experiências incríveis, além de informação de qualidade.',
  },
  {
    svg: <CookIcon />,
    title: 'Alta Gastronomia',
    tag: <h5 className="tag"></h5>,
    text: 'Seja para uma refeição ou um buffet completo para o seu evento, a experiência culinária aqui na Villa H promete ser inesquecível. Saboreie o melhor da gastronomia, admirando uma vista de tirar o fôlego.',
  },
  {
    svg: <MusicIcon />,
    title: 'Day Use',
    tag: <h5 className="tag"></h5>,
    text: 'Além da nossa vista maravilhosa, você pode aproveitar um dia de sol na piscina da Villa H. Seja em um grande evento ou em uma pequena reunião entre amigos, queremos fazer com que cada momento com a gente seja especial',
  },
];

const CardsHorizontal = () => (
  <div className="cards-horizontal">
    {cards.map((c, i) => (
      <CardHorizontal
        key={`${c}`[i]}
        svg={c.svg}
        tag={c.tag}
        title={<h3>{c.title}</h3>}
        text={<p>{c.text}</p>}
      />
    ))}
  </div>
);

export default CardsHorizontal;
