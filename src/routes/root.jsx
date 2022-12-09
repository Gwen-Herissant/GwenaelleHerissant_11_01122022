import { Outlet, Link } from "react-router-dom";
import '../styles/Header.css';
import logo from '../assets/images/LOGO.png';

export default function Root() {
  return (
    <div>
      <header className="header">
      <Link to={`home`}>
        <img src={logo} title="Kasa" alt="Kasa logo" className="header_logo"></img>
      </Link>
        <nav className="navbar">
          <ul>
            <li>
              <Link to={`home`}>Accueil</Link>
            </li>
            <li>
              <Link to={`about`}>A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  )
}