import { createSlice } from '@reduxjs/toolkit'

const defaultPokedexState = {
  pokemon: { 1: 'bulbasaur' },
  pokemonPerPage: 6,
  currentDetails: 0,
  flavorText: '',
  currentPage: 1,
  team: [null, null, null, null, null, null],
}

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: defaultPokedexState,
  reducers: {
    populatePokedex: (state, action) => {
      state.pokemon = action.payload
      return state
    },
    currentDetails: (state, action) => {
      state.currentDetails = action.payload
      return state
    },
    currentFlavorText: (state, action) => {
      state.flavorText = action.payload
      return state
    },
    incrementPage: (state) => {
      const maxPage = Math.ceil(Object.keys(state.pokemon).length / state.pokemonPerPage)
      
      if (state.currentPage < maxPage) {
        state.currentPage += 1
      }
      
      return state
    },
    decrementPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1
      }
      
      return state
    },
    addToTeam: (state, action) => {
      let nullReplaced = false

      state.team.map((pokemon, index) => {
        if (!nullReplaced && pokemon === null) {
          state.team[index] = action.payload
          nullReplaced = true
        }
      })
      return state
    },
    removeFromTeam: (state, action) => {
      state.team[action.payload] = null
      return state
    }
  }
})

export const { 
  populatePokedex,
  currentDetails,
  currentFlavorText,
  incrementPage,
  decrementPage,
  addToTeam,
  removeFromTeam,
} = pokedexSlice.actions

export default pokedexSlice.reducer