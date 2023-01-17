import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from '../reducer/counterSlice'
import loginReducer from '../reducer/loginReducer'

export default configureStore({
  reducer: {
    counter: counterSliceReducer,
    loginStatus: loginReducer,
  }
});
