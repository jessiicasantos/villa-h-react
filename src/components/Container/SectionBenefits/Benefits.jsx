import { ReactComponent as SvgBuild } from '../img/SvgBuild.svg';
import { ReactComponent as SvgWave } from '../img/SvgWave.svg';

const cards = [
  {
    svg: <SvgBuild />,
    title:
      'Estrutura acessível a todos os públicos, incluindo pessoas com deficiência.',
  },
  {
    svg: <SvgWave />,
    title: 'Localização e vista privilegiadas.',
  },
];

const Benefits = () => (
  <ul>
    {cards.map((c, index) => (
      <li key={`${c}`[index]}>
        {c.svg}
        {c.title}
      </li>
    ))}
  </ul>
);

export default Benefits;
