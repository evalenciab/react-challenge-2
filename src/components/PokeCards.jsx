import React, { useEffect, useState } from "react";
import { mockPokemonsData } from "../mock/pokeData";

const PokeCards = () => {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    const mockData = [...mockPokemonsData];
    setPokeData(mockData.sort((a, b) => a.name.localeCompare(b.name)));
  }, []);
  return (
    <ol>
      {pokeData.length > 0 &&
        pokeData.map((pokemon) => (
          <li>
            <h1>{pokemon.name}</h1>
            <img
              src={
                pokemon.sprites.front_default
                  ? pokemon.sprites.front_default
                  : pokemon.sprites.back_default
              }
              alt={pokemon.name}
            />
            <img
              src={
                pokemon.sprites.front_shiny
                  ? pokemon.sprites.front_shiny
                  : pokemon.sprites.back_shiny
              }
              alt={pokemon.name}
            />
            <p>
              <a href={pokemon.videoLink} target="_blank" rel="noreferrer">
                {pokemon.name} - video
              </a>
            </p>
          </li>
        ))}
    </ol>
  );
};

export default PokeCards;
