import SalaoPrincipal from '../img/Salao-Principal.png';
import Loft from '../img/Loft-e-varanda-externa.png';
import Deck from '../img/Deck-Piscina.png';
import Gastronomia from '../img/Gastronomia_Villa H.png';
import Photo from './Photo';
import Section from '../../Section/Section';

const columns = [
  {
    photo: SalaoPrincipal,
    title: 'Salão principal e varanda',
    text: 'Ambiente totalmente climatizado, com cobertura e cortina de vidro, possibilitando que cerimônias e comemorações sejam realizadas com a vista deslumbrante que a Villa H proporciona.',
    alt: '',
  },
  {
    photo: Loft,
    title: 'Loft e varanda externa',
    text: 'Ambiente parcialmente coberto, com uma varanda externa aberta, possibilitando a realização de cerimônias ao ar livre.',
    alt: '',
  },
  {
    photo: Deck,
    title: 'Deck piscina',
    text: 'Área coberta e área ao redor da piscina, ambiente ao ar livre. Neste espaço é possível realizar cerimônias com vista direta para o Cristo redentor.',
    alt: '',
  },
  {
    photo: Gastronomia,
    title: 'Gastronomia da Villa H',
    text: 'Área coberta e área ao redor da piscina, ambiente ao ar livre. Neste espaço é possível realizar cerimônias com vista direta para o Cristo redentor.',
    alt: '',
  },
];

const PhotoSection = () => (
  <div className="photos-section">
    {columns.map((c, index) => (
      <div
        className={`photo-section photo-${!(index % 2) ? 'left' : 'right'}`}
        key={`${c}`[index]}
      >
        <Photo src={c.photo} alt={c.alt} />
        <Section
          className="section section-dark"
          title={<h2>{c.title}</h2>}
          text={<p>{c.text}</p>}
          btn={
            <button className="btn-dark-blue">VER GALERIA DO AMBIENTE</button>
          }
        />
      </div>
    ))}
  </div>
);

export default PhotoSection;
