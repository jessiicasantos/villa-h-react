import { ReactComponent as ArrowDown } from '../img/arrow-down.svg';
import Section from '../../../Section/Section';
import CheckedList from '../../../CheckedList/CheckedList';

const BannerHeadline = () => (
  <div className="banner-head">
    <Section
      title="Muitos momentos em um só lugar."
      text="Uma verdadeira vila capaz de reunir,  
      em um só espaço, diferentes opções para 
      você realizar o seu sonho."
    />
    <CheckedList />
    <a href="#a_villa-h">
      <ArrowDown />
      <p>
        Descubra mais sobre o espaço <br /> e se encante das mais diversas
        formas.
      </p>
    </a>
  </div>
);

export default BannerHeadline;
