import { useState } from 'react';
import NavLogo from './NavLogo/NavLogo';
import NavMenu from './NavMenu/NavMenu';
import Link from '../../Link/Link';
import NavMbWrapper from './NavMbWrapper/NavMbWrapper';
import './Nav.css';
import Burguer from './Burguer/Burguer';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const active = isOpen ? 'active' : '';

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-nav">
      <NavLogo />
      {isOpen ? (
        <>
          <NavMbWrapper isOpen={active} handleIsOpen={handleIsOpen} />
        </>
      ) : (
        <>
          <NavMenu isOpen={active} />
          <Link
            href={'#orcamento'}
            txt={'SOLICITAR UM ORÇAMENTO'}
            isOpen={`btn-brd-gold ${active}`}
          />
        </>
      )}
      <Burguer id="btn-nav-mb" isOpen={active} handleIsOpen={handleIsOpen} />
    </nav>
  );
};

export default Nav;
