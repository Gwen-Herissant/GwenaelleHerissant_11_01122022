import '../styles/Logement.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../service/dataManager";
import Collapse from '../components/Collapse'
import Gallery from '../components/Gallery';
import { useNavigate, redirect } from "react-router-dom";

export default function Logement() {

  let {id} = useParams();

  const [data, setData] = useState({pictures: [], tags: [], host: {}, equipments: []});

  const navigate = useNavigate();

  useEffect(() => {
    getData()
    .then(function(myJson) {
      let logement = myJson.find(l => l.id === id);
      setData(logement)
      if(!logement) {
        return redirect("/error-page")
      }
    })
    .catch(error => {
      navigate("/error-data");
    })
  }, [setData, navigate, id])

  //Star ratings
  function ratings() {

    const starArray = [];

    for(let i = 1; i <= data.rating; i++) {
      starArray.push(1);
    }
    
    const emptyStars = 5 - starArray.length;
    for(let i = 1; i <= emptyStars; i++) {
      starArray.push(0);
    }

    const stars = starArray.map((value, index) => {
      return (
        <svg key={index} className={`ratings_star--${value}`} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
        </svg>
      )
    })

    return <div className='ratings_wrapper'>{stars}</div>

  }

  return(
    <div className='logement'>
      
      <Gallery slides={data.pictures}/>

      <div className="logement_details">
        <div className="logement_details--top-left">
          <h2>{data.title}</h2>
          <p>{data.location}</p>
          <div className="logement_tags-group">
            {data && data.tags.map((item, index) => <span className="logement_tag" key={`tag-${index}`}>{item}</span>)}
          </div>
        </div>
        <div className="logement_details--bottom-right">
          {ratings()}
          <div className="logement_host">
            <p className="logement_host_name">{data.host.name}</p>
            <img className="logement_host_img" src={`${data.host.picture}`} alt={`${data.host.name}`} />
          </div>
        </div>
      </div>

      <div className='collapses'>
        <Collapse 
          title="Description" 
          description={data.description}
        />
        <Collapse 
          title="Équipements" 
          description={data && data.equipments.map((item, index) => <span key={`equipments-${index}`}>{item}</span>)}
        />

      </div>
      
    </div>
  );
}