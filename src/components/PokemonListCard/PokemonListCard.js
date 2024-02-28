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
      {types.map((type, index) => {
        return <p key={index}>{type.name}</p>
      })}
      <button
        onClick={(e) => {
            console.log("PokemonListCard button clicked for id: " + id)
            dispatch(currentDetails(id))
          }
        }
      >Details</button>
      <button
        onClick={(e) => {
          console.log("PokemonDetails button clicked for id: " + id)
          dispatch(addToTeam(id))
        }}
      >Add to Team</button>
    </div>
  );
}

export default PokemonListCard;