import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// check if the user is authenticated
// if Yes , redirect/navigate/ to page
// else navigate to login page.

const RequreAuth = ({ children }) => {
    const location = useLocation()
  const auth = useSelector((store) => store.AuthReducer.isAuth);
  if (!auth) {
    // redirect to login page
    return <Navigate to="/login" state={{from:location}} replace />;
  } else {
    return children;
  }
};

export default RequreAuth;
