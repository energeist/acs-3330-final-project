// Detailed listing of pokemon stats and sprites
// Pokemon card to show in list of pokemon // This will display the data and team of pokemon
import { useDispatch } from 'react-redux';

import { addToTeam } from '../../state/pokedex/pokedexSlice'

import { typesAsArray } from '../../utils';

import './PokemonDetails.css';

function PokemonDetails(props) {
  const { id, name, types, sprite } = props;
  
  const typesArray = typesAsArray(types);

  const dispatch = useDispatch();

  return (
    <div className="PokemonDetails">
      <h1>This is the PokemonDetails Component</h1>
      <img src={sprite} alt={name} />
      <div>Rotate Image</div>
      <h2>{name}</h2>
      {
        typesArray.map((type, index) => {
          console.log(type)
          return (
          <div 
            key={index}
            className={`details-${type}`}
          >{type}</div>
          )
        })
      }
      <p>Flavour text</p>
      <div>stats</div>
      <div>moves</div>
      <button
        onClick={(e) => {dispatch(addToTeam(id))}}
      >Add to Team</button>
    </div>
  );
}

export default PokemonDetails;