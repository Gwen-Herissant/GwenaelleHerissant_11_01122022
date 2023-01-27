import { Link } from "react-router-dom";
import '../styles/Error-Page.css';

export default function ErrorData() {

  return (
    <div>
      <div id="error-page" className="error-data">
        <h1>Oups! Une erreur est survenue</h1>
        <p>Les données n'ont pas été trouvées</p>
        <Link to={`home`}>Retourner sur la page d’accueil</Link>
      </div>
    </div>
  )
}
