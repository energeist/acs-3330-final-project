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
      <img src={sprite} alt={name} />
      <h2>{name}</h2>
      <div className="typesContainer">
        {
          typesArray.map((type, index) => {
            console.log(type)
            return (
            <div 
              key={index}
              className={`detailsType ${type}`}
            >{type}</div>
            )
          })
        }
      </div>
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