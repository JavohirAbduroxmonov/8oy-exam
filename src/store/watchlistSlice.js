import { createSlice } from "@reduxjs/toolkit";
import { setToLocalStorage, getFromLocalStorage } from "../utils";

const initialState = {
  watchlist: getFromLocalStorage("watchlist"),
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addCoin: (state, action) => {
      state.watchlist = [...state.watchlist, action.payload];
      setToLocalStorage("watchlist", state.watchlist);
    },
    removeCoin: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (coin) => coin.id !== action.payload
      );
      setToLocalStorage("watchlist", state.watchlist);
    },
  },
});

export const { addCoin, removeCoin } = watchlistSlice.actions;
export default watchlistSlice.reducer;
