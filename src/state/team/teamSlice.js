import { createSlice } from '@reduxjs/toolkit'

const defaultTeamState = {
  pokemon: [ ],
  teamName: ''
}

export const teamSlice = createSlice({
  name: 'team',
  initialState: defaultTeamState,
  reducers: {
    addToTeam: (state, action) => { },
    removeFromTeam: (state, action) => { }
  },
})

export const { } = teamSlice.actions

export default teamSlice.reducer