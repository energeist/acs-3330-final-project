// Detailed listing of pokemon stats and sprites
// Pokemon card to show in list of pokemon // This will display the data and team of pokemon
// import { useSelector, useDispatch } from 'react-redux';
// import { incrementPage, decrementPage } from '../../state/pokedex/pokedexSlice';

import './PokemonDetails.css';

function PokemonDetails(props) {
  const { id, name, types, sprite } = props;
  return (
    <div className="PokemonDetails">
      <h1>This is the PokemonDetails Component</h1>
      <img src={sprite} alt={name} />
      <div>Rotate Image</div>
      <h2>{name}</h2>
      <p>{types}</p>
      <p>Flavour text</p>
      <div>stats</div>
      <div>moves</div>
      <button>Add to Team</button>
    </div>
  );
}

export default PokemonDetails;