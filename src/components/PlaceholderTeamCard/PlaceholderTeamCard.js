// PlaceholderTeamCard card to show in the team panel before pokemon are selected

import './PlaceholderTeamCard.css';

function PlaceholderTeamCard() {
  return (
    <div className="PlaceholderTeamCard">
      <img className="teamSpinner" src="./pokeball-spinner.png" alt="pokeball" />
      <p>Waiting...</p>
    </div>
  );
}

export default PlaceholderTeamCard;