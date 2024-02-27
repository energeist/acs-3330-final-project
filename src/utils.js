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

  // set pokemonData in redux store
  // set loaded to true
  // fade

  return pokemonData;
}

export function pokemonRange(pokemon, page, pokemonPerPage) {
  const maxIndex = Object.keys(pokemon).length
  let startIndex = (page - 1) * pokemonPerPage <= (maxIndex - pokemonPerPage)
    ? (page - 1) * pokemonPerPage + 1
    : maxIndex - pokemonPerPage + 1

  let indices = []

  for (let i = startIndex; i < startIndex + pokemonPerPage; i++) {
    if (i > maxIndex) break;
    indices.push(i);
  }

  return indices
}