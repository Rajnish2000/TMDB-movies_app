import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: null,
};

export const tvShowSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getTvShowDetails: (state, action) => {
      console.log(state);
    },
    removeTvShowDetails: (state, action) => {
      console.log(state);
    },
  },
});

export const { getTvShowDetails, removeTvShowDetails } = tvShowSlice.actions;
export default tvShowSlice.reducer;
