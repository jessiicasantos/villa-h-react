import '../Button/Button.css';

const Link = ({ href, className, txt, isOpen }) => (
  <a href={href} className={`${(className, isOpen)}`}>
    {txt}
  </a>
);

export default Link;
