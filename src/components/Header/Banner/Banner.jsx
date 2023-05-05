import BannerSocial from './BannerSocial/BannerSocial';
import BannerHeadline from './BannerHeadline/BannerHeadline';
import BannerGallery from './BannerGallery/BannerGallery';
// import '@fontsource/aleo/700.css';
// import '@fontsource/aleo/400.css';
import './Banner.css';

const Banner = () => (
  <div className="banner">
    <BannerSocial />
    <BannerHeadline />
    <BannerGallery />
  </div>
);

export default Banner;
