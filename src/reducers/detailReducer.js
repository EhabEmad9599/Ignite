import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GameDetailsURL, gameScreenURL } from "../api";
import axios from "axios";

const initialState = {games: [], isLoading: true};


// Fetching Game Deatils
export const loadDetails = createAsyncThunk('games/loadDetails', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    //Fetch Data
    const detailData = await axios.get(GameDetailsURL(id));
    const screenshotData = await axios.get(gameScreenURL(id));

      return {
        details: detailData.data,
        screen: screenshotData.data
      }
  }

  catch (error) {
    return rejectWithValue(error.message);
  }
})


const detailReducer = createSlice({
  name:'GetDetail',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
    // Start fetch game 
      // .addCase(loadDetails.pending, (state, action) => {
      //   state.isLoading = true; // Set loading state to true
      //   state.error = null; // Clear any previous error
      // })
      .addCase(loadDetails.fulfilled, (state, action) => {
        state.isLoading = false; // Set loading state to false
        state.games = action.payload;
      })
      .addCase(loadDetails.rejected, (state, action) => {
        state.isLoading = false; // Set loading state to false
        state.error = action.error.message; // Handle error message
      })
  }
})


export const detail = detailReducer.reducer;