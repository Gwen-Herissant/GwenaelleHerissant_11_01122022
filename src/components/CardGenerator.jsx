import { useEffect, useState } from "react";
import Card from "./Card";
import '../styles/Card.css'

export default function CardsGenerator() {

  const getData = () => {
    fetch('/data/logements.json', {
      headers : {
        'Content-type' : 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(function(response) {
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      setData(myJson)
    });
  }
  useEffect(() => {
    getData()
  }, [])

  const [data, setData] = useState([]);

  return (
    <div className="card-generator">
      {/* <ul>
        {data && data.map((item, index) => <li key={index}>{item.title}</li>)}
      </ul> */}
      {data && data.map((item, index) => <Card key={index} title={item.title} id={item.id} />)}
    </div>
  )

}