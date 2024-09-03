import './navigation.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">About me</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact me</Link>
        </li>
        <li>
          <Link to= "/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
