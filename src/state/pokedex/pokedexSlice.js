import { createSlice } from '@reduxjs/toolkit'

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: { },
  reducers: {
    currentDisplay: (state) => { },
    currentPage: (state) => { },
  },
})

export const { } = pokedexSlice.actions

export default pokedexSlice.reducer