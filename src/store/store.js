import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice";
import watchlistReducer from "./watchlistSlice";

const rootReducer = {
  project: projectReducer,
  watchlist: watchlistReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
