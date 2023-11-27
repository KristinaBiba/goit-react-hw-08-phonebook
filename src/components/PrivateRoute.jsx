import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuth } from 'redux/Auth/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.shape({
    component: PropTypes.elementType,
    redirectTo: PropTypes.string,
  }),
};
