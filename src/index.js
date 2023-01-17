import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NewApp from './NewApp';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import  store from './Redux/store/index'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Actions
//export const loginAction = () => ({type: 'login_start'});

/* const intialValue = {
  loading: false,
  data: [],
  error: ''
}; */

//Reducer
/* const loginReducer = (state = intialValue, actions) => {
    switch (actions.type) {
      case 'login_start':
        return {
          loading: true,
          data: [],
          error: ''
        }
      case 'login_success':
        return {
          loading: false,
          data: actions.payload,
          error: ''
        }
      case 'login_error':
        return {
          loading: false,
          data: [],
          error: actions.error
        }
      default:
        return {
          ...state
        }
    }
} */

//Store
//let store = createStore(loginReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <NewApp />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
