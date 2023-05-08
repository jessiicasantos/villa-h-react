import Section from '../Section/Section';
import SectionBenefits from './SectionBenefits/SectionBenefits';
import './Container.css';
import { ReactComponent as Fish } from '../../assets/img/fish.svg';
import PhotoSection from './PhotoSection/PhotoSection';

const Container = () => (
  <div className="container">
    <div className="benefits">
      <Section
        className="section section-dark"
        svg={<Fish />}
        title={<h2>Em cada ambiente, um encanto no olhar.</h2>}
        text={
          <p>
            Localizada em São Francisco, no coração de Niterói, a Villa H é um
            projeto único, obra do arquiteto mundialmente reconhecido, Zanine
            Caldas. Ela nasceu para ser um complexo multiuso para todos aqueles
            que sonham viver momentos inesquecíveis e diferenciados.
          </p>
        }
      />
      <SectionBenefits
        className="section-benefits"
        title={<h6>CONFIRA ALGUNS BENEFÍCIOS</h6>}
      />
    </div>
    <PhotoSection />
  </div>
);

export default Container;
