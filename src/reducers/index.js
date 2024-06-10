import { configureStore } from "@reduxjs/toolkit";
import { games } from "./gamesReducers";
import { detail } from "./detailReducer";


const store = configureStore({
  reducer:{
    games,
    detail,
  }
});


export default store;