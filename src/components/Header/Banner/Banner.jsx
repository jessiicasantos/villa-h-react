import BannerSocial from './BannerSocial/BannerSocial';
import BannerHeadline from './BannerHeadline/BannerHeadline';
import BannerGallery from './BannerGallery/BannerGallery';
import './Banner.css';

const Banner = () => (
  <div className="banner">
    <h1>_Banner</h1>
    <BannerSocial />
    <BannerHeadline />
    <BannerGallery />
  </div>
);

export default Banner;
