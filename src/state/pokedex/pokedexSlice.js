import { createSlice } from '@reduxjs/toolkit'

const defaultPokedexState = {
  pokemon: { 1: 'bulbasaur' },
  currentDetails: 0,
  currentPage: 1,
  // team: [null, null, null, null, null, null],
  team: [1, 2, 3, 4, 5, 6],
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
      console.log("currentDetails action")
      console.log(action)

      state.currentDetails = action.payload
      return state
    },
    incrementPage: (state) => {
      state.currentPage += 1
      return state
    },
    decrementPage: (state) => {
      state.currentPage -= 1
      return state
    },
    addToTeam: (state, action) => {
      state.team.push(action.payload)
      return state
    },
    removeFromTeam: (state, action) => {
      state.team = state.team.filter(pokemon => pokemon !== action.payload)
      return state
    }
  }
})

export const { 
  populatePokedex,
  currentDetails,
  incrementPage,
  decrementPage,
  addToTeam,
  removeFromTeam,
} = pokedexSlice.actions

export default pokedexSlice.reducer