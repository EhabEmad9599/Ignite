import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newGamesURL, popularGamesURL, upcomingGamesURL } from '../api';
import axios from "axios";


const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  isLoading: false, // Add an initial loading state
  error: null, // Add an initial error state
};


// get popular games 
export const loadGames = createAsyncThunk('games/loadGames', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    // fetch data
    const popularData = await axios.get(popularGamesURL());
    return popularData.data.results

  } catch (error) {
    return rejectWithValue(error.message);
  }
})

// upcomingGamesURL
export const upcomingGames = createAsyncThunk('games/upcomingGames', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    // fetch data
    const upcomingGames = await axios.get(upcomingGamesURL());
    return upcomingGames.data.results

  } catch (error) {
    return rejectWithValue(error.message);
  }
})

// upcomingGamesURL
export const newGames = createAsyncThunk('games/newGames', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    // fetch data
    const newGames = await axios.get(newGamesURL());
    return newGames.data.results

  } catch (error) {
    return rejectWithValue(error.message);
  }
})




const gameReducers = createSlice({
  name:"fetch_Games",
  initialState,
  reducers:{
    fetchGames: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
    // Start fetch game 
      .addCase(loadGames.pending, (state, action) => {
        state.isLoading = true; // Set loading state to true
        state.error = null; // Clear any previous error
      })
      .addCase(loadGames.fulfilled, (state, action) => {
        state.isLoading = false; // Set loading state to false
        state.popular = action.payload
      })
      .addCase(loadGames.rejected, (state, action) => {
        state.isLoading = false; // Set loading state to false
        state.error = action.error.message; // Handle error message
      })
    // End fetch game 

    // Start upcoming game 
      .addCase(upcomingGames.pending, (state, action) => {
        state.isLoading = true; // Set loading state to true
        state.error = null; // Clear any previous error
      })
      .addCase(upcomingGames.fulfilled, (state, action) => {
        state.isLoading = false; // Set loading state to false
        state.upcoming = action.payload
      })
      .addCase(upcomingGames.rejected, (state, action) => {
        state.isLoading = false; // Set loading state to false
        state.error = action.error.message; // Handle error message
      })
    // End upcoming game 


    // Start newGames
      .addCase(newGames.pending, (state, action) => {
        state.isLoading = true; // Set loading state to true
        state.error = null; // Clear any previous error
      })
      .addCase(newGames.fulfilled, (state, action) => {
        state.isLoading = false; // Set loading state to false
        state.newGames = action.payload
      })
      .addCase(newGames.rejected, (state, action) => {
        state.isLoading = false; // Set loading state to false
        state.error = action.error.message; // Handle error message
      })
    // End newGames 

  }
})


export const games = gameReducers.reducer;