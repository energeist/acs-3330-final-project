async function prefetch() => {
  // for pokemonId in range(1, 152):
  const pokemonData = {};
  for (let pokemonId = 1; pokemonId <= 152; pokemonId++) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    let data = await response.json();
    // add to "cached" pokemonData
    pokemonData[pokemonId] = data;
  }

  return pokemonData;
}