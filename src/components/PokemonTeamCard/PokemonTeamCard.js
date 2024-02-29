// Pokemon card to show in the team panel

import { useDispatch } from 'react-redux';

import './PokemonTeamCard.css';

import { typesAsArray } from '../../utils';

import { currentDetails, removeFromTeam } from '../../state/pokedex/pokedexSlice';

function PokemonTeamCard(props) {
  const { id, index, name, types, sprite } = props;

  const typesArray = typesAsArray(types)

  const dispatch = useDispatch();

  return (
    <div className="PokemonTeamCard">
      <img src={sprite} alt={name} />
      <h2>{name}</h2>
      <div className="typesContainer">
        {
          typesArray.map((type, index) => {
            return (
            <div 
              key={index}
              className={`teamType ${type}`}
            >{type}</div>
            )
          })
        }
      </div>
      <button
        onClick={(e) => dispatch(currentDetails(id))}
      >Details</button>
      <button
        // remove the array item at specified index
        onClick={(e) => {dispatch(removeFromTeam(index))}}
      >Remove from Team</button>
    </div>
  );
}

export default PokemonTeamCard;