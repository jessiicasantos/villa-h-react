import NavLogo from './NavLogo/NavLogo';
import NavMenu from './NavMenu/NavMenu';
import Link from '../../Link/Link';
import './Nav.css';

const Nav = () => (
  <nav className="top-nav">
    <NavLogo />
    <NavMenu />
    <Link
      href={'#orcamento'}
      className={'btn-brd-gold'}
      txt={'SOLICITAR UM ORÇAMENTO'}
    />
  </nav>
);

export default Nav;
