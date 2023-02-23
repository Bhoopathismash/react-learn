import AuthService from "../../Services/auth.service";
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

      /* dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        }); */

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch(registerError());

      /* dispatch({
          type: SET_MESSAGE,
          payload: message,
        }); */

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch(loginSuccess({ user: data }));
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch(loginError());

      /*dispatch({
          type: SET_MESSAGE,
          payload: message,
        }); */

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch(logoutUser());
  return Promise.resolve();
};
