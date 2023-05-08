import React, { useReducer } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { testIncrement, testDecrement } from '../Redux/reducer/testSlice';

const intialValue = {count: 0};

const reducer = (state, actions) => {
    switch(actions.type) {
        case 'increment':
            //console.log(actions);
            return {count: state.count + 1 + actions.payload};
        case 'decrement':
            return {count: state.count - 1 - actions.payload};
        default:
            return intialValue;
    }
}

const ReduxTestComponent = () => {
  //For Redux
  const reducerSelector = useSelector(state => state.testSlice);
  const reduxDispatch = useDispatch();

  //For Reducer
  const [state, dispatch] = useReducer(reducer, intialValue);

  return (
    <>
        <h2>Redux</h2>
        <h2>{reducerSelector.value}</h2>
        <button type='button' onClick={(e) => reduxDispatch(testIncrement({user: 10}))}>+</button>
        <button type='button' onClick={(e) => reduxDispatch(testDecrement({user: 10}))}>-</button>
        <br/>
        <br/>
        <h2>Reducer</h2>
        <h2>{state.count}</h2>
        <button type='button' onClick={(e) => dispatch({type: 'increment', payload: 10})}>+</button>
        <button type='button' onClick={(e) => dispatch({type: 'decrement', payload: 10})}>-</button>
    </>
  )
}

export default ReduxTestComponent