// This will display the data and team of pokemon

import { useSelector, useDispatch } from 'react-redux';
import { incrementPage, decrementPage } from '../../state/pokedex/pokedexSlice';

import { pokemonRange } from '../../utils';

import PokemonListCard from '../PokemonListCard/PokemonListCard';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import PlaceholderDetails from '../PlaceholderDetails/PlaceholderDetails';

import './Pokedex.css';
import PokemonTeam from '../PokemonTeam/PokemonTeam';

function Pokedex() {
  const dispatch = useDispatch();

  const pokemon = useSelector(state => state.pokedex.pokemon);
  let currentPage = useSelector(state => state.pokedex.currentPage);
  let detailIndex = useSelector(state => state.pokedex.currentDetails);

  console.log("Pokedex component")
  console.log(pokemon)

  const detailedPokemon = pokemon[detailIndex]
  
  // pagination
  const pokemonPerPage = useSelector(state => state.pokedex.pokemonPerPage);
  let displayedPokemon = pokemonRange(pokemon, currentPage, pokemonPerPage)

  return (
    <div className="Pokedex">
      <h1>This is the Pokedex</h1>
      {/* Details component */}
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
      {/* ListCards */}
      <div className="listContainer">
        <button onClick={() => {
          if (displayedPokemon[0] !== 1) {
            dispatch(decrementPage())
          }}}
        >Previous</button>
        <div className="pokemonList">
          {
            displayedPokemon.map((key) => {
              console.log("types")
              console.log(pokemon[key].types)
              console.log(typeof pokemon[key].types)

              let types = []

              types.push(pokemon[key].types)
              console.log("This is your types thing")
              console.log(types)
              return (
              <PokemonListCard 
                id={key}
                key={key}
                name={pokemon[key].name}
                types={types}
                sprite={pokemon[key].sprites.front_default}
              /> 
              )
            })
          }
        </div>
        <button 
          onClick={() => dispatch(incrementPage())}
        >Next</button>
      </div>
      {/* Team */}
      <PokemonTeam />
    </div>
  );
}

export default Pokedex;