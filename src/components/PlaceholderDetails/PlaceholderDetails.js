import './PlaceholderDetails.css';

function PokemonDetails() {
  return (
    <div className="PlaceholderDetails">
      <h1>This is the PlaceholderDetails Component</h1>
      <img className="pokeballSpinner" src="./pokeball-spinner.png" alt="pokeball" />
      <p>Waiting...</p>
    </div>
  );
}

export default PokemonDetails;