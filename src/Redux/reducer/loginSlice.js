import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
? {
  isLoggedIn: true,
  data: user, 
  error: "",
} : {
  isLoggedIn: false,
  data: [],
  error: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginStart: (state) => ({...initialState}),
    registerSuccess: (state) => ({
      ...state,
      isLoggedIn: false,
    }),
    registerError: (state) => ({
      ...state,
      isLoggedIn: false,
    }),
    loginSuccess: (state, actions) => { 
      console.log('actions', actions)
      return state = {
        ...initialState, 
        isLoggedIn: true,
        data: actions.payload.user,
      }
    },
    loginError: (state, actions) => {
      return state = {
        ...initialState, 
        isLoggedIn: false,
        data: [],
        error: actions.payload.error
      }
    },
    logoutUser: (state, actions) => {
      return state = {
        ...initialState, 
        isLoggedIn: false,
        data: [],
        error: ""
      }
    }
  },
});

export const { loginStart, registerSuccess, registerError, loginSuccess, loginError, logoutUser } = loginSlice.actions;

export default loginSlice.reducer;
