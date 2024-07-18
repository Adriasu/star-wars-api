import React from "react";

const StarWarsApi = () => {
  const starWarsCharacters = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      const dataCharacters = data.results;
      // lista de personajes
      console.log(dataCharacters);

      // 2. info Darth Vader
      const darthVader = dataCharacters.find((character) => {
        return character.name === "Darth Vader";
      });
      const fetchInfoDarthVader = await fetch(darthVader.url);
      const dataDarthVader = await fetchInfoDarthVader.json();
      //console.log(dataDarthVader);

      // 3. Pelis Luke Skywalker
      const lukeSkywalker = dataCharacters.find((character) => {
        return character.name === "Luke Skywalker";
      });
      const linksFilmsLukeSkywalker = lukeSkywalker.films;
      const namesFilmsLukeSkywalker = linksFilmsLukeSkywalker.map(
        async (film) => {
          const fetchFilmsLuke = await fetch(film);
          const dataFilmsLuke = await fetchFilmsLuke.json();
          //console.log(dataFilmsLuke.title);
        }
      );

      // 4. planeta Leia Organa
      const leiaOrgana = dataCharacters.find((character) => {
        return character.name === "Leia Organa";
      });
      const fetchLeiaPlanet = await fetch(leiaOrgana.homeworld);
      const dataPlanetLeia = await fetchLeiaPlanet.json()
      //console.log(dataPlanetLeia);

      // 5. C-3PO
      const C3PO = dataCharacters.find((character) => {
        return character.name === "C-3PO"
      })
      const fetchInfoC3PO = await fetch(C3PO.url);
      const dataC3PO = await fetchInfoC3PO.json();
      //console.log(dataC3PO);
      const linksFilmsC3PO = dataC3PO.films

      const filmsDataC3PO = async () => {
          const filmsC3PO = linksFilmsC3PO.map(async(film) => {
            const fetchFilmsC3PO = await fetch(film)
            const dataFilmsC3PO = await fetchFilmsC3PO.json()
            return dataFilmsC3PO       
          })
          return await Promise.all(filmsC3PO)
      }
      const getFilmsC3PO = async () => {
        const data = await filmsDataC3PO()
        console.log(data);
      }
      getFilmsC3PO()

    } catch (error) {
      console.log(error);
    }
  };

  starWarsCharacters();

  return <div></div>;
};

export default StarWarsApi;
