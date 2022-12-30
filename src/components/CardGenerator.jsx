import { useEffect, useState } from "react";
import Card from "./Card";
import '../styles/Card.css'
import { getData } from "../service/dataManager";

export default function CardsGenerator() {

  useEffect(() => {
    getData()
    .then(function(myJson) {
      setData(myJson)
    });
  }, [])

  const [data, setData] = useState([]);

  return (
    <div className="card-generator">
      {data && data.map((item) => <Card key={`logement-${item.id}`} logement={item} />)}
    </div>
  )

}