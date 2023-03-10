import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementDouble, decrementDouble } from '../Redux/reducer/counterSlice';
//import { loginStart, loginSuccess, loginError } from '../Redux/reducer/loginSlice';

const ReduxComponent = () => {
    const counterState = useSelector(state => state.counter);
    const loginSelector = useSelector(state => state.loginSlice);
    console.log('first', loginSelector)
    const dispatch = useDispatch();
    /* const middleware = () => {
        if (!loginSelector.loading) {
            dispatch(loginStart());
        } else {
            //fetch("https://jsonplaceholder.typicode.com/todos/1")
            fetch("https://reqres.in/api/users/1")
                .then((response) => response.json())
                .then((json) => dispatch(loginSuccess({payload: json})))
                .catch((err) => dispatch(loginError({error: "Error Login" })));
        }
    }; */

    return (
        <>
            {/* <div>
                <hr/>
                <p>{JSON.stringify(loginSelector.data)}</p>
                <p>{loginSelector.error}</p>
                <hr/>
            </div> */}
            <div>
                <p> Count: {counterState.value}</p>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <hr/>
            <div>
                <p>Double Count: {counterState.doubleValue}</p>
                <button onClick={() => dispatch(incrementDouble({value: 10}))}>+</button>
                <button onClick={() => dispatch(decrementDouble({value: 10}))}>-</button>
            </div>
            <hr/>
        </>
    )
}

export default ReduxComponent;