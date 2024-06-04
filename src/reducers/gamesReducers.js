import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    popular: [],
    newGames: [],
    upcoming: [],
  }


const gameReducers = createSlice({
  name:"fetch_Games",
  initialState,
  reducers:{
    fetchGames: (state, action) => {},
  }
})


export const games = gameReducers.reducer;