import { ReactComponent as Facebook } from '../img/facebook.svg';
import { ReactComponent as Instagram } from '../img/instagram.svg';

const socials = [
  {
    href: 'ttps://www.facebook.com/villaheventos/',
    social: <Facebook />,
  },
  {
    href: 'https://www.instagram.com/villa__h/?hl=pt-br',
    social: <Instagram />,
  },
];

const BannerSocial = () => (
  <div className="socials">
    {socials.map((s, index) => (
      <a href={s.href} key={`${s}`[index]}>
        {s.social}
      </a>
    ))}
    <div className="line-vert"></div>
  </div>
);

export default BannerSocial;
