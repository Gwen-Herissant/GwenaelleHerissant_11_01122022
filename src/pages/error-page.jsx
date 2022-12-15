import { useRouteError, Link } from "react-router-dom";
import Header from "../components/Header";
import '../styles/Error-Page.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Header />
      <div id="error-page">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to={`home`}>Retourner sur la page d’accueil</Link>
      </div>
      
    </div>
  )
}