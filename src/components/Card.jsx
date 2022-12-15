import { Link } from 'react-router-dom';
import '../styles/Card.css'

export default function Card (props){
  return(
    //À faire : redirection correcte (voir étape 9 dans fiches "Étapes clées") contenant l'id du logement (utilisé URL params).

    //Link en attendant bonne version
    <Link to={`location=`}>
      <div className="card">
      <p className="card_title">{props.title}</p>
    </div>
    </Link>
  );
}