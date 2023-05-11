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

const links = [
  {
    svg: <PreWedding />,
    link: '#prewed',
    title: 'Pré Wedding',
  },
  {
    svg: <Bride />,
    link: '#prewed',
    title: 'Elopement Wedding',
  },
  {
    svg: <Couple />,
    link: '#prewed',
    title: 'Mini Wedding',
  },
  {
    svg: <StreamIcon />,
    link: '#prewed',
    title: 'Small Wedding & Streaming',
  },
  {
    svg: <CakeHeart />,
    link: '#prewed',
    title: 'Casamento Tradicional',
  },
  {
    svg: <Camera />,
    link: '#prewed',
    title: 'Sessão Fotográfica e Vídeo',
  },
  {
    svg: <GlassDrink />,
    link: '#prewed',
    title: 'Day Use',
  },
  {
    svg: <BreakFast />,
    link: '#prewed',
    title: 'Café da Manhã',
  },
  {
    svg: <Handshake />,
    link: '#prewed',
    title: 'Evento Corporativo',
  },
  {
    svg: <PartyBuild />,
    link: '#prewed',
    title: 'Aniversário/Festa 15 anos',
  },
  {
    svg: <Foot />,
    link: '#prewed',
    title: 'Batizado',
  },
  {
    svg: <Ring />,
    link: '#prewed',
    title: 'Noivado',
  },
  {
    svg: <Camera />,
    link: '#prewed',
    title: 'Live',
  },
];

const MenuEvent = () => (
  <div className="menu-event theme-dark-blue">
    <ul>
      {links.map((l, i) => (
        <li key={`${l}`[i]}>
          <a href={l.link}>
            {l.svg}
            {l.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default MenuEvent;
