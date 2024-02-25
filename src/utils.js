// async function prefetchPokemon() {
//   // for pokemonId in range(1, 152):
//   const pokemonData = {};
//   for (let pokemonId = 1; pokemonId <= 152; pokemonId++) {
//     try {
//       // fetch pokemon data
//       await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
//       let data = await response.json();
      
//       // add to "cached" pokemonData
//       pokemonData[pokemonId] = data;
//     }
//     catch (error) {
//       console.error(error);
//       // next?
//     }
//   }

//   // set pokemonData in redux store
//   // set loaded to true
//   // fade

//   return pokemonData;
// }

export const prefetchPokemon = async () => {
  // for pokemonId in range(1, 152):
  const pokemonData = {};
  for (let pokemonId = 1; pokemonId <= 151; pokemonId++) {
    try {
      // fetch pokemon data
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      let data = await response.json();
      
      // add to "cached" pokemonData
      pokemonData[pokemonId] = data;
    }
    catch (error) {
      console.error(error);
      pokemonData[pokemonId] = null;
      continue;
    }
  }

  // const pokemonId = 1;

  // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  // let data = await response.json();

  // pokemonData[pokemonId] = data;

  // set pokemonData in redux store
  // set loaded to true
  // fade

  return pokemonData;
}