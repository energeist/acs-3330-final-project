import { configureStore } from '@reduxjs/toolkit'

import pokedexReducer from '../state/pokedex/pokedexSlice'
// import teamReducer from '../state/team/teamSlice'

export const store = configureStore({
  reducer: {
    pokedex: pokedexReducer,
  }
})