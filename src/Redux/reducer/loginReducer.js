import { createSlice } from "@reduxjs/toolkit";

export const loginReducer = createSlice({
  name: "login",
  initialState: {
    loading: true,
    data: [],
    error: "",
  },
  reducers: {
    loginStart: (state) => {
      console.log("inn", state);
      state.loading = true;
      state = {
        loading: true,
        data: [],
        error: "",
      };
    },
    loginSuccess: (state, actions) => {
      console.log("inn 111", actions);
      state.loading = false;
      state.data = actions.payload.payload.data;
      state = {
        loading: false,
        data: actions.payload,
        error: "",
      };
    },
    loginError: (state, actions) => {
      console.log("actions", actions);
      state.error = actions.payload.error;
      state = {
        loading: false,
        data: [],
        error: actions.error,
      };
    },
  },
});

export const { loginStart, loginSuccess, loginError } = loginReducer.actions;

export default loginReducer.reducer;
