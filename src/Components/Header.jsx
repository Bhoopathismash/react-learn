import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginError,
} from "../Redux/reducer/loginReducer";
import NavBarComponent from './NavBarComponent'

const Header = () => {
  const loginSelector = useSelector((state) => state.loginStatus);
  const dispatch = useDispatch();
  const logActions = () => {
    if (!loginSelector.loading) {
      dispatch(loginStart());
    } else {
      //fetch("https://jsonplaceholder.typicode.com/todos/1")
      fetch("https://reqres.in/api/users/1")
        .then((response) => response.json())
        .then((json) => dispatch(loginSuccess({ payload: json })))
        .catch((err) => dispatch(loginError({ error: "Error Login" })));
    }
  };

  return (
    <>
      <div>
        <div className='Navbar'>
          <NavBarComponent />
          <a
            href="#"
            onClick={(e) => {
              dispatch(logActions);
              e.preventDefault();
            }}
          >
            {loginSelector.loading ? "Log In" : "Log Out"}
          </a>
        </div>
      </div>
      <hr />
      {loginSelector.loading ? null : (
        <>
          <hr />
          <h3>
            {" "}
            Hi {loginSelector.data.first_name} &nbsp;{" "}
            {loginSelector.data.last_name}
          </h3>
        </>
      )}
    </>
  );
};

export default Header;
