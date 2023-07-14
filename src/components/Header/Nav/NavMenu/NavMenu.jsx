const menus = [
  {
    href: '#a-lorem-ipsum',
    text: 'A Lorem',
  },
  {
    href: '#eventos',
    text: 'Eventos',
  },
  {
    href: '#estruturas',
    text: 'Estruturas',
  },
  {
    href: '#gastronomia',
    text: 'Gastronomia',
  },
  {
    href: '#depoimentos',
    text: 'Depoimentos',
  },
];

const NavMenu = () => (
  <ul className="nav-links">
    {menus.map((m, index) => (
      <li className="nav-link" key={`${m}`[index]}>
        <a href={m.href}>{m.text}</a>
      </li>
    ))}
  </ul>
);

export default NavMenu;
