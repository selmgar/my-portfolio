import { NavLink } from 'react-router-dom';

import './navigation.css';

function Nav() {
  return (
    <nav>
      <ul className="nav-list"> 
        <li className="list-item">
          <NavLink to="/">About me</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/contact">Contact me</NavLink>
        </li>
        <li className="list-item">
          <NavLink to= "/resume">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
