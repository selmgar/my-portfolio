import './navigation.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="navlist"> 
        {/* The NavLink component is used to create a link to a different route.
            By default, an active class is added to a <NavLink> component when it is active so you can use CSS to style it. */}
        <li>
          <NavLink to="/">About me</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact me</NavLink>
        </li>
        <li>
          <NavLink to= "/resume">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
