import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';

import { prefetchPokemon, dummyData } from './utils';

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

    loadPokemon();
  }, []);

  // dummy data for now to reduce API spam
  // const pokemon = dummyData;

  // set pokemon data to dummy data for now
  // useEffect(() => {
  //   dispatch(populatePokedex(pokemon));
  //   setIsLoaded(true);
  // }, []);

  return (
    <div className="App">
      <h1>Redux Pokedex</h1>
      {/* Display loading screen while prefetching */}
      { isLoaded ? <Pokedex /> : <LoadingScreen /> }
      {/* Display pokedex after prefetch */}
    </div>
  );
}

export default App;
