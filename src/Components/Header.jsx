import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginError,
} from "../Redux/reducer/loginSlice";
import NavBarComponent from "./NavBarComponent";
import ApiService from "../Services/ApiService";


const Header = () => {
  const loginSelector = useSelector((state) => state.loginSlice);
  console.log('loginSelector', loginSelector)
  const dispatch = useDispatch();
  /*  const logActions = async () => {
    if (!loginSelector.loading) {
      dispatch(loginStart());
    } else {
      try {
        const getUser = await ApiService.getUser();
        dispatch(loginSuccess({ data:  getUser.data }))
      } catch(err) {
        dispatch(loginError({ error: "Error Login" }))
      }
    }
  }; */

  return (
    <>
      <div>
        <div className="Navbar">
          <NavBarComponent />
        </div>
      </div>
      {!loginSelector.isLoggedIn ? null : (
        <div className="container">
          <h3>
            {" "}
            Hi {loginSelector.data.first_name} &nbsp;{" "}
            {loginSelector.data.last_name}
          </h3>
        </div>
      )}
    </>
  );
};

export default Header;
