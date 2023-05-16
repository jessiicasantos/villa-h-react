import { ReactComponent as Phone } from '../img/phone-icon.svg';
import { ReactComponent as Mail } from '../img/mail-icon.svg';
import { ReactComponent as Local } from '../img/local-icon.svg';

const dataContact = [
  {
    link: 'tel:+55213620-4493',
    svg: <Phone />,
    contact: '(21) 3620-4493',
  },
  {
    link: 'mailto:evento@villah.com.br',
    svg: <Mail />,
    contact: 'evento@villah.com.br',
  },
  {
    link: 'https://www.google.com/maps/place/Villa+H/@-22.9152238,-43.1125778,17z/data=!3m1!4b1!4m5!3m4!1s0x99815a29e69905:0xbaa84dcba9860517!8m2!3d-22.9152238!4d-43.1103891',
    svg: <Local />,
    contact:
      'Villa H, Estrada Leopoldo Fróes, 170A, São Francisco, Niterói – RJ',
  },
];

const BoxContact = () => (
  <div className="box-contact">
    <h6>Ou entre em contato com a gente</h6>
    <ul>
      {dataContact.map((c, i) => (
        <li key={`${c}`[i]}>
          <a href={c.link}>
            {c.svg} {c.contact}
          </a>
        </li>
      ))}
    </ul>
    {/* <a href="https://www.google.com/maps/dir//Villa+H+-+Estrada+Leopoldo+Fr%C3%B3es,+170+A+-+S%C3%A3o+Francisco,+Niter%C3%B3i+-+RJ,+24360-005/@-22.9152238,-43.1125778,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x99815a29e69905:0xbaa84dcba9860517!2m2!1d-43.1103891!2d-22.9152238">
      Saiba como chegar
    </a> */}
  </div>
);

export default BoxContact;
