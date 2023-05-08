import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from '../reducer/counterSlice'
import loginSlice from '../reducer/loginSlice'
import testSlice from '../reducer/testSlice';

const reduxStore =  configureStore({
  reducer: {
    counter: counterSliceReducer,
    loginSlice,
    testSlice,
  }
});

export default reduxStore;
