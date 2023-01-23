import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from '../reducer/counterSlice'
import loginReducer from '../reducer/loginReducer'

const store =  configureStore({
  reducer: {
    counter: counterSliceReducer,
    loginStatus: loginReducer,
  }
});

export default store;
