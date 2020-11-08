import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

//Context
import { AuthContext } from '../context/context';

const AuthRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;
