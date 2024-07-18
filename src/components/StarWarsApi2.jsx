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
      //console.log(dataDarthVader);
    } catch (error) {
      console.log(error);
    }
  };
  infoDarthVader();

  const moviesLukeSkywalker = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people/1/");
      const dataLukeSkyWalker = await response.json();
      const moviesData = dataLukeSkyWalker.films;
      const namesMovies = moviesData.map(async (movie) => {
        const fetchMoviesLuke = await fetch(movie);
        const dataMoviesLuke = await fetchMoviesLuke.json();
        //console.log(dataMoviesLuke.title);
      });
    } catch (error) {
      console.log(error);
    }
  };
  moviesLukeSkywalker();

  const leiaPlanet = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/planets/2/")
      const dataPlanet = await response.json()
      //console.log(dataPlanet);
      
    } catch (error) {
      console.log(error);
    }
  }
  leiaPlanet()






  return <div></div>;
};

export default StarWarsApi;
