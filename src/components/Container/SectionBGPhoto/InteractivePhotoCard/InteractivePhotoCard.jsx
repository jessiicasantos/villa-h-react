import Boat from '../img/boat-mountain.png';
import { ReactComponent as SvgWave } from '../../img/SvgWave.svg';
import Card from '../../../Card/Card';

const cards = [
  {
    title: 'Vista privilegiada',
    text: 'A Villa H tem como cenário principal um ângulo especial da Baía de Guanabara, do Pão de Açúcar e do Cristo Redentor. Seja dia, noite ou no pôr do sol, é sempre uma experiência de tirar o fôlego.',
  },
  {
    title: '1.500m² de espaço',
    text: 'Nossa Villa possui quatro ambientes, totalmente singulares, mas que juntos formam o espaço perfeito para o seu evento. Podendo receber, confortavelmente, até 400 pessoas.',
  },
  {
    title: 'Nova estrutura',
    text: 'Revitalizamos a estrutura, mantendo o desenho original do arquiteto Zanine Caldas, e repensamos não só a parte estética, como também a acessibilidade dos nossos clientes.',
  },
];

const InteractivePhotoCard = () => (
  <div className="anim-photo-card">
    <img src={Boat} alt="" className="boat" />
    <div className="cards">
      {cards.map((c, i) => (
        <Card
          className="theme-gray"
          key={`${c}`[i]}
          svg={<SvgWave />}
          title={<h3>{c.title}</h3>}
          text={<p>{c.text}</p>}
        />
      ))}
    </div>
  </div>
);

export default InteractivePhotoCard;
