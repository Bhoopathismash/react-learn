import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Redux/reducer/counterSlice';
//import { loginStart, loginSuccess, loginError } from '../Redux/reducer/loginSlice';

const ReduxComponent = () => {
    const count = useSelector(state => state.counter.value);
    const loginSelector = useSelector(state => state.loginStatus);
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
            <div>
                <hr/>
                <p>{JSON.stringify(loginSelector.data)}</p>
                <p>{loginSelector.error}</p>
                <hr/>
            </div>
            <p> Count: {count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <hr/>  
        </>
    )
}

export default ReduxComponent;