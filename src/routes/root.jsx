import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <nav>
      <h1>KASA</h1>
      <ul>
        <li>
          <Link to={`home`}>Accueil</Link>
        </li>
        <li>
          <Link to={`about`}>A propos</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </nav>
  )
}