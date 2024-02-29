export const prefetchPokemon = async () => {
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

export function typesAsArray(types) {
  let typesArray = [];

  if (Array.isArray(types)) {
    typesArray = types.map((type) => {
      return type.type.name
    })
  } else {
    typesArray.push(types.type.name)
  }

  return typesArray
}

export const dummyData = {
  1: {
    name: "bulbasaur",
    types: [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",      
    },
  },
  2: {
    name: "ivysaur",
    types: [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",      
    },
  },
  3: {
    name: "venusaur",
    types: [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",      
    },
  },
  4: {
    name: "charmander",
    types: {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",      
    },
  },
  5: {
    name: "charmeleon",
    types: {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",      
    },
  },
  6: {
    name: "charizard",
    types: {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",      
    },
  },
  7: {
    name: "squirtle",
    types: [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",      
    },
  },
  8: {
    name: "wartortle",
    types: [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",      
    },
  },
  9: {
    name: "blastoise",
    types: [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",      
    },
  },
}