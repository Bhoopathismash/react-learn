import { createSlice } from "@reduxjs/toolkit";

export const counterSliceReducer = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      //if (state.value >= 1) {
        state.value -= 1;
      //}
    },
  },
});

export const { increment, decrement } = counterSliceReducer.actions;

export default counterSliceReducer.reducer;
