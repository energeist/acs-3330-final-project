// Pokemon card to show in list of pokemon // This will display the data and team of pokemon
// import { useSelector, useDispatch } from 'react-redux';
// import { incrementPage, decrementPage } from '../../state/pokedex/pokedexSlice';

import './PokemonListCard.css';

function PokemonListCard(props) {
  const { key, id, name, types, sprite } = props;
  return (
    <div 
      className="PokemonListCard"
      key={id} 
    >
      <img src={sprite} alt={name} />
      <h2>{name}</h2>
      <p>{types}</p>
      <button>Details</button>
      <button>Add to Team</button>
    </div>
  );
}

export default PokemonListCard;