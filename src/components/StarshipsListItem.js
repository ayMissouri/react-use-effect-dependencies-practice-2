import { useEffect, useState } from "react";

function StarshipsListItem(props) {
  const { starship } = props;

  const [listOfPilots, setListOfPilots] = useState([])

  useEffect(() => {
    starship.pilots.forEach((pilot) => {
      fetch(pilot)
      .then((res)=>res.json())
      .then((data)=>setListOfPilots(listOfPilots => [...listOfPilots, data]))
    });
  }, [starship])

  return <li>{starship.name} - Pilots:
    <ul>
      {listOfPilots.map((pilot, index) => {
        return <li key={index}>{pilot.name}</li>})}
        {listOfPilots.length === 0 && <li>No Pilot</li>}
    </ul>
  </li>
}

export default StarshipsListItem;
