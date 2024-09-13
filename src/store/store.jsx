import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieSlice";
import personReducer from "./reducers//personSlice";
import tvShowReducer from "./reducers/tvShowSlice";

export const store = configureStore({
  reducer: {
    movieState: movieReducer,
    personState: personReducer,
    tvShowState: tvShowReducer,
  },
});
