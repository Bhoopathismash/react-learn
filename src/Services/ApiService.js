import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginError } from '../Redux/reducer/loginSlice';
import axios from 'axios';

export default class ApiService {
    
    static getUser = () => {
        return axios.get("https://reqres.in/api/users/1")
                  .then((response) => response.data)
    }

    /* //fetch("https://jsonplaceholder.typicode.com/todos/1")
            fetch("https://reqres.in/api/users/1")
                  .then((response) => response.json())
                  .then((json) => dispatch(loginSuccess({payload: json})))
                  .catch((err) => dispatch(loginError({error: "Error Login" }))); */
    
}