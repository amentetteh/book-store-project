import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { NavLink } from 'react-router-dom';
import menuLinks from '../../commons/menu';
import '../../assets/styles/styles.css';

function Header() {
  return (
    <nav>
      <div className="nav-left">
        <h1>Bookstore CMS</h1>
        <ul className="nav-link">
          {menuLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <FontAwesomeIcon className="nav-right connected-user" icon={solid('user')} />
    </nav>
  );
}

export default Header;
