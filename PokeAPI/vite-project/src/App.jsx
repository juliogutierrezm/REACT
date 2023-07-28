import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [pokemonNames, setPokemonNames] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807');
      const results = response.data.results;
      const names = results.map(pokemon => pokemon.name);
      setPokemonNames(names);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <div>
        {pokemonNames.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    </>
  );
};

export default App;
