import React from 'react';
import { NavLink } from 'react-router-dom';
import menuLinks from '../../commons/menu';

function Header() {
  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <ul>
        {menuLinks.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
