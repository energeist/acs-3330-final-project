// This will display the data and team of pokemon
import { useSelector, useDispatch } from 'react-redux';
import { incrementPage, decrementPage } from '../../state/pokedex/pokedexSlice';

import PokemonListCard from '../PokemonListCard/PokemonListCard';

import { pokemonRange } from '../../utils';

import './Pokedex.css';

function Pokedex() {
  const pokemon = useSelector(state => state.pokedex.pokemon);
  let currentPage = useSelector(state => state.pokedex.currentPage);

  // currentPage = 2

  console.log("Pokedex component")
  console.log(pokemon)

  // pagination
  const pokemonPerPage = 6;

  let displayedPokemon = pokemonRange(pokemon, currentPage, pokemonPerPage)
  console.log("displayedPokemon")
  console.log(displayedPokemon)

  return (
    <div className="Pokedex">
      <h1>This is the Pokedex</h1>
      <div className="pokemonList">
        {displayedPokemon.map((key) => {
          console.log("key: " + key)
          return (
          <PokemonListCard 
            id={key}
            key={key}
            name={pokemon[key].name}
            types={pokemon[key].types}
            sprite={pokemon[key].sprites.front_default}
          /> 
          );
        })}
      </div>
    </div>
  );
}

export default Pokedex;