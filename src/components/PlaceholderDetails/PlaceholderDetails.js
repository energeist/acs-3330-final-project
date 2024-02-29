import './PlaceholderDetails.css';

function PokemonDetails() {
  return (
    <div className="PlaceholderDetails">
      <img className="detailsSpinner" src="./pokeball-spinner.png" alt="pokeball" />
      <p>Waiting...</p>
    </div>
  );
}

export default PokemonDetails;