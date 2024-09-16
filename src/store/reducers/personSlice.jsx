import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  person: null,
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    getPersonDetails: (state, action) => {
      state.person = action.payload;
    },
    removePersonDetails: (state, action) => {
      state.person = null;
    },
  },
});

export const { getPersonDetails, removePersonDetails } = personSlice.actions;
export default personSlice.reducer;
