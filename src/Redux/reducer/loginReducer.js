import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginStart: (state) => ({...initialState}),
    loginSuccess: (state, actions) => {
      return state = {
        ...initialState, 
        loading: false,
        data: actions.payload.payload.data,
      }
    },
    loginError: (state, actions) => {
      return state = {
        ...initialState, 
        loading: false,
        data: [],
        error: actions.payload.error
      }
    }
  },
});

export const { loginStart, loginSuccess, loginError } = loginReducer.actions;

export default loginReducer.reducer;
