import './App.css';

function App() {

  async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const data = await response.json();
    console.log(data);
  }

  fetchPokemon();
  
  return (
    <div className="App">
      <h1>This is a redux pokedex app</h1>
      {/* Display loading screen while prefetching */}
      {/* <LoadingScreen /> */}
      {/* Display pokedex after prefetch */}
      {/* <Pokedex /> */}
    </div>
  );
}

export default App;
