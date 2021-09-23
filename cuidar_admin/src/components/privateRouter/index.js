import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isValidToken } from '../../api';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const verify = () => {
    if (localStorage.getItem('cuidar_access_token')) {
      return isValidToken();
    }
    return false;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        verify() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
