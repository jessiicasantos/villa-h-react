import NavMenu from '../NavMenu/NavMenu';
import Link from '../../../Link/Link';
import BannerSocial from '../../Banner/BannerSocial/BannerSocial';

const NavMbWrapper = ({ isOpen }) => (
  <div className="mb-wrapper">
    <NavMenu isOpen={isOpen} />
    <Link
      href={'#orcamento'}
      txt={'SOLICITAR UM ORÇAMENTO'}
      isOpen={`btn-brd-gold ${isOpen}`}
    />
    <BannerSocial className="socials-mb" />
  </div>
);

export default NavMbWrapper;
