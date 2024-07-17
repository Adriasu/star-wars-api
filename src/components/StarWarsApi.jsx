import React from "react";

const StarWarsApi = () => {
  const starWarsCharacters = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      const dataCharacters = data.results;
      console.log(dataCharacters);
    } catch (error) {
      console.log(error);
    }
  };

  starWarsCharacters();

  const infoDarthVader = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people/4/");
      const dataDarthVader = await response.json();
      console.log(dataDarthVader);
    } catch (error) {
      console.log(error);
    }
  };

  infoDarthVader()

  return <div></div>;
};

export default StarWarsApi;
