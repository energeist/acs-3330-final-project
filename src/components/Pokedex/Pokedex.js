// This will display the data and team of pokemon

import { useSelector, useDispatch } from 'react-redux';
import { incrementPage, decrementPage } from '../../state/pokedex/pokedexSlice';

import { pokemonRange } from '../../utils';

import PokemonListCard from '../PokemonListCard/PokemonListCard';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import PlaceholderDetails from '../PlaceholderDetails/PlaceholderDetails';

import './Pokedex.css';

function Pokedex() {
  const dispatch = useDispatch();

  const pokemon = useSelector(state => state.pokedex.pokemon);
  let currentPage = useSelector(state => state.pokedex.currentPage);
  let detailIndex = useSelector(state => state.pokedex.currentDetails);

  console.log("Pokedex component")
  console.log(pokemon)

  const detailedPokemon = pokemon[detailIndex]
  
  // pagination
  const pokemonPerPage = 6;
  let displayedPokemon = pokemonRange(pokemon, currentPage, pokemonPerPage)

  return (
    <div className="Pokedex">
      <h1>This is the Pokedex</h1>
      {
        detailIndex > 0 
        ? <PokemonDetails 
            id={detailIndex}
            name={detailedPokemon.name}
            types={detailedPokemon.types}
            sprite={detailedPokemon.sprites.front_default}
          />
        : <PlaceholderDetails />
      }
      <div className="divider"></div>
      <div>
        <button onClick={() => {
          console.log("Previous button clicked")
          if (displayedPokemon[0] !== 1) {
            dispatch(decrementPage())
          }}}
        >Previous</button>
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
        <button onClick={() => {
          console.log("Next button clicked")
          console.log(displayedPokemon)
          console.log(displayedPokemon[-1])
          if (displayedPokemon[-1] !== Object.keys(pokemon).length) {
            dispatch(incrementPage())
          }}}
        >Next</button>
      </div>
    </div>
  );
}

export default Pokedex;