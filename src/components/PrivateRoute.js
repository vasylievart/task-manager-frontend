import React, {Component, useContext} from "react";
import {Route, Redirect} from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest}) => {
  const {auth} = useContext(AuthContext);

  return (
    <Route 
      {...rest}
      render={(props) => 
        auth.token ? (
          <Component {...props}/>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;