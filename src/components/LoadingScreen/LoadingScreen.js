// Displays a spinning ball and loading text while prefetching data
import React from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className="LoadingScreen">
      <img className="pokeballSpinner" src="./pokeball-spinner.png" alt="pokeball" />
      <p>Loading...</p>
      <div className="progressContainer">
        <div className="progressBar"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;