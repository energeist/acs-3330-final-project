// PlaceholderTeamCard card to show in the team panel before pokemon are selected

import './PlaceholderTeamCard.css';

function PlaceholderTeamCard() {
  return (
    <div className="PlaceholderTeamCard">
      <h1>PlaceholderTeamCard</h1>
      <img className="teamSpinner" src="./pokeball-spinner.png" alt="pokeball" />
      <p>Waiting...</p>
    </div>
  );
}

export default PlaceholderTeamCard;