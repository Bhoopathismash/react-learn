import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from '../reducer/counterSlice'
import loginSlice from '../reducer/loginSlice'
import messageSlice from '../reducer/messageSlice'

const reduxStore =  configureStore({
  reducer: {
    counter: counterSliceReducer,
    loginSlice,
    messageSlice,
  }
});

export default reduxStore;
