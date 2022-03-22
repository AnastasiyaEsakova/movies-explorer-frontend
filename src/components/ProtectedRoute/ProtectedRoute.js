import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => {
  return (
    <>
    <Route>
      {
        () => props.loggedIn ?  <Component {...props} /> : <Redirect to="/signin" />
      }
    </Route>
    {props.children}
    </>
)}

export default ProtectedRoute;
