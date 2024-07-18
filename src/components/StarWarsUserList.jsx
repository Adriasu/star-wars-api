import React, { useState, useEffect } from "react";
import CardsStarWars from "./CardsStarWars";

const StarWarsUserList = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      const dataCharacters = data.results;
      setCharacters(dataCharacters)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters()
  },[])

  console.log(characters);

  return (
    <div className="m-auto grid grid-cols-3 gap-12">
      {characters.map((character, index) => {
        return(
            <CardsStarWars
            key={index}
            photo={index}
            name={character.name}
            
            height={character.height}
            mass={character.mass}
            />
        )
      })

      }
    </div>
  );
};

export default StarWarsUserList;
