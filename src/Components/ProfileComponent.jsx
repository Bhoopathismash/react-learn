import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const ProfileComponent = () => {
  //const { user: currentUser } = useSelector((state) => state.loginSlice);
  const slice = useSelector((state) => state.loginSlice);
  const currentUser = slice.data.token;

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.substring(0, 20)} ...{" "}
        {currentUser.substr(currentUser.length - 20)}
      </p>
     {/*  <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
    </div>
  );
};

export default ProfileComponent;