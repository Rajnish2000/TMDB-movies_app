import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  person: null,
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    getPersonDetails: (state, action) => {
      console.log(state);
    },
    removePersonDetails: (state, action) => {
      console.log(state);
    },
  },
});

export const { getPersonDetails, removePersonDetails } = personSlice.actions;
export default personSlice.reducer;
