import { createSlice } from '@reduxjs/toolkit'

const defaultPokedexState = {
  pokemon: { 1: 'bulbasaur' },
  currentDetails: 0,
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
  incrementPage,
  decrementPage,
  addToTeam,
  removeFromTeam,
} = pokedexSlice.actions

export default pokedexSlice.reducer