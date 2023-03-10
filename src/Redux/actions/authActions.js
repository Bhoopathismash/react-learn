import AuthService from "../../Services/authService";
import {
  loginStart,
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutUser,
} from "../reducer/loginSlice";

export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password).then(
    (response) => {
      dispatch(registerSuccess());
      return Promise.resolve();
    },
    (error) => {
      dispatch(registerError());
      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  dispatch(loginStart());
  return AuthService.login(username, password).then(
    (data) => {
      dispatch(loginSuccess({ user: data }));
      return Promise.resolve();
    },
    (error) => {
      dispatch(loginError());
      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch(logoutUser());
  return Promise.resolve();
};
