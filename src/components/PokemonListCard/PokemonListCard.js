// Pokemon card to show in list of pokemon // This will display the data and team of pokemon
import { useDispatch } from 'react-redux';
// import { incrementPage, decrementPage } from '../../state/pokedex/pokedexSlice';

import './PokemonListCard.css';
import { currentDetails, addToTeam } from '../../state/pokedex/pokedexSlice';

function PokemonListCard(props) {
  const { id, name, types, sprite } = props;
  
  const dispatch = useDispatch();
  return (
    <div className="PokemonListCard">
      <img className="ListCardImage" src={sprite} alt={name} />
      <h2>{name}</h2>
      {/* do the stuff with types here */}
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