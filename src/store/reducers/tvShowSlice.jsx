import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvShows: null,
};

export const tvShowSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getTvShowDetails: (state, action) => {
      state.tvShows = action.payload;
    },
    removeTvShowDetails: (state, action) => {
      state.tvShows = null;
    },
  },
});

export const { getTvShowDetails, removeTvShowDetails } = tvShowSlice.actions;
export default tvShowSlice.reducer;
