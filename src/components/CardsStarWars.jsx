/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const CardsStarWars = ({ character, index }) => {
  const [planets, setPlanets] = useState([]);

  const fetchPlanest = async () => {
    try {
      const response = await fetch(character.homeworld);
      const dataPlanets = await response.json();
      const namePlanets = dataPlanets.name;
      setPlanets(namePlanets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPlanest();
  }, []);

  return (
    <div className="border-[2px] border-black bg-slate-300 rounded-md w-[180px] h-[300px] p-3 flex flex-col justify-center items-center">
      <h1 className="border-[1px] border-black w-[150px] h-[200px] flex justify-center items-center bg-slate-500 rounded-md">
        ({index})
      </h1>
      <h2>{character.name}</h2>
      <h3 className="text-sm">Lives in {planets}</h3>
      <div className="flex justify-between w-[150px] text-sm">
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
      </div>
    </div>
  );
};

export default CardsStarWars;
