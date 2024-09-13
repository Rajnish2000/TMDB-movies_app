import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovieDetails: (state, action) => {
      state.movies = action.payload;
    },
    removeMovieDetails: (state, action) => {
      state.movies = null;
    },
  },
});

export const { getMovieDetails, removeMovieDetails } = movieSlice.actions;
export default movieSlice.reducer;
