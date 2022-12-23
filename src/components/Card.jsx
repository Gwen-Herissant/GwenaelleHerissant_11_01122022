import { Link } from 'react-router-dom';
import '../styles/Card.css'

export default function Card ({logement}){
  return(
    <Link to={`/logement/${logement.id}`}>
      <div className="card" style={{backgroundImage: `url(${logement.cover})`}} >
      {/* </Link><img src={`${logement.cover}`} alt="" /> */}
        <p className="card_title">{logement.title}</p>
      </div>
    </Link>
  );
}