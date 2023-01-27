import { useEffect, useState } from "react";
import Card from "./Card";
import '../styles/Card.css'
import { getData } from "../service/dataManager";
import { useNavigate } from "react-router-dom";

export default function CardsGenerator() {

  const navigate = useNavigate();

  useEffect(() => {
    getData()
    .then(function(myJson) {
      setData(myJson)
    })
    .catch(error => {
      navigate("/error-data");
    })
  }, [navigate])

  const [data, setData] = useState([]);

  return (
    <div className="card-generator">
      {data && data.map((item) => <Card key={`logement-${item.id}`} logement={item} />)}
      {/* {Array.isArray(data) && <span>Aucun logement n'a été trouvé</span>} */}
    </div>
  )

}