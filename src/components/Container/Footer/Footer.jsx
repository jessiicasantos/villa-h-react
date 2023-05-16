import SwiperTestimonial from './SwiperTestimonial/SwiperTestimonial';
import './Footer.css';
import SwiperTxtTestimonial from './SwiperTestimonial/SwiperTxtTestimonial';

const Footer = () => (
  <footer>
    <div className="container">
      <SwiperTxtTestimonial />
      <SwiperTestimonial />
    </div>
  </footer>
);

export default Footer;
