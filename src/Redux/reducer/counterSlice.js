import { createSlice } from "@reduxjs/toolkit";

export const counterSliceReducer = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    doubleValue: 0,
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
    incrementDouble: (state, actions) => {
      const actionsValue = actions.payload.value;
      state.doubleValue += 1 + actionsValue;
    },
    decrementDouble: (state, actions) => {
      const actionsValue = actions.payload.value;
      state.doubleValue -= 1 + actionsValue;
    },
  },
});

export const { increment, decrement, incrementDouble, decrementDouble } = counterSliceReducer.actions;

export default counterSliceReducer.reducer;
