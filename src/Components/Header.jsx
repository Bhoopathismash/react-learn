import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginStart, loginSuccess, loginError } from '../Redux/reducer/loginReducer';

const Header = () => {
    const loginSelector = useSelector(state => state.loginStatus);
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

    return (
        <>
            <div>
                <Link to='/' >Home</Link> &nbsp;
                <Link to='/about'>About</Link> &nbsp;
                <Link to='/contact'>Contact</Link> &nbsp;
                <Link to='/use-callback'>useCallback</Link> &nbsp;
                <Link to='/use-memo'>useMemo</Link> &nbsp;
                <Link to='/redux'>Redux</Link> &nbsp;
                <a href='#' onClick={(e) => { dispatch(middleware); e.preventDefault();}}>{loginSelector.loading ? 'Log In' : 'Log Out'}</a>
            </div>
            {loginSelector.loading ? null : (
                <>    
                    <hr/>
                    <h3> Hi {loginSelector.data.first_name} &nbsp; {loginSelector.data.last_name}</h3>
                </>
            )}

        </>
    )
}

export default Header;