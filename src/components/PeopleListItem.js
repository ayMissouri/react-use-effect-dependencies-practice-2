import { useEffect, useState } from "react";

function PeopleListItem(props) {
  const { person } = props;

  const [homeworld, setHomeworld] = useState('');

  useEffect(() => {
    fetch(person.homeworld)
      .then((res)=>res.json())
      .then((data)=>{setHomeworld(data)})
  }, [person])

  return (
    <ul>
      <li>{person.name} - Homeworld: {homeworld.name}</li>
    </ul>
  );
}

export default PeopleListItem;
