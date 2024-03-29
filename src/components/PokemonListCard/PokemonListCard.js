// Pokemon card to show in list of pokemon // This will display the data and team of pokemon
import { useDispatch } from 'react-redux';

import './PokemonListCard.css';

import { typesAsArray } from '../../utils';

import { currentDetails, addToTeam } from '../../state/pokedex/pokedexSlice';

function PokemonListCard(props) {
  const { id, name, types, sprite } = props;
  
  const typesArray = typesAsArray(types);
  
  const dispatch = useDispatch();

  return (
    <div className="PokemonListCard">
      <img className="ListCardImage" src={sprite} alt={name} />
      <h2>{name}</h2>
      <div className="typesContainer">
      {
        typesArray.map((type, index) => {
          return (
          <div 
            key={index}
            className={`listCardType ${type}`}
          >{type}</div>
          )
        })
      }
      </div>
      <button
        onClick={(e) => dispatch(currentDetails(id))}
      >Details</button>
      <button
        onClick={(e) => dispatch(addToTeam(id))}
      >Add to Team</button>
    </div>
  );
}

export default PokemonListCard;