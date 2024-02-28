import { useSelector } from 'react-redux';

import PokemonTeamCard from '../PokemonTeamCard/PokemonTeamCard';
import PlaceholderTeamCard from '../PlaceholderTeamCard/PlaceholderTeamCard';

import './PokemonTeam.css';

function PokemonTeam() {
  const currentTeam = useSelector((state) => state.pokedex.team);
  const pokemon = useSelector((state) => state.pokedex.pokemon);

  return (
    <div className="PokemonTeam">
      {
        currentTeam.map((pokemonId, index) => {
          console.log("PokemonId inside pokemonTeam component:")
          console.log(pokemonId)
          console.log ("index")
          console.log(index)
          let currentPokemon = pokemon[pokemonId]; 
          return (
            currentPokemon 
              ? <PokemonTeamCard
                key={index}
                id={pokemonId}
                index={index}
                name={currentPokemon.name}
                types={currentPokemon.types}
                sprite={currentPokemon.sprites.front_default}
              />
              : <PlaceholderTeamCard key={index} />
          )
        })
      }
    </div>
  );
}

export default PokemonTeam;