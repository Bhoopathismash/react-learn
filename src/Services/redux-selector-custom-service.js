import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginError } from '../Redux/reducer/loginSlice';

export const ReduxLoginSelectorService = () => {
    const loginSelector = useSelector(state => state.loginStatus);

    return loginSelector;
}

export const ReduxMiddlewareService = () => {
    const loginSelector = ReduxLoginSelectorService();
    const dispatch = useDispatch();
    const middleware = () => {
        //const dispatch1 = () => {
            if (!loginSelector.loading) {
                dispatch(loginStart());
            } else {
                //fetch("https://jsonplaceholder.typicode.com/todos/1")
                fetch("https://reqres.in/api/users/1")
                  .then((response) => response.json())
                  .then((json) => dispatch(loginSuccess({payload: json})))
                  .catch((err) => dispatch(loginError({error: "Error Login" })));
            }
    
        //};
    
       // return dispatch1();
    };

    return dispatch(middleware);
}