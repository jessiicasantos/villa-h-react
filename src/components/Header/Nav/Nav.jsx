import NavLogo from './NavLogo/NavLogo';
import NavMenu from './NavMenu/NavMenu';
import Button from '../../Button/Button';
import './Nav.css';

const Nav = () => (
  <nav className="top-nav">
    <NavLogo />
    <NavMenu />
    <Button />
  </nav>
);

export default Nav;
