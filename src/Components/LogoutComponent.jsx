import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { logout } from "../Redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const LogoutComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
      dispatch(logout())
        .then(() => {
          navigate("/");
          window.location.reload();
        })
        .catch(() => {          
        });
    }, []);
  
    return <></>;
  }

  export default LogoutComponent;