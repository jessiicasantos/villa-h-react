import { useState } from 'react';
import NavLogo from './NavLogo/NavLogo';
import NavMbWrapper from './NavMbWrapper/NavMbWrapper';
import Burguer from './Burguer/Burguer';
import './Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const active = isOpen ? 'active' : '';

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`top-nav${active ? ' active' : ''}`}>
      <div className="main-nav">
        <NavLogo />
        <Burguer id="btn-nav-mb" isOpen={active} handleIsOpen={handleIsOpen} />
      </div>
      <NavMbWrapper isOpen={active} handleIsOpen={handleIsOpen} />
    </nav>
  );
};

export default Nav;
