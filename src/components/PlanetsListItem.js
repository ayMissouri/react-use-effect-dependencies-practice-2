import { useEffect, useState } from "react";

function PlanetsListItem(props) {
  const { planet } = props;

  const [firstFilm, setFirstFilm] = useState('')


  useEffect(() => {
    fetch(planet.films[0])
      .then((res)=>res.json())
      .then((data)=>{setFirstFilm(data)})
  }, [planet])

  return <li>{planet.name} - First Film: {firstFilm.title}</li>;
}

export default PlanetsListItem;
