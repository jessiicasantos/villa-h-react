import { ReactComponent as Fish } from '../../../assets/img/fish-icon.svg';
import Section from '../../Section/Section';
// import Event from './Event/Event';
import MenuEvent from './MenuEvent/MenuEvent';

const EventSection = ({ data }) => (
  <div className="container event-section" id="eventos">
    <Section
      svg={<Fish />}
      title={
        <h2>
          Vários eventos. <strong>Um só lugar.</strong>
        </h2>
      }
      text={
        <p>
          Os espaços da Villa H foram planejados e decorados para acomodar todos
          os tipos de eventos. Desde pequenas comemorações com a família a
          celebrações grandiosas, com aquele toque de bom gosto e versatilidade
          que só a Villa H tem.
        </p>
      }
    />
    {/* <Event data={data} /> */}
    <MenuEvent data={data} />
  </div>
);

export default EventSection;
