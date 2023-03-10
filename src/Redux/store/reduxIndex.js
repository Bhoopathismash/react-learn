import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from '../reducer/counterSlice'
import loginSlice from '../reducer/loginSlice'

const reduxStore =  configureStore({
  reducer: {
    counter: counterSliceReducer,
    loginSlice,
  }
});

export default reduxStore;
