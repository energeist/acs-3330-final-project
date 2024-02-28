// Pokemon card to show in the team panel

import { useDispatch } from 'react-redux';

import './PokemonTeamCard.css';
import { currentDetails, removeFromTeam } from '../../state/pokedex/pokedexSlice';

function PokemonTeamCard(props) {
  const { id, index, name, types, sprite } = props;

  const dispatch = useDispatch();

  return (
    <div className="PokemonTeamCard">
      <h1>This a PokemonTeamCard</h1>
      <h2>index # {index}</h2>
      <img src={sprite} alt={name} />
      <div>Rotate Image</div>
      <h2>{name}</h2>
      {/* <p>{types}</p> */}
      <button
        onClick={(e) => {
            console.log("PokemonTeamCard button clicked for id: " + id)
            dispatch(currentDetails(id))
          }
        }
      >Details</button>
      <button
        // remove the array item at specified index
        onClick={(e) => {dispatch(removeFromTeam(index))}}
      >Remove from Team</button>
    </div>
  );
}

export default PokemonTeamCard;