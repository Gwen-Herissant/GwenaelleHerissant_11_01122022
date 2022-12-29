import { useEffect, useState } from "react";
import "../styles/Collapse.css";
import arrow from "../assets/images/collapse-arrow.svg"

export default function Collapse({title, description}){

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return(
    <div onClick={handleClick} className={isActive ? 'collapse-body--open' : 'collapse-body'}>
      <div className="collapse-header">
        <p>{title}</p>
        <img src={arrow} alt="open-collapse" />
      </div>
      <div className="collapse-content">
        <p>{description}</p>
      </div>
    </div>
  );
}