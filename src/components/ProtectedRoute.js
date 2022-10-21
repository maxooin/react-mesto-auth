import React from "react";
import {Navigate, Route} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
  return (
    <Route>
      {
        () =>
          props.loggedIn ? <Component {...props} /> : <Navigate to="./login"/>
      }
    </Route>
  );
};

export default ProtectedRoute;

