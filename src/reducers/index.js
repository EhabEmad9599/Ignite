import { configureStore } from "@reduxjs/toolkit";
import { games } from "./gamesReducers";


const store = configureStore({
  reducer:{
    games,
  }
});


export default store;