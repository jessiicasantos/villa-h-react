import NavMenu from '../NavMenu/NavMenu';
import Link from '../../../Link/Link';

const NavMbWrapper = ({ isOpen }) => (
  <div className="mb-wrapper">
    <NavMenu isOpen={isOpen} />
    <Link
      href={'#orcamento'}
      txt={'SOLICITAR UM ORÇAMENTO'}
      isOpen={`btn-brd-gold ${isOpen}`}
    />
  </div>
);

export default NavMbWrapper;