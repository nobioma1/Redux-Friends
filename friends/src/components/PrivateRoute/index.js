import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../../localStorage';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = getToken();
  return (
    <Route
      {...rest}
      render={() => {
        if (token) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
