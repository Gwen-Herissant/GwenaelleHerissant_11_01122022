import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>404</h1>
      <p>Oops, cette page est introuvable.</p>
      <a href={`home`}>Retourner sur la page d'accueil</a>
    </div>
  )
}