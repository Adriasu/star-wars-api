import React, { useState, useEffect } from "react";
import CardsStarWars from "./CardsStarWars";

const StarWarsUserList = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      const dataCharacters = data.results;
      setCharacters(dataCharacters);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="m-auto grid grid-cols-3 gap-12">
      {characters.map((character, i) => {
        return <CardsStarWars key={i} character={character} index={i+1} />;
      })}
    </div>
  );
};

export default StarWarsUserList;
