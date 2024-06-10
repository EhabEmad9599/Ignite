import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GameDetailsURL, gameScreenURL } from "../api";
import axios from "axios";

const initialState = {games: []};


// Fetching Game Deatils
export const loadDetails = createAsyncThunk('games/loadDetails', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    //Fetch Data
    const [detailData, screenshotData] = await Promise.all([
      axios.get(GameDetailsURL(id)),
      axios.get(gameScreenURL(id)),
    ]);

    const { data: detailResponse } = detailData;
    const { data: screenshotResponse } = screenshotData;

      return {

        details: detailResponse,
        screen: screenshotResponse
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