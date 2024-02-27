import { createSlice } from '@reduxjs/toolkit'

const defaultPokedexState = {
  pokemon: { 1: 'bulbasaur' },
  currentDisplay: { },
  currentPage: 1,
}

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: defaultPokedexState,
  reducers: {
    populatePokedex: (state, action) => {
      state.pokemon = action.payload
    },
    currentDetails: (state, action) => {
      state.currentDetails = action.payload
    },
    incrementPage: (state) => {
      state.currentPage += 1
    },
    decrementPage: (state) => {
      state.currentPage -= 1
    },
    addToTeam: (state, action) => {
      state.team.push(action.payload)
    },
    removeFromTeam: (state, action) => {
      state.team = state.team.filter(pokemon => pokemon !== action.payload)
    }
  }
})

export const { 
  populatePokedex,
  currentDetails,
  incrementPage,
  decrementPage
} = pokedexSlice.actions

export default pokedexSlice.reducer