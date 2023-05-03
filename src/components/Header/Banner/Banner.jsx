import BannerSocial from './BannerSocial/BannerSocial';
import BannerHeadline from './BannerHeadline/BannerHeadline';
import BannerGallery from './BannerGallery/BannerGallery';
import './Banner.css';

const Banner = () => (
  <div className="banner">
    <BannerSocial />
    <BannerHeadline />
    <BannerGallery />
  </div>
);

export default Banner;
