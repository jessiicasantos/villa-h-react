import Section from '../../Section/Section';
import { ReactComponent as Fish } from '../../../assets/img/fish-icon.svg';

const EventSection = () => (
  <div className="event-section">
    <Section
      svg={<Fish />}
      title={<h2>Vários eventos. Um só lugar.</h2>}
      text={
        <p>
          Os espaços da Villa H foram planejados e decorados para acomodar todos
          os tipos de eventos. Desde pequenas comemorações com a família a
          celebrações grandiosas, com aquele toque de bom gosto e versatilidade
          que só a Villa H tem.
        </p>
      }
    />
    {/* <Events /> */}
  </div>
);

export default EventSection;
