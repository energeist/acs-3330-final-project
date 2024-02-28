import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';

import { prefetchPokemon } from './utils';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Pokedex from './components/Pokedex/Pokedex';
import { populatePokedex } from './state/pokedex/pokedexSlice';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonData = await prefetchPokemon();
      dispatch(populatePokedex(pokemonData));
      setIsLoaded(true);

      console.log("Pokemon data loaded")
      console.log(pokemonData)
    }
    // disabled for now to reduce API spam
    // loadPokemon();
  }, []);

  // dummy data for now to reduce API spam
  const pokemon = {
    1: {
      name: "bulbasaur",
      types: [
        {
          "slot": 1,
          "type": {
            "name": "grass",
            "url": "https://pokeapi.co/api/v2/type/12/"
          }
        },
        {
          "slot": 2,
          "type": {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/"
          }
        }
      ],
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",      
      },
    },
    2: {
      name: "ivysaur",
      types: [
        {
          "slot": 1,
          "type": {
            "name": "grass",
            "url": "https://pokeapi.co/api/v2/type/12/"
          }
        },
        {
          "slot": 2,
          "type": {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/"
          }
        }
      ],
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",      
      },
    },
    3: {
      name: "venusaur",
      types: [
        {
          "slot": 1,
          "type": {
            "name": "grass",
            "url": "https://pokeapi.co/api/v2/type/12/"
          }
        },
        {
          "slot": 2,
          "type": {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/"
          }
        }
      ],
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",      
      },
    },
    4: {
      name: "charmander",
      types: {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",      
      },
    },
    5: {
      name: "charmeleon",
      types: {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",      
      },
    },
    6: {
      name: "charizard",
      types: {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",      
      },
    },
    7: {
      name: "squirtle",
      types: [
        {
          "slot": 1,
          "type": {
            "name": "water",
            "url": "https://pokeapi.co/api/v2/type/11/"
          }
        }
      ],
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",      
      },
    },
    8: {
      name: "wartortle",
      types: [
        {
          "slot": 1,
          "type": {
            "name": "water",
            "url": "https://pokeapi.co/api/v2/type/11/"
          }
        }
      ],
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",      
      },
    },
    9: {
      name: "blastoise",
      types: [
        {
          "slot": 1,
          "type": {
            "name": "water",
            "url": "https://pokeapi.co/api/v2/type/11/"
          }
        }
      ],
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",      
      },
    },
  }

  // set pokemon data to dummy data for now
  useEffect(() => {
    dispatch(populatePokedex(pokemon));
    setIsLoaded(true);
  }, []);

  return (
    <div className="App">
      <h1>This is a redux pokedex app</h1>
      {/* Display loading screen while prefetching */}
      { isLoaded ? <Pokedex /> : <LoadingScreen /> }
      {/* Display pokedex after prefetch */}
    </div>
  );
}

export default App;
