import { createSlice } from '@reduxjs/toolkit'

const defaultTeamState = {
  pokemon: [ ],
  teamName: ''
}

export const teamSlice = createSlice({
  name: 'team',
  initialState: defaultTeamState,
  reducers: {
    addToTeam: (state) => { },
    removeFromTeam: (state) => { }
  },
})

export const { } = teamSlice.actions

export default teamSlice.reducer