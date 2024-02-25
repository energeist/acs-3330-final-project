import React from 'react';
import { useState, useEffect } from 'react';

import './App.css';

import { prefetchPokemon } from './utils';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Pokedex from './components/Pokedex/Pokedex';

function App() {

  const [pokemonData, setPokemonData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  async function loadPokemon() {
    const data = await prefetchPokemon();
    console.log(data);
    setPokemonData(data);
    setIsLoaded(true);
  }
  
  // const pokemon = loadPokemon();

  // dummy data for now to reduce API spam
  const pokemon = {
    1: {
      name: "bulbasaur",
      types: ["grass", "poison"],
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",      
      },
    },
    2: {
      name: "ivysaur",
      types: ["grass", "poison"],
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",      
      },
    },
    3: {
      name: "venusaur",
      types: ["grass", "poison"],
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",      
      },
    },
    4: {
      name: "charmander",
      types: ["fire"],
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",      
      },
    },
    5: {
      name: "charmeleon",
      types: ["fire"],
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",      
      },
    },
    6: {
      name: "charizard",
      types: ["fire", "flying"],
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",      
      },
    },
    7: {
      name: "squirtle",
      types: ["water"],
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",      
      },
    },
    8: {
      name: "wartortle",
      types: ["water"],
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",      
      },
    },
    9: {
      name: "blastoise",
      types: ["water"],
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",      
      },
    },
  }

  return (
    <div className="App">
      <h1>This is a redux pokedex app</h1>
      {/* Display loading screen while prefetching */}
      { isLoaded ? <Pokedex /> : <LoadingScreen /> }
      {/* Display pokedex after prefetch */}
      {/* <Pokedex /> */}
    </div>
  );
}

export default App;
