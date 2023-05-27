import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return <Route {...rest} element={!isAuthenticated && !loading ? <Navigate to="/login" /> : <Element />} />;
};

export default PrivateRoute;
