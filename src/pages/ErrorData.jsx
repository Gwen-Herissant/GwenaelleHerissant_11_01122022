import { Link } from "react-router-dom";
import '../styles/Error-Page.css';

export default function ErrorData() {

  return (
    <div>
      <div id="error-page">
        <h1>404</h1>
        <p>Oups! Les données n'ont pas été trouvées</p>
        <Link to={`home`}>Retourner sur la page d’accueil</Link>
      </div>
    </div>
  )
}
